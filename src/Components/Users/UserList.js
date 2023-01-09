import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';
const UserList=(props)=>{
    return(
        <Card className={classes.users}>
        <ul >
            {props.users.map((user)=>(
                <li key={user.id}>
                   <b className={classes.name}> {user.name} -({user.age} years old)</b> --<b className={ classes.college}>(college Name  :{user.college})</b>
                </li>
            ))}
        </ul>
        </Card>
    );
};
export default UserList;