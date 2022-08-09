import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <input
            type={props.tyoe}
            id={props.id}
            name={props.id}
            placeholder={props.placeholder}
            className={`${classes.input} ${props.width} ${props.classes}`}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
        />
    );
};

export default Input;
