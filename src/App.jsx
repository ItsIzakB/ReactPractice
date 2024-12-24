import {useState} from "react"
import "./styles.css"
import {NewTodoForm} from "./NewTodoForm"
import {TodoList} from "./TodoList"

export default function App(){
  const [todos, setTodos] = useState([])

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

  <NewTodoForm />
  <h1 className="header">Todo List</h1>
  <TodoList todos={todos} toggleTodo = {toggleTodo}/>


  </>
  )
}