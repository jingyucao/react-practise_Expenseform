import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';

function Expenses(props) {

  const [choosedYear, setChoosedYear] = useState('2021');
  const saveYearHandler = (inputChoosedYear) => {
    setChoosedYear(inputChoosedYear);
    console.log(inputChoosedYear);
  };

  return (

    <Card className="expenses">
      <div>
        <ExpensesFilter selected={choosedYear} onSavedYear={saveYearHandler}/>
      </div>

      <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}
                   date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount}
                   date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount}
                   date={props.expenses[2].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount}
                   date={props.expenses[3].date}></ExpenseItem>
    </Card>

  )
}

export default Expenses;
