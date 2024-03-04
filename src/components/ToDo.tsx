import { useToDos } from "../store/ToDocontect";
import { useSearchParams } from "react-router-dom";

const ToDos = () => {
  const { TODO, handleToggleToDo, deleteToDo, deleteAll } = useToDos();

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  let filterToDo = TODO;

  if (todosData === "active") {
    filterToDo = filterToDo.filter((todo) => !todo.completed);
  }
  if (todosData === "completed") {
    filterToDo = filterToDo.filter((todo) => todo.completed);
  }

  return (
    <ul className="w-full mt-4 space-y-2" >
      {filterToDo.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2 py-2 border-b border-gray-300 rounded ">
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => {
              handleToggleToDo(todo.id);
            }}
          />
          <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
          {todo.completed && (
            <button
              className="ml-2 rounded color- text-black" 
              id="delete"
              onClick={() => {
                deleteToDo(todo.id);
              }}
            >
              Delete
            </button>
          )}
        </li>
      ))}
      {filterToDo.length > 0 && (
        <button className="ml-2 rounded color- text-black" id="deleteAll" onClick={deleteAll}>
          Delete All
        </button>
      )}
    </ul>
  );
};

export default ToDos;