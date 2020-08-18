const express = require('express')
const app = express()
const port = process.env.port || 8080

app.get('/' , (req, res)=>{
    res.send('hello test from heroku ')
})


app.listen(port , (err)=>{
    if(!err) {
        console.log('conntected')
    } else {
        console.log(err)
    }
})
