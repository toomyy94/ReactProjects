import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [formTitle, setFormTitle] = useState('');

    const titleChangeHandler = (event) => {
        setFormTitle(event.target.value);
    }

    const [formAmount, setFormAmount] = useState('');

    const amountChangeHandler = (event) => {
        setFormAmount(event.target.value);
    }

    const [formDate, setFormDate] = useState('');

    const dateChangeHandler = (event) => {
        setFormDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: formTitle,
            amount: formAmount,
            date: new Date(formDate)
        };

        props.onSaveExpenseData(expenseDate);

        setFormTitle('');
        setFormDate('');
        setFormAmount('');
    }

    return(
        <form className='new-expense__controls' onSubmit={submitHandler} onCance>
            <div className='new-expense__controls'>
                <div className='new-expense__controls' on>
                    <label>Title</label>
                    <input type='text' value={formTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='text' min='0.01' value={formAmount} step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={formDate} max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                  <button type='button' onClick={props.onCancel}>Cancel</button>
                  <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm