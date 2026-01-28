const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Got a  Request')
// });

// app.get('/',(req,res)=>{
//   res.sendFile('./dummy.html',{root:__dirname})
// })

// app.post('/items',(req,res)=>{
//   res.json({x:1,y:2,z:3});
// });

// app.post('/items',(req,res)=>{
//   res.send('Got a Post request');
// });

// app.put('/items:id' , (req,res)=>{
//   res.send('Got a put request')
// })

// app.delete('/items:id',(req,res)=>{
//   res.send("Got a Delete request")
// });

// import item ki riuter file
const item=require('./route/item');
// load into application
app.use('/api',item);

// item homepage:   /api/
// item post request /api/items
// put/delete request /api/items/id

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})