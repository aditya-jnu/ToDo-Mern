import { useEffect, useState } from "react";
import { createToDo } from "../utils/HandleApi";

function Todoform(props){
  const setToDo=props.setToDo;
    const[info,setInfo]=useState({title:""})

    function changeHandler(event){
      setInfo((prevState)=>{return{...prevState,[event.target.name]:event.target.value}});
    }

    return(
      <div className="container">
          <form onSubmit={(event)=>{ event.preventDefault(); props.setCreate(false); createToDo(info, setInfo, setToDo);}}>
            
             <input type="text"
               id="tex"
               placeholder="enter ToDo..."
               value={info.title}
               name="title"
               onChange={changeHandler}
             />
            
            <button id="btn2">Add</button>
          </form>
      </div>
    )
  }
  export default Todoform;