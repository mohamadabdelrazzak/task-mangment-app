import { useState , useContext } from 'react'
import todosContext from './toDo'

// type of React Prop
export type reactProp = {
  children : React.ReactNode
}

// type of ToDo
export type ToDo = {
  id:string, // id of ToDo
  task:string, // task of ToDo
  completed : boolean, // status of ToDo
  createdAt: Date // created date of ToDo
}

// Type of ToDO context
export type TODOContext = {
  TODO: ToDo[]; // list of ToDos
  handleAddToDo:(task:string)=>void, // function to add ToDo
  handleToggleToDo:(id:string)=>void, // function to toggle ToDo
  deleteToDo:(id:string)=>void,// function to delete ToDo
  deleteAll():void  // function to delete all ToDos
}

const ToDoContext = ({children}:reactProp) => { // ToDoContext component

  const [TODO, setTODO] = useState<ToDo[]>(()=>{    // list of ToDos
    const data = localStorage.getItem("todos") || "[]" // get list of ToDos from local storage
    return JSON.parse(data) // return list of ToDos
  })

  const handleAddToDo = (task:string)=>{ // function to add ToDo
  setTODO((prev)=>{ // set list of ToDos
    const newTodos:ToDo[] = [ // new list of ToDos
      {
        id:Math.random().toString(), // id of ToDo
        task, // task of ToDo
        completed:false, // status of ToDo
        createdAt: new Date() // created date of ToDo
      },
      ...prev // old list of ToDos
    ]
    localStorage.setItem("todos",JSON.stringify(newTodos)) // set list of ToDos to local storage
    return newTodos // return new list of ToDos
    })
  } 

  const handleToggleToDo = (id:string) =>{ // function to toggle ToDo
     setTODO((prev)=>{ // set list of ToDos
      const newTodos = prev.map((todo)=>{ // new list of ToDos
        if(todo.id === id){
          return {...todo,completed : !todo.completed}
        }
        return todo
      })
      localStorage.setItem("todos",JSON.stringify(newTodos)) // set list of ToDos to local storage
      return newTodos
     })
    }
    
    const deleteToDo = (id:string) =>{ // function to delete ToDo
      setTODO((prev)=>{ //
        const newToDos = prev.filter((todo)=>todo.id !== id) //
        localStorage.setItem("todos",JSON.stringify(newToDos))
      return newToDos
    })
  }

  const deleteAll = () =>{
    setTODO([])
    localStorage.removeItem("todos")
  }


  return (
    <todosContext.Provider value={{TODO,handleAddToDo,handleToggleToDo,deleteToDo,deleteAll}}
    >
      {children}
    </todosContext.Provider>
  ) 
}

export default ToDoContext

// eslint-disable-next-line react-refresh/only-export-components
export const useToDos = () =>{
  const todosConsumer = useContext(todosContext);
  if(!todosConsumer){
    throw new Error ("useTodos used outside of Provider")
  }
  return todosConsumer
}