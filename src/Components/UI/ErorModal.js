import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop=props=>{
   return <div className={classes.backdrop} onClick={props.onConform}/>

};

const ModalOverlay=props=>{
return(
<Card className={classes.modal}>
<header className={classes.header}>
    <h2>{props.title} </h2>
</header>
<div className={classes.content}>
    <p>{props.message}</p>
</div>
<footer className={classes.actions}>
    <Button onClick={props.onConform}>okay</Button>
</footer>
</Card>
);};

const ErorModal=(props)=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
            <Backdrop onConform={props.onConform}/>,
            document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(<ModalOverlay
             title={props.title}
             message={props.message}
             onConform={props.onConform}
         />,
         document.getElementById('overlay-root')
         )}
        
        </React.Fragment>
    );
};
export default ErorModal;