import React, { Fragment, useCallback, useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "./ReposCounter.module.css";

const ReposCounter = (props) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [repos, setRepos] = React.useState(null);
    const [repoCount, setRepoCount] = useState(0);
    const [progressCount, setProgressCount] = useState(0);


    const fetchRepo = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://api.github.com/users/nyplex");
            const data = await response.json();
            setRepos(data.public_repos);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (props.data === "repos") {
            fetchRepo();
        }
    }, [fetchRepo, props.data]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (props.data === "repos") {
                if (repoCount < repos) {
                    setRepoCount((prev) => prev + 1);
                    setProgressCount((prev) => prev + 2.65);
                } else {
                    setProgressCount(100);
                    clearInterval(interval);
                }
            } else {
                if (repoCount < 1400) {
                    setRepoCount((prev) => prev + 31);
                    setProgressCount((prev) => prev + 2.65);
                } else {
                    setProgressCount(100);
                    clearInterval(interval);
                }
            }
        }, 80);
        return () => {
            clearInterval(interval);
        };
    }, [repos, repoCount]);
    return (
        <Fragment>
            <CircularProgressbarWithChildren
                value={progressCount}
                strokeWidth={10}
                background={true}
                styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                        // Path color
                        stroke: `#4338ca`,
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
                        fill: "#fefefe",
                    },
                }}
            >
                <h3 className={classes.title}>{props.title}</h3>
                <span className={classes.span}>{repoCount}+</span>
            </CircularProgressbarWithChildren>
        </Fragment>
    );
};

export default ReposCounter;
