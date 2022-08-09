import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./Card.module.css";

const Card = (props) => {
    const [hoverClass, sethoverClass] = useState("");
    const [btnsClass, setBtnsClass] = useState("");

    const hoverHandler = () => {
        sethoverClass(classes.imageHover);
        setBtnsClass(classes.btnsHover);
    };

    const leaveHandler = () => {
        sethoverClass("");
        setBtnsClass("");
    };


    return (
        <div
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            className={`${classes.container} ${props.classes} ${classes[props.color]}`}
        >
            <p className={`${classes.description} ${hoverClass}`}>
                {props.description}
            </p>
            <div className={`${classes.btns} ${btnsClass}`}>
                <a href={props.livelink}>Live Project</a>
                <a href={props.gitLink}>GitHub</a>
            </div>
        </div>
    );
};

export default Card;
