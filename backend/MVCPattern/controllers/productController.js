const Product = require('../models/product_model');

// buisness logic
const getProducts=async(req,res)=>{
    try{
        const allProducts=await Product.find();

        if(!allProducts || allProducts.length===0){
            res.json({
                message:"There is no Product"
            })
        }

        // if we have products >=1

        res.status(200).json({
            success:true,
            products:allProducts,
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const createProduct=async (req,res)=>{
    try{
        const {name,price,description,category}=req.body;
        const newProduct=new Product({
            name,price,description,category
        });
        await newProduct.save();
        res.status(200).json({
            product:newproduct
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const updatProduct=async(req,res)=>{
    try{
        // to get the id
        const {id} = req.params;
        const {
            name,price,description,category
        }=req.body; 

        const updatedProduct=await Product.findByIdAndUpdate(
            id,{name,price,description,category},{new:True}
        );
        res.status(200).json({
            product:updatedProduct
        })

    }catch(err){

    }
}


module.exports={getProducts}