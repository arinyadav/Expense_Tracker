import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

// SEE 5:45:10 

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            //... to copy an object
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
       console.log(enteredExpenseData);
    };

return (
    <div claassName = 'new-expense'>
        <ExpenseForm onSaveExpenseata={saveExpenseDataHandler} />
    </div>
);
}

export default NewExpense;