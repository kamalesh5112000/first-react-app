import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onSaveExpense(expenseData)
        setIsEditing(false);

    }
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };


    
    return <div className='new-expense'>
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
        <ExpenseForm
        onSaveExpenseData={saveExpenseHandler}
            onCancel={stopEditingHandler}
        />
        )}
  </div>
    
    
    
    // <div className='new-expense'>

    //     <ExpenseForm onSaveExpenseData={saveExpenseHandler}  />

    // </div>

};

export default NewExpense;