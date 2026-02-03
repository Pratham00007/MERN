const express=require('express');
const app=express();
const connectDB = require('./db');
const users=require('./routes/Users');
const PORT =3000;

//body parser
app.use(express.json());
//connect to database
connectDB();

//loading user
app.use('/api',users);

app.get('/',(req,res)=>{
    console.log("I am Inside the route  handler");
    res.send("Welcome Babes");
})

app.listen(PORT, ()=>{
    console.log("Server is Up")
})