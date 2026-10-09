const express = require('express');
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api/test" , (req,res) => {
    res.status(200).json({
        message : "Backend is connected!!!"
    })
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})