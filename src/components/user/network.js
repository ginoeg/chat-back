import { Router } from "express";
import * as Controller from "./controller"

const UserRouter = Router();

UserRouter.get("/", Controller.findAll);
UserRouter.post("/", Controller.store);

export default UserRouter;