import React from 'react';
import { deleteToDo} from '../utils/HandleApi';
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

const ToDo = (props) => {
    const[check, setCheck]=useState(false);
    function checkHandle(){
        setCheck(!check)
        console.log(check)
    }
    return (
        <div className='toDo'>
            <div style={{color:"white"}}>{(check)?(<div className='checked'>{props.title}</div>):(props.title)}</div>
            <div className='icons'>
                {<IoIosCheckboxOutline onClick={checkHandle} style={{color:"white", cursor:"pointer"}}/>}
                <MdDelete style={{color:"white", cursor:"pointer"}} onClick={()=>{deleteToDo(props.id,props.setToDo)}}/>
            </div>
        </div>
    )
}
export default ToDo;