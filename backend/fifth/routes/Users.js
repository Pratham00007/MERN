const express=require('express')
const router=express.Router();

const User=require('../models/userModel');

// routes



// view/read
router.get('/users',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

// create

router.post('/users',async(req,res)=>{
    try{
        const {name,age,weight}=req.body;
        const newUser=new User({name,age,weight});
        await newUser.save(newUser);
        res.status(200).json({
            success:true,
            user:newUser
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

// update
router.put('/users/:id',async(req,res)=>{
    const {id} =req.params;
    const {name,age,weight}=req.body;

    try{
        // purana data retturn
        const updateUser =await User.findByIdAndUpdate(id,{name,age,weight});
        // to check user must no tbe empty
        if(!updateUser){
            res.json({
                message:"User not found"
            })
        }
        // if succesfully updates
        res.status(200).json({
            success:true,
            user:updateUser
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})


// delete
router.delete('users/:id',async(req,res)=>{
    const {id}=req.params;
    try{const deletedUser=await User.findByIdAndDelete(id);
        if(!deletedUser){
            res.json({
                message: "User not found"
            })
        }
        // if user found and deleted
        res.status(200).json({
            success:true,
            user:deletedUser
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

module.exports=router;