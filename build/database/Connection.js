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
const sequelize_1 = require("sequelize");
const logger_1 = __importDefault(require("../infra/logger"));
class Connection {
    constructor(nome, usuario, senha, conf) {
        this.db_name = nome;
        this.db_user = usuario;
        this.db_pass = senha;
        this.db_config = conf;
        try {
            this.instance = new sequelize_1.Sequelize(this.db_name, this.db_user, this.db_pass, this.db_config);
        }
        catch (erro) {
            logger_1.default.error(`[Sequelize] Conexão Recusada: ${erro}`);
            throw erro;
        }
    }
    getInstance() {
        return this.instance;
    }
    hasConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.instance.authenticate();
                logger_1.default.info("[hasConnection] Banco de dados conectado.");
            }
            catch (erro) {
                logger_1.default.error(`[hasConnectio] Falha na conexão: ${erro}`);
            }
        });
    }
}
exports.default = Connection;
;
