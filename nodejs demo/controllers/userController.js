const fs = require('fs');

exports.getUsers = async (req,res,next)=>{
    try{
        res.status(200).json({
            status:true,
            msg:"Users"
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}



exports.createUser = async (req,res,next)=>{
    try{
        const data = req.body;
        const usersData = fs.readFileSync("users.json","utf-8");
        const users = JSON.parse(usersData).users;
        users.push(data);
        fs.writeFileSync("users.json",JSON.stringify({
            users:users
        }),"utf-8");
        const user = fs.readFileSync("users.json","utf-8")
        res.status(200).json({
            status:true,
            msg:"created user",
            data:JSON.parse(user)
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}


exports.getUser = async (req,res,next)=>{
    try{
        const id = req.params.id
        console.log(id);
        const usersData = fs.readFileSync("users.json","utf-8");
        const users = JSON.parse(usersData).users;
        console.log(users);
        const user = users.filter((i)=>i.id == id)
console.log(user);
        res.status(200).json({
            status:true,
            msg:"created user",
            data : user,
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}


exports.updateUser = async (req,res,next)=>{
    try{
        const data = req.body
        const id = req.params.id
        console.log(id, data);
        const usersData = fs.readFileSync("users.json","utf-8");
        const users = JSON.parse(usersData).users;
        console.log(users);
        const user = users.findIndex((i)=>i.id == id)
console.log(user);
        users[user] = {
            "id" :+id,
            "username" : data.username
        }
        console.log(data);
        console.log(users);
        fs.writeFileSync("users.json",JSON.stringify({
            users:users
        }),"utf-8");
        res.status(200).json({
            status:true,
            msg:"created user",
            data : user,
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}