const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(express.static('views'))

const Uemail = 'sinanbh9605@gamil.com'
const Upass = '123'

app.post('/login',(req,res)=>{
    const { email, pass } = req.body
    if (email === Uemail && pass === Upass) {
        res.send(`Hai.... ${email}`)
    }else{
        res.send('login faild')
    }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>console.log('server running.....'))