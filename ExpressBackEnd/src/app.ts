import express, { Express, Request, Response, NextFunction  } from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route';
import playlistRoutes from './routes/playlist.route';
import bodyParser from 'body-parser';
import session from 'express-session';
import { allowCORS, errorHandler, requireAuth } from "./middlewares";

dotenv.config();

const app: Express = express();

app.use(allowCORS)
app.use(bodyParser.json())
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.get("/", requireAuth, (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/auth", authRoutes);
app.use("/playlist", playlistRoutes);

app.use(errorHandler);

export default app;
