export default TodoList(id){

    return ( <ul className="list">
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
)
 </ul> 

}