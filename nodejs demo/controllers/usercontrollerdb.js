const useermodal = require("../modal/usermodal")

exports.createUser1 = async (req,res,next)=>{
    try{
        const data = req.body;
        const user = await useermodal.create(data);
        // const usersData = fs.readFileSync("users.json","utf-8");
        // const users = JSON.parse(usersData).users;
        // users.push(data);
        // fs.writeFileSync("users.json",JSON.stringify({
        //     users:users
        // }),"utf-8");
        // const user = fs.readFileSync("users.json","utf-8")
        res.status(201).json({
            status:true,
            msg:"created user",
            
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}



exports.getUsers1 = async (req,res,next)=>{
    try{
        const users = await useermodal.find();

        res.status(200).json({
            status:true,
            msg:"Users",
            data: users
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}



exports.getUser1 = async (req,res,next)=>{
    try{
        const id = req.params.id
       const user = await useermodal.findById(id);
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


exports.updateUser1 = async (req,res,next)=>{
    try{
        const data = req.body
        const id = req.params.id
       const user = await useermodal.findByIdAndUpdate(id, data);
        res.status(200).json({
            status:true,
            msg:"user Updated",
            data : user,
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}



exports.deleteUser1 = async (req,res,next)=>{
    try{
        const id = req.params.id
       const user = await useermodal.findByIdAndDelete(id);
        res.status(204).json({
            status:true,
            msg:"user deleted",
            data : user,
        })
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"not found"
        })
    }
}