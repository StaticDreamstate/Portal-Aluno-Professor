"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const env_1 = __importDefault(require("./config/env"));
const logger_1 = __importDefault(require("../infra/logger"));
class App {
    constructor() {
        this.defaultPort = process.env.PORT || 8080;
        this.instance = (0, express_1.default)();
    }
    setup(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedPort = options.port ? options.port : this.defaultPort;
            this.instance.use(express_1.default.json());
            this.instance.use(express_1.default.urlencoded({ extended: true }));
            if (options.test) {
                console.log("[OK] Teste de configuração.");
                console.log(`API: ${env_1.default.API_NAME}`);
                console.log(`Porta TCP: ${selectedPort}`);
                console.log("Saindo...");
                return;
            }
            this.instance.listen(process.env.PORT || selectedPort, () => {
                console.log(`[OK] API aguardando requisições... [Porta TCP ${selectedPort}]`);
            });
            try {
                database_1.mySqlConnection.hasConnection();
            }
            catch (error) {
                console.log(`[!] Conexão Recusada: ${error}`);
                logger_1.default.error(`Conexão com o banco de dados recusada: ${error}`);
                return;
            }
        });
    }
    getInstance() {
        console.log("[OK] Banco de Dados conectado.");
        logger_1.default.info("Banco de dados conectado.");
        return this.instance;
    }
}
exports.default = App;
