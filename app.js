import express from "express";
import mongoose from "mongoose";
import tasks  from "./routes/tasks.js"
import noFound from "./middleware/not-found.js";


let conn=await mongoose.connect('mongodb://localhost:27017/Task').then(()=>console.log('Connected to DB...')).catch((err)=>console.log(err))




const app=express();
//midleware
app.use(express.static('./public'))

app.use(express.json())

const port=3000;

//routes

app.use('/api/v1/tasks',tasks)

app.use(noFound)

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});

