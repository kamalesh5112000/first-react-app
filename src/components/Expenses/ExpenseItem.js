import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
        
      <ExpenseDate date = {props.expense.date}/>
      <ExpenseDetails title={props.expense.title} LocationOfExpenditure={props.expense.LocationOfExpenditure} amount={props.expense.amount} />
      
    </div>
  );
}

export default ExpenseItem;
