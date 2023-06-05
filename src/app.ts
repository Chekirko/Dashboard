import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  userController: UserController;

  constructor(logger: LoggerService, userController: UserController) {
    this.port = 8000;
    this.app = express();
    this.logger = logger;
    this.userController = userController;
  }

  useRouter() {
    this.app.use("/users", this.userController.router);
  }

  public async init() {
    this.useRouter();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущено на http://localhost:${this.port}`);
  }
}
