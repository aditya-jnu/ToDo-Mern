const toDoModel=require('../models/toDoSchema')

exports.updateToDo=async(req,res)=>{
    try{
        const id=req.params.id;
        const{title}=req.body;
        const updateToDo=await toDoModel.findByIdAndUpdate({_id:id},{title,updatedAt:Date.now()});
        if(!updateToDo){
            res.status(404)
            .json({
                success:false,
                message:"No ToDo found with given id"
            })
        }
        else{
        res.status(200)
        .json(
            {
                success:true,
                data:updateToDo,
                message:"ToDo Updated Successfully"
            }
        )
        }
        
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