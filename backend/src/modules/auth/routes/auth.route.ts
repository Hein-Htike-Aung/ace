import express from "express";
import AuthController from "../controllers/auth.controller";
import jwt_auth from "../../../middlewares/jwt_auth";

const router = express.Router();

router.post("/v1/login", AuthController.login);

router.post("/v1/users", AuthController.createUser);

router.get("/v1/generate_token", [jwt_auth], AuthController.generateToken);

export default router;
