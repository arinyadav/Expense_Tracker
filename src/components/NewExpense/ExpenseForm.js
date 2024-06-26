import React, {useState} from 'react';
import './ExpenseForm.css';

//use state is used to store value
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        //to prevent refreshing after submitting from form
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);
        //this is a type of two way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type = "text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type = "number" value={enteredAmount}  onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type = "date" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type="submit" className='btn'>Add Expense</button>
            </div>
            </div>
        </form>
    );
}

export default ExpenseForm;