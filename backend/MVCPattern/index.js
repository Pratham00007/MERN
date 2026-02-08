const express = require('express')
const connectDB=require('./config/db')
const { connect } = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const app = express()
const port = 3000
 

app.use(express.json());
connectDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',productRoutes);

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})
