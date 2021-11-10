import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';

function Expenses(props) {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [choosedYear, setChoosedYear] = useState(currentYear);

  const choosedYearHandler = (year) => {
    setChoosedYear(year);
  };

  const filterdYear = props.expensesArray.filter((v) => v.date.getFullYear().toString() === choosedYear)

  let expensesContent = <p>No Expenses Found.</p>;
  if (filterdYear.length > 0) {
    expensesContent = filterdYear.map((expenses) =>
      (<ExpenseItem key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}/>)
    )
  }

  return (

    <Card className="expenses">
      <div>
        <ExpensesFilter selected={choosedYear} onSavedYear={choosedYearHandler}/>
      </div>

      {expensesContent}

      {/*{props.expensesArray.map((expenses) =>*/}
      {/*  (<ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}/>)*/}
      {/*)*/}
      {/*}*/}

      {/*如果想直接在JSX code里写条件，可以像下面这样写*/}

      {/*{filterdYear.length === 0 && <p>No Expenses Found.</p>}*/}
      {/*{filterdYear.length > 0 &&*/}
      {/*  filterdYear.map((expenses) =>*/}
      {/*    (<ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount}*/}
      {/*                  date={expenses.date}/>)*/}
      {/*  )*/}
      {/*}*/}

      {/*箭头函数可以省略()和return*/}
      {/*{props.expensesArray.map(function(expenses){*/}
      {/*  return (*/}
      {/*    <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>*/}
      {/*  )})*/}
      {/*}*/}

    </Card>

  )
}

export default Expenses;
