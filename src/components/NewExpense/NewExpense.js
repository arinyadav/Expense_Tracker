import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
    
    };
return (
    <div claassName = 'new-expense'>
        <ExpenseForm onSaveExpenseata={saveExpenseDataHandler} />
    </div>
);
}

export default NewExpense;