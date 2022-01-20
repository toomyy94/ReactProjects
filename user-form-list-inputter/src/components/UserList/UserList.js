import './UserList.css'
import UserItem from "./UserItem";

const UserList = (props) => {

  return (
    <div className={'subtitle'}>
      {
        props.userList.map(user => (
          <UserItem key={user.name} name={user.name} age={user.age}></UserItem>
        ))
      }
    </div>
  );
}

export default UserList;
