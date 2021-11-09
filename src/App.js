// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expenses/NewExpense";
import {useState} from 'react';

// in ES6, we can write the function in the below syntax:
// const App=()=>{}....

function App() {

  const Dummy_Expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (newExpenses) => {
    setExpenses((prevExpenses)=>{
      return(
        [newExpenses,...prevExpenses]
      )
      }
    )
  };

  // const getYearHandler = (inputYear) =>{
  //
  //   setExpenses(
  //     expenses.filter ((v)=>v.date.getFullYear().toString() === inputYear)
  //   )
  // }

  return (
    <div className="App">

      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses expensesArray={expenses} />
      {/*onGetYearHandler={getYearHandler}*/}


    </div>
  );
}

export default App;
