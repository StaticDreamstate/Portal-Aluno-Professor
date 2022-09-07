"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlConnection = void 0;
const Connection_1 = __importDefault(require("./Connection"));
const database_1 = __importDefault(require("../infra/config/database"));
const mySqlConnection = new Connection_1.default(database_1.default.database, database_1.default.username, database_1.default.password, {
    dialect: "mysql",
    port: database_1.default.port,
    host: database_1.default.host
});
exports.mySqlConnection = mySqlConnection;
