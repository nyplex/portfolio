import React, { useState } from "react";
import classes from "./Card.module.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
    const [score, setScore] = useState(0);
    const [hoverClass, setHoverClass] = useState(false);
    const [spanHoverCLass, setSpanHoverClass] = useState(classes.span);

    const mouseEnterHandler = (e) => {
        setScore(props.score);
        setHoverClass(true);
        setSpanHoverClass(classes.hoverSpan);
    };
    const mouseLeaveHandler = (e) => {
        setScore(0);
        setHoverClass(false);
        setSpanHoverClass(classes.span);
    };

    return (
        <div
            className={classes.container}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
        >
            <CircularProgressbarWithChildren
                value={score}
                strokeWidth={10}
                background={true}
                styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                        // Path color
                        stroke: `#fe3e57`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: "transparent",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Rotate the trail
                        transform: "rotate(0turn)",
                        transformOrigin: "center center",
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                        fill: "#ffffff",
                    },
                }}
            >
                <img
                    className={`${classes.logo} ${
                        hoverClass && classes.hoverLogo
                    }`}
                    src={props.logo}
                    alt={`${props.skill}`}
                />
            </CircularProgressbarWithChildren>
            <p className={spanHoverCLass}>{props.score}%</p>
        </div>
    );
};

export default Card;
