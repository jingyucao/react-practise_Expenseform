import './ExpenseForm.css'

const ExpenseForm = () => {

  const titleChangeHandler = (event)=>{
    console.log(event.target.value)
  }

  // the browser itself will make sure that we will get such a event object when this change event occurs

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
          {/*onChange Event will trigger on every keystroke, but also we can use the same event for all input types */}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
