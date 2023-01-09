import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
 const [userList,setUserList]= useState([]);
 const AddUserHandler=(uName,uAge)=>{
  setUserList((prevUserList)=>{
    return [...prevUserList,{name:uName,age:uAge, id:Math.random().toString()}];
  });
 };
  return (
    <div>
      
<AddUser onAddUser={AddUserHandler} />
<UserList users={userList}/>
    </div>
  );
}

export default App;
