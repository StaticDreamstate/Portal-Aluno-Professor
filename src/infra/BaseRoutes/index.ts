import { Router } from "express";
import welcomeRoute from "../../modules/Welcome/routes";

const routes = Router();

routes.use(welcomeRoute);

export default routes;