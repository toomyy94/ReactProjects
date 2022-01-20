
const UserItem = (props) => {

  return (
    <div className={'subtitle'}>
      <p>{props.name} - Age: {props.age}</p>
    </div>
  );
}

export default UserItem;
