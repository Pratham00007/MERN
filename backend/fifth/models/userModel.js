const {Schema,model}=require("mongoose");

// created Schema
const userScehma=new Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    age:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

// created Model on schema
const userModel=model("User",userScehma)
module.exports=userModel