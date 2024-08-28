import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";

const productRouter =  express.Router()
productRouter.use(bodyParser.json())

// all products
productRouter.get('/', (req,res)=>{
    products.fetchProducts(req,res)
})

// recent products
productRouter.get('/recent', (req,res)=>{
    products.fetchRecentProducts(req,res)
})

// single product
productRouter.get('/:id', (req,res)=>{
    products.fetchAProduct(req,res)
})

// add a product
productRouter.post('/add', (req,res)=>{
    products.addAProduct(req,res)
})

// update product
productRouter.patch('/:id', (req,res)=>{
    products.updateAProduct(req,res)
})

// delete a product
productRouter.delete('/:id',(req,res)=>{
    products.deleteAProduct(req,res)
})

export{
    productRouter
}