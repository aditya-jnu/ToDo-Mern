const toDoModel=require('../models/toDoSchema')

exports.deleteToDo=async(req,res)=>{
    try{
        const id =req.params.id;
        const deleteToDo=await toDoModel.findByIdAndDelete({_id:id});
        res.status(200)
        .json(
            {
                sucess:"true",
                data:deleteToDo,
                message:"Deleted Successfully"
            }
        )
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