import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expenseData) => {
        const expenseDataWithId = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddExpenseData(expenseDataWithId);
        setIsEditting(false);
    }

    const [isEditting, setIsEditting] = useState(false);

    const startEdittingHandler = () => {
      setIsEditting(true);
    }

    const cancelHandler = () => {
      setIsEditting(false);
    }

    return (
        <div className='new-expense'>
          {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
          {isEditting && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
        </div>
    )
};

export default NewExpense