import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler= selectedYear => {
    setFilteredYear(selectedYear);
  }
    return (
        <>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>  
        <ExpenseItem className="m-2"
      title={props.expenses[0].title} 
      amount={props.expenses[0].amount} 
      date={props.expenses[0].date} />
      <ExpenseItem 
      title={props.expenses[1].title} 
      amount={props.expenses[1].amount} 
      date={props.expenses[1].date} />
      <ExpenseItem 
      title={props.expenses[2].title} 
      amount={props.expenses[2].amount} 
      date={props.expenses[2].date} />
      <ExpenseItem 
      title={props.expenses[3].title} 
      amount={props.expenses[3].amount} 
      date={props.expenses[3].date} />
      </Card>
      </>
    )
}

export default Expenses;