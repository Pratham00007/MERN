// this will store all the specific routes

const express=require('express')
const router=express.Router()   

// define the hompage route


router.get('/', (req, res) => {
  res.send('Got a  Request');
});


// now this to get http://localhost:3000/api/
// router.get('/',(req,res)=>{
//   res.sendFile('./dummy.html',{root:__dirname})
// })

router.post('/items',(req,res)=>{
  res.json({x:1,y:2,z:3});
});

// app.post('/items',(req,res)=>{
//   res.send('Got a Post request');
// });

router.put('/items:id' , (req,res)=>{
  res.send('Got a put request')
})

router.delete('/items:id',(req,res)=>{
  res.send("Got a Delete request")
});

module.exports=router