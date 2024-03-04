import { createContext } from "react";
import  { TODOContext } from "./ToDocontect";



const todosContext = createContext<TODOContext | null>(null) 

export default todosContext;