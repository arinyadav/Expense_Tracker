import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  let expeses = [
    {
    id:'e1',
    title:'School Fee',
    amount:250,
    date: new Date(2021,5,12) 
    },
    {
      id:'e2',
      title:'Books',
      amount:230,
      date: new Date(2021,2,22) 
      },
        {
          id:'e3',
          title:'House Rent',
          amount:700,
          date: new Date(2021,4,2) 
        },
        {
          id:'e4',
          title:'Food',
          amount:540,
          date: new Date(2021,5,5) 
          }    
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return(
    <div>  
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item={expeses}/>
    </div>
  );

}

export default App;
