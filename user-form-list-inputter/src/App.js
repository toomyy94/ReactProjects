import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import {useState} from "react";

const DUMMY_LIST = [{name: 'Tomas', age: 27}];

function App() {

  const [userList, setUserList] = useState(DUMMY_LIST);

  const onUserAdd = (user) => {
    setUserList( prevlist => {
      return [...prevlist, user]
    } );
  }
  return (
    <div>
        <UserForm passDataToParent={onUserAdd}></UserForm>
        <UserList userList={userList}></UserList>
    </div>
  );
}

export default App;
