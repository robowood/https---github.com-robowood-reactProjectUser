import React, { useState,useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErorModal from '../UI/ErorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser=props=>{
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const collegeInputRef=useRef();


    // const [enteredUsername,setEnteredUsername]=useState('');
    // const [enteredAge,setEnteredAge]=useState('');
     const [error,setError]=useState();


   const AddUserHandler=(event)=>{
    event.preventDefault();
     const enteredName=nameInputRef.current.value;
     const enteredUserAge=ageInputRef.current.value;
     const enteredUserCollege=collegeInputRef.current.value;


    if(enteredName.trim().length === 0 || enteredUserAge.trim().length ===0){
        setError({
            title: 'Invalid input',
            message: 'please enter valid name and age(non empty value)'
        })
        return;
    }
    if(+enteredUserAge<1){
        setError({
            title: 'Invalid input',
            message: 'please enter valid age (>0).'
        })
      
        return;
    }
    props.onAddUser(enteredName,enteredUserAge,enteredUserCollege);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';


    // setEnteredUsername('');
    // setEnteredAge('');

   };
  //  const usernameChangeHandler=(event)=>{
  //    setEnteredUsername(event.target.value);
  //  };
  //  const AgeChangeHandler=(event)=>{
  //   setEnteredAge(event.target.value);
  // };
  const errorHandler=()=>{
    setError(null);
  }
   return(
    <Wrapper>
  {error &&  <ErorModal 
    title={error.title} 
     message={error.message} 
     onConform={errorHandler}/>}
   <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username" 
          // value={enteredUsername} 
          // onChange={usernameChangeHandler}
          ref={nameInputRef}
         />
        <label htmlFor="age">age</label>
        <input 
          type="number" 
          id="age"
          // value={enteredAge} 
          // onChange={AgeChangeHandler}
          ref={ageInputRef}
        />

    <label htmlFor="collegename">college name</label>
        <input 
          type="text"
          id="collegename" 
          ref={collegeInputRef}
         />
        <Button type="submit">Add User</Button>
         </form>
         
    </Card>
    </Wrapper>
   );
};
export default AddUser;