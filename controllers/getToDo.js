const toDoModel=require('../models/toDoSchema')
exports.getToDo=async(req,res)=>{
    try{
       const toDos=await toDoModel.find({});
       res.status(200)
       .json({
          success:"true",
          data:toDos,
          message:"Fetch Successfull!!"
       })
    }
    catch(err){ 
         res.status(500)
         .json(
            {
                sucess:"false",
                message:err.message,
                data:"Internal error!!"
            }
         )
    }
}