import express from "express";
import bodyParser from "body-parser";
import { productsFunc } from "../model/index.js";

const cartRouter =  express.Router()

cartRouter.use(bodyParser.json())

