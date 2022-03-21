import { useState } from "react";

import "../expenses/Expenses.css";

import Card from "../../card/Card";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpensesList from "../expensesList/ExpensesList";
import ExpenseChart from "../expenseChart/ExpenseChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
