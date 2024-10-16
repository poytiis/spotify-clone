import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth';
import bodyParser from 'body-parser';
import session from 'express-session';

dotenv.config();

const app: Express = express();

const requireAuth = (req: Request, res: Response, next: any) => {
  if (req.session.userId) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.use(bodyParser.json())
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.get("/",requireAuth, (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
  const body = req.body;
  console.log(body)
});

app.use("/auth", authRoutes);

export default app;