import mongoose from 'mongoose';
import Product from '../models/prodeuctModel.js';

export const getProducts = async(req,res)=> {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }
    catch(err){
        console.log("error while fetching products", err.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};

export const createProducts = async(req,res)=>{
    try{
        const {name, price, image} = req.body;
        if(!name || !price || !image){
            return res.status(400).json({success: false, message: "please fill all the fields"});
        }
        const newProduct = await Product.create({
            name, price, image
        });
        res.status(201).json({success: true, data: newProduct});
    }
    catch(err){
        console.error("error while adding new product", err.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};

export const updateProduct = async(req, res)=> {
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success: false, message: "invalid product id"});
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new:true});//new:true will return the updated product
        res.status(200).json({success: true, data: updateProduct});
    }
    catch(err){
        console.log("error while updating the product", err.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};

export const deleteProduct = async(req,res)=> {
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success: false, message: "invalid product id"});
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "product deleted successfully"});
    }
    catch(err){
        console.error("error while deleting the product", err.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};