import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App(props) {
  const [userList, setUserList] = useState([]);
  console.log(userList);
  const addUserHandler = (userName, age) => {
    console.log(userName, age);
    setUserList((prev) => {
      return [...prev, { name: userName, age: age }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
