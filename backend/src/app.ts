import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import "reflect-metadata";
import fileUpload from "express-fileupload";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";
import { model_list } from "./utils/model_list";
import rateLimit from "express-rate-limit";
import AuthRouter from "./modules/auth/routes/auth.route";

const app = express();

model_list;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});

app.use(limiter);

app.use(
  cors({
    origin: ["*"],
  })
);
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api", AuthRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
