
import "./index.css"
import { useState } from "react";
const ExpenseForm = (props) => {
    //two ways to do the same thing: 1. multiple state slices MOST COMMON
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // or 2. use 1 state once and have an object storing the different states
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //2 is the cleanest way to update state IF you depend on previous states
        //operates on the quickest 

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
  

        //don't do this is you depend on previous state. need spread operator to copy and paste the other states
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // console.log('title changed')
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })

        
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        //clears data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return <form onSubmit={submitHandler}>
        <div className="new-expense___controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' 
                value={enteredTitle} 
                onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='text' 
                value={enteredAmount} 
                onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date'
                 value={enteredDate} 
                 onChange={dateChangeHandler} 
                 min="2019-01-01" 
                 max="2023-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;