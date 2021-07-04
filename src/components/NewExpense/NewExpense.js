import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
    const saveExpenseDataHandler  = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
    };
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>

};

export default NewExpenses;