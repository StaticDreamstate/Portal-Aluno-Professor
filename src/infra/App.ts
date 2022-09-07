import Express, { Application } from "express";
import ENV from "./config/env";

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

  }

  getInstance() {
    return this.instance;
  }

}