import React, { useReducer } from "react";
import Li from "../UI/Li";
import reducer from "./reducer";
import classes from "./Section.module.css";
import About from "./Sections/About/About";

const Section = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        section: "about",
        component: <About />,
        title: "About me",
    });

    const navItems = ["about", "skills", "resume"];

    return (
        <section id={props.id} className={classes.mainSection}>
            <div className="max-w-3xl mx-auto">
                <h1 className={classes.sectionHeading}>{state.title}</h1>
                <nav className={classes.sectionNav}>
                    <ul>
                        {navItems.map((item) => (
                            <Li
                                key={item}
                                onClick={dispatch.bind(null, {
                                    section: `${item}`,
                                })}
                                classes={
                                    state.section === `${item}`
                                        ? `${classes.activeLink}`
                                        : `${classes.nonActiveLink}`
                                }
                            >
                                {item}
                            </Li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12">{state.component}</div>
            </div>
        </section>
    );
};

export default Section;
