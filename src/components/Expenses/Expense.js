import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from './Card';
import './Expense.css';
import React, { useState } from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  console.log(props.items)

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // Assuming each expense has a unique id
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </Card>
    </div>
  );
}

export default Expenses;