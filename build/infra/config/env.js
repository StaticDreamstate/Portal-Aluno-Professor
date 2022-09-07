"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ENV = {
    API_NAME: process.env.API_NAME,
    NODE_ENV: process.env.NODE_ENV,
};
exports.default = ENV;
