const mongoose=require('mongoose');
require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log('DB Connection is Sucessful'))
    .catch((error)=>{console.log("Error in DB connection ",error)
     process.exit(1)}) 
}
module.exports=dbConnect;