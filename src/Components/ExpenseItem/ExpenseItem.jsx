import ExpenseDate from '../ExpenseDate/ExpenseDate';
import React, { useState } from 'react';
import './index.css'
const ExpenseItem = (props) => {

   const [title, setTitle] = useState(props.title);

   const clickHandler = () => {
    setTitle('updated!');

   };
    return (
        <>
        
        <div className="expense-item flex justify-between items-center drop-shadow-sm p-2 m-2 rounded-xl bg-slate-400">
         <ExpenseDate date={props.date} />   
            <div className="expense-item-description flex flex-col-reverse flex-1 justify-start gap-1 items-end">
                <h2 className="text-olive flex-1 mt-0 ml-4">{title}</h2>
                <div className="price sm text-base p-2 text-white bg-purple-900 rounded-xl border">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </div>
        </>
    ) 
}


export default ExpenseItem;