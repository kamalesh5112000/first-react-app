import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);

  const titleHandler=()=>{
    setTitle('Updated!'+title)
    console.log(title)
  }

  const deleteHandler=e=>{
    e.target.parentElement.remove()
  }

  const amountHandler=()=>{
    setAmount(Number(amount)+100);

  }


  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={titleHandler}>Title</button>
        <button onClick={amountHandler}>Amount</button>
      </Card>

    </li>
    
  );
}

export default ExpenseItem;