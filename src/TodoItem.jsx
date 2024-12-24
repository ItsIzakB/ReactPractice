export function TodoItem(){
    return(
    <li>
        <label>
            <input
                type="checkbox"
                checked={todo.complete}
                
            />
            {todo.title}
        </label>
        


    </li>
    )
}