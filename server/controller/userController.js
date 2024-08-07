import { userModel } from "../postgres/postgres.js";

export const getAllEmp=async (req, res)=> {
    try{
        const users = await userModel.findAll();
        console.log(users);
        return res.status(200).json({user : users, message : "data get success"});
     }catch(err){
        console.log(err, "get error ============>>>>>");
        return res.status(200).json({message : "data get failed"});
     }
}

export const addEmp = async(req,res)=>{
    const {name, email, designation,empId} = req.body;
    try{
        await userModel.create(req.body);
        console.log(req.body);
        return res.status(200).json({message :"data added successfully"});
    }catch(err){
        console.log(err);
        return res.status(200).json({message : "data added failed"});
    }
}
export const updateEmp = async(req,res)=>{
    let empId = req.params.empId;
    console.log(empId);
    try{
        const emp = await userModel.update(req.body,{where:{empId}});
        return res.status(200).json({emp:req.body,message :"data updated successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message : "data updated failed"});
     }
}

export const deleteEmp = async(req,res)=>{
    let empId = req.params.empId;
    console.log(empId);
    try{
        const emp = await userModel.findOne(req.body,{where:{empId}});
        if(emp==null){
            return res.status(200).json({emp:req.body,message :"emp not found"});
        }
        await emp.destroy();
        return res.status(200).json({emp:userModel,message :"data delete successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message : "data delete failed"});
     }
}