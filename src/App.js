import './App.css';
import Expenses from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react';
const App=()=> {
  const exp = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure:'Shopping'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure:'Shopping' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure:'Car'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure:'Shopping'
    },
  ];
  const [expenses, setExpenses] = useState(exp);

  const addExpenseHandler=(expData)=>{
    console.log("In App.js ", expData)
    setExpenses((prevExpenses) => {
      return ([expData,...prevExpenses])
    });

  }

  return (
    <div className='App'>
    <NewExpense onSaveExpense={addExpenseHandler}/>
    <Expenses items={expenses} />
  </div>
  );
}

export default App;
