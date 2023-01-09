import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErorModal from '../UI/ErorModal';


const AddUser=props=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();


   const AddUserHandler=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
        setError({
            title: 'Invalid input',
            message: 'please enter valid name and age(non empty value)'
        })
        return;
    }
    if(+enteredAge<1){
        setError({
            title: 'Invalid input',
            message: 'please enter valid age (>0).'
        })
      
        return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');

   };
   const usernameChangeHandler=(event)=>{
     setEnteredUsername(event.target.value);
   };
   const AgeChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null);
  }
   return(
    <div>
  {error &&  <ErorModal title={error.title} message={error.message} onConform={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">age</label>
        <input type="number" id="age"value={enteredAge} onChange={AgeChangeHandler}/>
        <Button type="submit">Add User</Button>
         </form>
         
    </Card>
    </div>
   );
};
export default AddUser;