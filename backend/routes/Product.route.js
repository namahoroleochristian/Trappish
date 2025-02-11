import express from "express";
// import userModel from "./Models/User.model.js";

import { CreateProduct, DeleteProduct, getAllProducts, UpdateProducts } from "../controllers/Product.controller.js";


export const Router = express.Router();


  Router.post("/", CreateProduct);

  Router.get("/Get", getAllProducts);
  Router.delete("/:id", DeleteProduct);
  Router.put('/:id',UpdateProducts)
export default Router;