import './UserForm.css'
import {useState} from "react";
import ErrorModal from "../Generic/ErrorModal";

function UserForm(props) {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onAgeChange = (event) => {
    setAge(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(name.length === 0 || age.length === 0) {
      console.log('name or age lenght === 0')
      setError({
        title: 'Invalid input',
        message: 'Please input non-empty values.'
      });
      return;
    }
    else{
      const oneUser = {
        name: name,
        age: age
      }

      props.passDataToParent(oneUser);
    }


    setName('');
    setAge('');
  }

  const resetError = () =>{
    setError(null);
  }

  return (
    <div>

      <div>
        {error && <ErrorModal resetError={resetError} title={error.title} message={error.message}></ErrorModal>}
      </div>

      <form className='form' onSubmit={onSubmit}>
        <div className='subtitle'>
          <label>Name: </label>
          <input type='text' value={name} onChange={onNameChange}/>
        </div>
        <div className='subtitle'>
          <label> Age: </label>
          <input type='number' value={age} onChange={onAgeChange}/>
        </div>
        <div>
          <button style={{alignItems: 'center'}} type='submit'> Add User </button>
        </div>

      </form>
    </div>
  );
}

export default UserForm;
