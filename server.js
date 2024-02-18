const express=require('express');
const cors = require('cors');
const dbConnect=require("./config/database")
const toDoRoute=require('./routes/toDoRoute');
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{console.log(`Listening on ${PORT}`)})

dbConnect();

app.use("/api/v1",toDoRoute)
