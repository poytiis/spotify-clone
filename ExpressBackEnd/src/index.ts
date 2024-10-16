import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
  const body = req.body;
  console.log(body)
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});