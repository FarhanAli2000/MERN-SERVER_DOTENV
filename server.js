import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

//configure env
dotenv.config();


//i will use rest object to create API'S
const app=express();

//Now i will create rest api for my project
app.get('/',(req,res)=>{
res.send("<h1>welcome to Ecommerce app</h1>")
})

//PORT
const PORT=process.env.PORT ||8080;

//app run OR listen
app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT} and mode is ${process.env.DEV_MODE}`.bgCyan.white)
})