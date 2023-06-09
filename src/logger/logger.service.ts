import { Logger, ILogObj } from "tslog";

export class LoggerService {
  private logger: Logger<ILogObj>;

  constructor() {
    this.logger = new Logger({
      type: "pretty",
      prettyLogTemplate: "{{dateIsoStr}} {{logLevelName}}  ",
    });
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  error(...args: unknown[]) {
    this.logger.error(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
