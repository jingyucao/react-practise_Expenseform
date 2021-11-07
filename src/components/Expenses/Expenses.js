import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';

function Expenses(props) {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [choosedYear, setChoosedYear] = useState(currentYear);
  const saveYearHandler = (inputChoosedYear) => {
    setChoosedYear(inputChoosedYear);
    console.log(inputChoosedYear);
  };

  return (

    <Card className="expenses">
      <div>
        <ExpensesFilter selected={choosedYear} onSavedYear={saveYearHandler}/>
      </div>

      {props.expensesArray.map((expenses) =>
        (<ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>)
      )
      }

      {/*以下这个写法也是一样的效果, 这里的箭头函数可以省略()和return*/}
      {/*{props.expensesArray.map(function(expenses){*/}
      {/*  return (*/}
      {/*    <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>*/}
      {/*  )})*/}
      {/*}*/}

      {/*<ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount}*/}
      {/*             date={props.expenses[0].date}></ExpenseItem>*/}
      {/*<ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount}*/}
      {/*             date={props.expenses[1].date}></ExpenseItem>*/}
      {/*<ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount}*/}
      {/*             date={props.expenses[2].date}></ExpenseItem>*/}
      {/*<ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount}*/}
      {/*             date={props.expenses[3].date}></ExpenseItem>*/}

    </Card>

  )
}

export default Expenses;
