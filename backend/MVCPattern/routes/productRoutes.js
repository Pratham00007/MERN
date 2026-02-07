  const express = require('express')
  const router=express.Router()
  const {getProducts}=require('../controllers/productController')

  
  router.get('/products',getProducts)
// request jo aaegi wo getProducts ke paas bhejdo
  module.exports=router