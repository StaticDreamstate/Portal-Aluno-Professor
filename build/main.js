"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./infra/App"));
const instanceOf = new App_1.default();
instanceOf.setup({ test: false, port: 5000 });
