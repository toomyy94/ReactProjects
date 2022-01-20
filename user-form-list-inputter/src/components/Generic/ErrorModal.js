import './ErrorModdal.css'


const ErrorModal = (props) => {

  return (
    <div className='backdrop' onClick={props.resetError}>
      <div className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <button onClick={props.resetError}>Ok</button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;
