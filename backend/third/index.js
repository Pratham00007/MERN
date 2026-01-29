// including express module and intitalising an app
const express =require  ('express');
const app=express();

//variable that stores the port number 
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

// start your app or server     
app.listen(port,()=>{
    console.log("Application start ho chuki hai ");
});