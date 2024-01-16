import { Request, Response } from "express";
import { omit } from "lodash";
import { AppMessage } from "../../../constants/app_message";
import User from "../../../models/user.model";
import errorResponse from "../../../utils/errorResponse";
import handleError from "../../../utils/handleError";
import successResponse from "../../../utils/successResponse";
import AuthService from "../services/auth.service";

export default class AuthController {
  static createUser = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({
        where: {
          username,
        },
      });

      if (existingUser)
        return errorResponse(req, res, 403, AppMessage.alreadyExists);

      const hashedPassword = await AuthService.encryptPassword(password);

      const user = await User.create({
        ...req.body,
        password: hashedPassword,
      });

      const { access_token, refresh_token } =
        AuthService.generateAuthToken<User>(user.dataValues, "user");

      return successResponse(req, res, null, {
        access_token,
        refresh_token,
        ...omit(user.dataValues, "password"),
      });
    } catch (error) {
      console.error({ error });
      handleError(req, res, error);
    }
  };

  static login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({
        where: {
          username,
        },
      });

      if (!user)
        return errorResponse(req, res, 403, AppMessage.invalidCredential);

      const validatedUser = await AuthService.validateUser<User>(
        user,
        password
      );

      if (!validatedUser) {
        return errorResponse(req, res, 403, AppMessage.invalidCredential);
      }

      const { access_token, refresh_token } =
        AuthService.generateAuthToken<User>(user.dataValues, "user");

      return successResponse(req, res, null, {
        access_token,
        refresh_token,
        ...omit(user.dataValues, "password"),
      });
    } catch (error) {
      handleError(req, res, error);
    }
  };

  static generateToken = async (req: Request, res: Response) => {
    try {
      const user = (req as any).user;

      const existingUser = await User.findByPk(user.id);
      if (!existingUser)
        return errorResponse(req, res, 403, AppMessage.unauthorized);

      const { access_token, refresh_token } =
        AuthService.generateAuthToken<User>(existingUser.dataValues, "user");

      return successResponse(req, res, null, { access_token, refresh_token });
    } catch (error) {
      handleError(req, res, error);
    }
  };
}
