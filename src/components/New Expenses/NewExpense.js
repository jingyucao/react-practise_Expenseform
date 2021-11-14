import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import {useState} from 'react'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
      const expenseData = {
        id: Math.random().toString(),
        ...enteredExpenseData
        // Math.random() is not perfect but good enough for the demo
      };
      props.onAddExpenseHandler(expenseData);
    };

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = ()=>{
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm === true &&  <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} hideFormHandler={hideFormHandler}/>}
      {showForm === false && <div>
        <button type="submit" onClick={showFormHandler}>Add new Expense</button>
      </div>}

    </div>
  )
}

export default NewExpense;
