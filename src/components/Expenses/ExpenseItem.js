import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //we can handle button/event by below method also
  //document.getElementById().addEventListener()

  return (
    <div className="expense-item">
      <div>
       <ExpenseDate date={new Date(props.date)} />
      </div>
      <div className="expense-title">{props.title}</div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
