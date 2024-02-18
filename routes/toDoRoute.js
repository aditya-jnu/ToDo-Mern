const express=require("express");
const router=express.Router();

const {createToDo}=require('../controllers/createToDo');
const{getToDo}=require("../controllers/getToDo");
const{updateToDo}=require("../controllers/updateToDo.js");
const{deleteToDo}=require("../controllers/deleteToDo.js");

router.get("/",getToDo);
router.post("/createToDo",createToDo);
router.put("/updateToDo/:id",updateToDo);
router.delete("/deleteToDo/:id",deleteToDo);

module.exports=router;