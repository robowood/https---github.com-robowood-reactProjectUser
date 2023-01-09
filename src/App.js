import React, { useState,Fragment } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
 const [userList,setUserList]= useState([]);
 const AddUserHandler=(uName,uAge,uCollege)=>{
  setUserList((prevUserList)=>{
    return [...prevUserList,{name:uName,age:uAge,college:uCollege, id:Math.random().toString()}];
  });
 };
  return (
  <Fragment>
    <AddUser onAddUser={AddUserHandler} />
    <UserList users={userList}/>
 </Fragment>
  );
}

export default App;
