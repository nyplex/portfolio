import React, { useState } from "react";
import Button from "../UI/Button";
import Li from "../UI/Li";
import classes from "./NavBar.module.css";
import burger from "../../assets/burger.png";

const NavBar = (props) => {
    const [openedMenu, setOpenedMenu] = useState(false);
    const navClickHandler = (item, behavior, e) => {
        const section = document.getElementById(item);
        section.scrollIntoView({ behavior: behavior });
        setOpenedMenu(false);
    };

    const openMenuHandler = () => {
        setOpenedMenu((prevState) => !prevState);
    };

    return (
        <nav className={classes.nav}>
            <div>
                <Button
                    onClick={navClickHandler.bind(null, "Home", "auto")}
                    classes={classes.logo}
                >
                    AN
                </Button>
            </div>
            <div className={classes.burger}>
                <Button onClick={openMenuHandler}>
                    <img src={burger} alt="burger" width={30} />
                </Button>
            </div>
            {openedMenu && (
                <div
                    onClick={() => setOpenedMenu(false)}
                    className={classes.mobileNavBackground}
                ></div>
            )}
            <ul className={`${classes.list} ${openedMenu && classes.showNav}`}>
                {props.items.map((item, index) => {
                    return (
                        <Li
                            key={index}
                            onClick={navClickHandler.bind(null, item, "smooth")}
                        >
                            {item}
                        </Li>
                    );
                })}
            </ul>
            <div className={classes.talk}>
                <Button onClick={navClickHandler.bind(null, "Contact", "auto")}>
                    Let's Talk
                </Button>
            </div>
        </nav>
    );
};

export default NavBar;
