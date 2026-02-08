  const express = require('express')
  const router=express.Router()
  const {getProducts, updatedProduct,createProduct, deleteProduct}=require('../controllers/productController')

  
// request jo aaegi wo getProducts ke paas bhejdo
  router.get('/products',getProducts);
  // create product
  router.post('/products',createProduct);
  // update product
  router.put('/products/:id',updatedProduct);
  // delete product
  router.delete('/products/:id',deleteProduct)
  module.exports=router