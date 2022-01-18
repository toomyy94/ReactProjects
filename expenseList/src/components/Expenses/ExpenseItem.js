import './ExpenseItem.css'
import Calendar from '../Calendar/Calendar';
import Card from '../Wrappers/Card';

function ExpenseItem(props) {

  return (
      <Card className='expense-item'>
        <Calendar date={props.date}></Calendar>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>

    );
  }
  
  export default ExpenseItem;