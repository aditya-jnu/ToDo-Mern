import axios from 'axios';
const baseUrl="http://localhost:4000/api/v1"

const getToDos=(setToDo)=>{
   axios.get(baseUrl).then(({data})=>{
    console.log("Hiiii",data.data)
    console.log(typeof data.data)
     setToDo(data.data)
   })
}

const createToDo=(info, setInfo, setToDo)=>{
  console.log("Create Clicked")
  console.log("hello",info)
  axios
  .post(`${baseUrl}/createToDo`, info)
  .then((data)=>{
    console.log("aa",data.data)
    getToDos(setToDo)
  })
}

const deleteToDo=(id,setToDo)=>{
 console.log('Delete Clicked')
 axios.delete(`${baseUrl}/deleteToDo/${id}`)
 .then((data)=>{getToDos(setToDo)})
}
export {getToDos, createToDo, deleteToDo};