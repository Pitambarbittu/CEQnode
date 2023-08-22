const express = require('express')
 const app = express()


app.get("/api/t2/:id", (req, res)=>{
    const id = req.params.id 
    const name = req.query.name
    console.log(id)
    // const firstName = req.query.firstName
    // const lastName = req.query.lastName
    // console.log(lastName)
    // console.log(firstName)
    // res.send(200).json({
    //     // status:true,
    //     firstName,
    //     lastName
    // })
//    res.send("hi there, this is the first route")
      res.send({id,name})


})

app.get("*", (req, res)=>{
  res.send("this is invalid rote , please use this /api/t2 route ")
})

 app.listen(5000,()=>{
    console.log("this app is connected to 5000 port")
 })