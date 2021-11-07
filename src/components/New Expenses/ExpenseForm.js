import {useState} from 'react';
import './ExpenseForm.css'

// we can use either multiple States or one State Object, up to ourselves

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Use one State instead =>>>>>

  // const [userInput, setUserInput] = useState(
  //   {
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  //   }
  // )

  const titleChangeHandler = (event) => {
    setEnteredTitle (event.target.value);

    // ...is a modern function in JS, it pull out all the key value pairs, add them to the new Object
    // and then we can still overwrite the key value that we need
    // whenever our State update is depending on the previous state, we should use the function form
    // So React will guarantee that the state snapshot here will always be the latest state snapshot

    // setUserInput(
    //   {
    //     ...userInput,
    //     enteredTitle: event.target.value
    //   }
    // );

    // setUserInput ((prevState => {
    //   return (
    //     {...prevState, enteredTitle: event.target.vale}
    //   )
    // }))
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount (event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate (event.target.value);
  };

  // the browser itself will make sure that we will get such a event object when this change event occurs

  const submitHandler = (event)=>{
    event.preventDefault();
    // if we dont use the preventDefault(), the webpage will be update and send the value to the sever,
    // which we dont want here

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle ("");
    setEnteredAmount ("");
    setEnteredDate ("");

    // 通过这样的做法，就可以保证form一直是空的，但是写入的值已经存好了

  }

  return(
    <form onSubmit={submitHandler}>

      {/*if there is a button with the type'submit' is clicked inside of a form,*/}
      {/*the overall form element, will emit an event, which we can also listen to */}

      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
          {/*onChange Event will trigger on every keystroke, but also we can use the same event for all input types */}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
          {/*onChange always get a string*/}
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
