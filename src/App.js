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
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // const addExpenseHandler = (newExpense) => {
  //   const inputExpenses = {
  //     ...newExpense
  //   }
  //   console.log(inputExpenses)
  // }

  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expenses) => {

    setExpenses((prevExpenses)=>{
      return(
        [expenses,...prevExpenses]
      )
      }
    )
  }

  return (
    <div className="App">

      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses expensesArray={expenses}/>

    </div>
  );
}

export default App;
