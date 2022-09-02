import React from "react";
import classes from "./CartModal.module.css"
import ReactDOM from "react-dom";

const portalElement = document.getElementById('overlays')

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
}

const ModalOverlay = props => {

    return (<div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
            </div>)
}

const CartModal = (props) => {
    return (
        <React.Fragment >
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
     )
    
}
 
export default CartModal;