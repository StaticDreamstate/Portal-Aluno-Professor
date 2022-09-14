import { Request, Response } from "express";
import ENV from "../../infra/config/env";

const controller = {

    welcome(req: Request, res: Response) {
        return res.status(200).json(`Bem-vindo. API ${ENV.API_NAME} Versão ${ENV.API_VER} Por ${ENV.AUTHOR}`);
    },

}

export default controller;
