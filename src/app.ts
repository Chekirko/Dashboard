import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";

export class App {
  app: Express;
  port: number;
  server: Server;

  constructor() {
    this.port = 8000;
    this.app = express();
  }

  useRouter() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRouter();
    this.server = this.app.listen(this.port);
    console.log(`Сервер запущено на http://localhost:${this.port}`);
  }
}
