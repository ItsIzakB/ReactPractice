import {useState} from "react"
import "./styles.css"
export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])



  function handleSubmit (e){
    e.preventDefault();

    setTodos(currentTodos => {

      return [
        ...currentTodos, {id: crypto.randomUUID, title: newItem, completed:
        false},
      ]
    })

    setNewItem("");

  }

  function toggleTodos (id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }


        return todo
      })
    })
  }


  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  } 

  
  return (
    <>

  <h1 className>Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return(
        <li key={todo.id}>
          <label>
            <input type = "checkbox" checked={todo.completed}
          onChange={e =>toggleTodos(todo.id,e.target_checked)}/>
          {todo.title}
          </label>
          <button onClick ={() => deleteTodo(todo.id)}
                  className = "btn btn-danger">Delete</button>
        </li>
 

      )
    })}
 </ul>

  </>
  )
}