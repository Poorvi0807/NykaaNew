const express = require('express');
const connection=require('./config/db')
const userRouter = require('./routes/user.route');
const authentication = require('./middleware/authentication');
const productRouter = require('./routes/product.route');

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Applis working')
});

app.use('/api', userRouter)
app.use(authentication)
app.use('/api',productRouter)

app.listen(8080,async()=>{
    try {
        await connection()
        console.log(`8080`)
    } catch (error) {
        console.log('MongDB is not Connected')
    }
})