import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  //props is the one parameter (参数) that we got from App.js

  return (
    <div className="expense-item">

      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} Euro</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
