import './ExpenseForm.css'

const ExpenseForm=()=>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleHandler=(e)=>{
        setEnteredTitle(e.target.value);
    }

    const amountHandler=(e)=>{
        setEnteredAmount(e.target.value);
    }

    const dateHandler=(e)=>{
        setEnteredDate(e.target.value);
    }

    return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='Number' onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );

};

export default ExpenseForm;