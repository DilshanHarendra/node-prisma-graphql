const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.status(200).send({
        message:'Hello world'
    })
})

app.listen(8000,()=>console.log("http://localhost:8000"))
