import { getToDos } from "./utils/HandleApi";
import Todoform from "./components/Todoform";
import Displaybox from "./components/Displaybox";
import { useState, useEffect } from "react";

function App() {
  const[create,setCreate]=useState(false);
  const[toDo,setToDo]=useState([]);
  useEffect(()=>{getToDos(setToDo)},[])

  return (
    <div className="App">
      <div className="mainApp">
      <div id="mainApp1">
       <div style={{color:"white"}} id="head">ToDo List</div>
       <div><Displaybox toDo={toDo} setToDo={setToDo}/></div>
      </div> 
      <div id="mainApp2">
       <button onClick={()=>{setCreate(true)}} id="btn1" >Create a ToDo</button>
       <div>{(create)?(<Todoform setCreate={setCreate} setToDo={setToDo}/>):(<div></div>)}</div>
      </div> 
      </div>
    </div>
  );
}
export default App;
