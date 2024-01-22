import React from "react"
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem"

const ExpensesList=(props)=>{

    
    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">Found No Expense</h2>
    }
    return <ul className="expenses-list">
        {
            props.items.length===1 && <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
        }
        {
            props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id} // Assuming each expense has a unique id
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
                ))
        }

    </ul>

}

export default ExpensesList