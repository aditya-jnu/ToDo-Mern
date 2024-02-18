const toDoModel=require('../models/toDoSchema')
exports.createToDo=async(req,res)=>{
    try{
        const {title}=req.body;
        const response=await toDoModel.create({title})
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Sucessfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500).json({
             success:false,
             data:"Initital Server error!",
             message:err.message
        })
    }
}
    
