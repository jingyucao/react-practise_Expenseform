import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js"

function ExpenseItem(props) {

  //props is the one parameter (参数) that we got from App.js

  let title=props.title;
 const clickHandler = ()=>{
    title="Updated!";
  }

  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} Euro</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem;
