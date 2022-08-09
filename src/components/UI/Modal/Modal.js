import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import cross from "../../../assets/cross.png"

const Backdrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <button className={classes.clsBtn} onClick={props.onClose}>
                <img src={cross} alt="" />
            </button>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
