import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });
    
    const titleHandler=(e)=>{
        setEnteredTitle(e.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    }

    const amountHandler=(e)=>{
        setEnteredAmount(e.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    }

    const dateHandler=(e)=>{
        setEnteredDate(e.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    }

    const sumbitHandler=(e)=>{
        e.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

    }

    return (
    <form onSubmit={sumbitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='Number' value={enteredAmount} onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );

}; 

export default ExpenseForm;