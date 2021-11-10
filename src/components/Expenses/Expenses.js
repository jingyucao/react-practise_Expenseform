import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
import ExpenseList from "./ExpenseList";

function Expenses(props) {

  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  //这里设置为2022年，因为filterdYear还是有个小bug

  const [choosedYear, setChoosedYear] = useState(2022);

  const choosedYearHandler = (year) => {
    setChoosedYear(year);
  };

  const filterdYear = props.expensesArray.filter((v) => v.date.getFullYear().toString() === choosedYear)

  return (

    <Card className="expenses">
      <div>
        <ExpensesFilter selected={choosedYear} onSavedYear={choosedYearHandler}/>
      </div>

      <ExpenseList items={filterdYear}/>

    </Card>

  )
}

export default Expenses;
