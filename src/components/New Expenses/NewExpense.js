import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData)=>{
      const expenseData = {
        id: Math.random().toString(),
        ...enteredExpenseData
        // Math.random() is not perfect but good enough for the demo
      };
      props.onAddExpenseHandler(expenseData);
    };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;
