import express from "express";
import bodyParser from "body-parser";
import { productsFunc } from "../model/index.js";

const productRouter =  express.Router()
productRouter.use(bodyParser.json())

// all products
productRouter.get('/', (req,res)=>{
    productsFunc.fetchProducts(req,res)
})

// recent products
productRouter.get('/recent', (req,res)=>{
    productsFunc.fetchRecentProducts(req,res)
})

// single product
productRouter.get('/:id', (req,res)=>{
    productsFunc.fetchAProduct(req,res)
})

// add a product
productRouter.post('/add', (req,res)=>{
    productsFunc.addAProduct(req,res)
})

// update product
productRouter.patch('/:id', (req,res)=>{
    productsFunc.updateAProduct(req,res)
})

// delete a product
productRouter.delete('/:id',(req,res)=>{
    productsFunc.deleteAProduct(req,res)
})

export{
    productRouter
}