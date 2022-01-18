import React, {useState} from 'react';
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import Card from '../Wrappers/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from "../Chart/ExpenseChart";

function Expense(props) {

  const [filterSelected, setFilterSelected] = useState('2021');

  const onFilterChangeHandler = (selectedYear) => {
      setFilterSelected(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filterSelected;
  });

  let expensesContent = <p>No expenses found.</p>;

  if( filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}>
      </ExpenseItem>
    ))

  }

  return (
      <div>
          <Card className='expenses'>
            <ExpensesFilter selected={filterSelected} onChangeFilter={onFilterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContent}
          </Card>
      </div>
    );
  }

  export default Expense;