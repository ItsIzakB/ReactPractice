import "./styles.css"
export default function App(){
  return (
    <>
  <form classNames = "new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id ="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className>Todo List</h1>
  <ul className="list">
    <label>
      <input type = "checkbox" />
    </label>

  </ul>

  </>
  )
}