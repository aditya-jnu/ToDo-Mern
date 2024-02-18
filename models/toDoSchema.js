const mongoose=require('mongoose');

const toDoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:false,
            maxLength:100,
        } 
    }
);
module.exports=mongoose.model("toDoSchema ",toDoSchema);