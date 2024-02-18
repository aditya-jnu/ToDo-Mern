import ToDo from "./ToDo";
function Displaybox(props){
    return(
        <div className="displaybox">
               { props.toDo.map((item) =>{ return <ToDo key={item._id} title={item.title} id={item._id} setToDo={props.setToDo}/>})}
        </div>
    )
}
export default Displaybox;