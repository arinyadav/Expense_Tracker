import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
return (
    <div claassName = 'new-expense'>
        <ExpenseForm></ExpenseForm>
    </div>
);
}

export default NewExpense;