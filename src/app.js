import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

//init middlewares
const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db

//init routes

//handling error

export default app;
