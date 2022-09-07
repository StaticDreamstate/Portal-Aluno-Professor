import Express, { Application } from "express";
import { mySqlConnection } from "../database";
import ENV from "./config/env";
import logger from "../infra/logger";

type SetupOptions = {
  test?: boolean;
  port?: number;
};

export default class App {
  private instance: Application;
  private defaultPort: any = process.env.PORT || 8080;

  constructor() {
    this.instance = Express();
  }

  async setup(options: SetupOptions): Promise<void> {

    const selectedPort = options.port ? options.port : this.defaultPort;

    this.instance.use(Express.json());
    this.instance.use(Express.urlencoded({ extended: true }));

    if (options.test) {
      console.log("[OK] Teste de configuração.");
      console.log(`API: ${ENV.API_NAME}`);
      console.log(`Porta TCP: ${selectedPort}`);
      console.log("Saindo...");
      return;
    }

    this.instance.listen(process.env.PORT || selectedPort, () => {
      console.log(`[OK] API aguardando requisições... [Porta TCP ${selectedPort}]`);
    })

    try {
      mySqlConnection.hasConnection();

    } catch (error) {
      console.log(`[!] Conexão Recusada: ${error}`);
      logger.error(`Conexão com o banco de dados recusada: ${error}`);
      return;
    }

  }

  getInstance() {
    console.log("[OK] Banco de Dados conectado.");
    logger.info("Banco de dados conectado.");
    return this.instance;
  }

}