import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [showFormFlag, setShowFormFlag] = useState(false);
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpenseData(expenseData);
    toggleForm();
  };

  const toggleForm = () => {
    setShowFormFlag( (reviousFlag) => !reviousFlag )
  }

  return (
    <div className="new-expense ">
      {showFormFlag && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onToggleForm={toggleForm}/> }
      {!showFormFlag && <button onClick={toggleForm} >Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
