import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

function ExpenseList (props){

  if(props.items.length === 0){
    return (
      <h2 className="expenses-list__fallback">No Expenses Found.</h2>
    )
  }

  return(
    <ul className="expenses-list">

        {props.items.map((expenses) =>
          (<ExpenseItem key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}/>)
        )}

    </ul>
  )

}

export default ExpenseList;
