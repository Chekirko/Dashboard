import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.port = 8000;
    this.app = express();
    this.logger = logger;
  }

  useRouter() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRouter();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущено на http://localhost:${this.port}`);
  }
}
