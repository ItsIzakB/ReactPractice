import "./styles.css"
export default function App(){
  return <form classNames = "new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id ="item"></input>
    </div>
  </form>
}