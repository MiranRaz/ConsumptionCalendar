import { useState } from "react";
import ExpenseDate from "../../allExpenses/expenseDate/ExpenseDate";
import "../expenseItem/ExpenseItem.css";
import Card from "../../card/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const titleHandler = () => {
    setTitle("TAJTL");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={titleHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
