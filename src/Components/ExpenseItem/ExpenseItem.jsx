
import './index.css'
function ExpenseItem() {
    const expenseDate = new Date(2022, 6, 19);
    const expenseTitle = 'Car Insurance';
    const expenseAmount= 294.67;
    return (
        <>
        <div className="expense-item flex justify-between items-center drop-shadow-sm p-2 rounded-xl bg-slate-400">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item-description flex flex-col-reverse flex-1 justify-start gap-1 items-end">
                <h2 className="text-olive flex-1 mt-0 ml-4">{expenseTitle}</h2>
                <div className="price sm text-base p-2 text-white bg-purple-900 rounded-xl border">{expenseAmount}</div>
            </div>
        </div>
        </>
    ) 
}


export default ExpenseItem