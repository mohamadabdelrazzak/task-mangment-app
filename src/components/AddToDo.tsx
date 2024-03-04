import {useState} from "react";
import { useToDos } from "../store/ToDocontect";

const AddToDo = () => {

  const {handleAddToDo} = useToDos()
    const [toDo,setToDo] = useState("")

    const handleSubmit=(e:React.FormEvent<Element>)=>{
    e.preventDefault()
    handleAddToDo(toDo)
    setToDo("")
    }
  return (
    <form  onSubmit={handleSubmit}>
        <input className="form-control col-10"  type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
        <button className=" btn btn-primary rounded  col-2 mt-3 ms-3  " type="submit" >Add</button>
    </form>
  )
};

export default AddToDo;