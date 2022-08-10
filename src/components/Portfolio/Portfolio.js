import React from "react";
import classes from "./Portfolio.module.css";
import Card from "./Card";
import checkmalt from "../../assets/checkmalt.png";
import kanban from "../../assets/kanban.png";
import flaskblog from "../../assets/flaskblog.png";
import memory from "../../assets/memory.png";

const projects = [
    {
        name: checkmalt,
        title: "CheckMalt",
        description:
            "Checkmalt is a web application that allows users to orders their drinks online, check the menu, and pay with credit card. It is a full stack application built with Django and PostgreSQL. It has been deployed on Heroku and AWS.",
        classes: classes.firstCard,
        livelink: "https://checkmalt.herokuapp.com/",
        gitLink: "https://github.com/nyplex/CheckMalts",
        color: "red",
    },
    {
        name: kanban,
        title: "Kanban",
        description:
            "Kanban is a web application that allows users to create boards, add tasks, and delete tasks. It is a front end application built with React. It has been deployed on Heroku.",
        classes: classes.secondCard,
        livelink: "https://nyplex-react-task-manager.herokuapp.com/",
        gitLink: "https://github.com/nyplex/kanban",
        color: "green",
    },
    {
        name: flaskblog,
        title: "Flask Blog",
        description:
            "FlaskBlog is a web application that allows users to create posts, edit posts, and delete posts. It is a full stack application built with Flask and MongoDB. It has been deployed on Heroku and AWS.",
        classes: classes.thirdCard,
        livelink: "http://nyplex-flask-blog.herokuapp.com/",
        gitLink: "https://github.com/nyplex/Flask_blog",
        color: "blue",
    },
    {
        name: memory,
        title: "Memory Game",
        description:
            "Memory is a web application that allows users to play a memory game. It is a front end application built with vanilla javascript. It has been deployed on github pages.",
        classes: classes.fourthCard,
        livelink: "https://nyplex.github.io/live-memory-game/",
        gitLink: "https://github.com/nyplex/Memory-game",
        color: "yellow",
    },
];

const Portfolio = (props) => {
    return (
        <div id={props.id} className={classes.container}>
            <h1>Portfolio</h1>
            <div className={classes.cardContainer}>
                {projects.map((p) => (
                    <div key={p.title}>
                        <div className={classes.cardDataContainer}>
                            <h3 className={classes.cardTitle}>{p.title}</h3>
                            <div className={`${classes.cardMobileLink}`}>
                                <a href={p.livelink}>Live Project</a>
                                <a href={p.gitLink}>GitHub</a>
                            </div>
                        </div>
                        <Card
                            title={p.title}
                            color={p.color}
                            description={p.description}
                            gitLink={p.gitLink}
                            livelink={p.livelink}
                            project={p.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
