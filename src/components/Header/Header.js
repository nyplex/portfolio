import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.css";
import alex from "../../assets/alex.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook.png";
import ReposCounter from "./ReposCounter";

const Header = (props) => {
    const navItems = ["Home", "About", "Portfolio", "Contact"];

    

    return (
        <header id={props.id} className={classes.header}>
            <NavBar items={navItems} />
            <div className={classes.heroContainer}>
                <div className={classes.heroLeftContainer}>
                    <h1>
                        I'm <span>Alex</span> Nypels
                    </h1>
                    <p>Fullstack Developer | Django & React</p>
                    <div className={classes.iconContainer}>
                        <ul>
                            <li>
                                <a href="https://github.com/nyplex">
                                    <img src={github} alt="github icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alexandre-nypels/">
                                    <img src={linkedin} alt="github icon" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto: abc@example.com">
                                    <img src={outlook} alt="github icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.heroImage}>
                    <img
                        className={classes.profilePic}
                        src={alex}
                        alt="profile"
                    />
                    <div className={`${classes.display} ${classes.gradient}`}>
                        <ReposCounter title="Repos" data="repos" classes={classes.counter}/>
                        <ReposCounter title="Contribs" data="contribs" classes={classes.counter}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
