import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredyear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const pcolor = {color : 'white'}

  let expensesContent = <p style={pcolor}>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
      />
      <ul>
        {expensesContent}
      </ul>
    </Card>
  );
}

export default Expenses;
