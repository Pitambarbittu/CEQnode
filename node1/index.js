const express=require("express")
const app=express()


const port = process.env.port || 3000
app.get("/get/:value",(req,res)=>{
    const value=req.params.value

    console.log(value);
    
    
    if (value == 1) {
        res.send(`user 1 logged in ${value}`);
    } else if (value == 2) {
        res.send(`please enter correct email ${value}`);
    } else {
        res.send(`please signup first to 1 or 2 not above 2:you have given the ${value}`);
    }
});

app.get('*',(req,res)=>{
    res.send("invalid route")
})

app.get("/geet/:datsa")


app.listen(port,()=>{
    console.log(port)
    console.log("App is listening at ", port)
})