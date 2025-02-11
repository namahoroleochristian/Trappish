import { CreateUser, GetUsers } from "../controllers/User.controller.js";
import express, { Router } from "express";
export const UsersRouter = express.Router()

UsersRouter.post("/users", CreateUser);
UsersRouter.get('/get/Users', GetUsers);

export default UsersRouter
