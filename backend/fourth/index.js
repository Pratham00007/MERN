const express= require('express');
const app=express()
const port =3000    



// // loading middleware into the app
// app.use(express.json());
// // sending json data from postman api 

// // middleware => login->auth->validation

// // login
// const loginMiddleware =function (req,res,next){
//     console.log('Login kar raha')
//     next();
// }
// app.use(loginMiddleware);

// // auth
// const authMiddleware =function (req,res,next){
//     console.log('Authenticate kar raha')
//     next();
// }
// app.use(authMiddleware);

// // validation
// const validationMiddleware =function (req,res,next){
//     console.log('Validating')
//     next()
    
// }
// app.use(validationMiddleware);

const route=require('./routes/route')
// mounting routes
app.use('/api',route)

// /api/student for student


// route handler se phele middleware aaenge 
app.get('/',(req,res)=>{
    console.log("I am route handler")
    console.log(req.body);
    res.send("Hello World")
})



app.listen(port, ()=>{
    console.log(`Example app listening on port  ${port}`)
}) 