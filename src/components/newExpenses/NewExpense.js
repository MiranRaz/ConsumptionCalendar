import React from "react";

import "../newExpenses/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}
