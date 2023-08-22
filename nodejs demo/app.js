const express = require("express");
const userRouter = require("./routes/routes")
const mongoose = require("mongoose")

const app=express();
mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser:true
}).then(res =>(console.log("connection successful"))).catch(res=>(console.log(e.message)))

app.use(express.json());

app.use("/api/v1",userRouter)

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`Server started at ${PORT}`));

