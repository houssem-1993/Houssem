const express = require('express');
const connectDB = require('./config/connectDB');
require('dotenv').config();

const app= express();
//connect with db
connectDB();
//router
app.use(express.json())
app.use("/api/user",require('./routes/user'))
app.use("/api/student",require('./routes/student'))


const PORT=process.env.PORT;

app.listen(PORT,(err)=>err?console.log(err):console.log(`server is running on port ${PORT}`))