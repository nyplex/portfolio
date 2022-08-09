import React, { Fragment } from "react";
import classes from "./Skills.module.css";
import pythonLogo from "../../../../assets/python.png";
import html5 from "../../../../assets/html-5.png";
import css3 from "../../../../assets/css-3.png";
import js from "../../../../assets/js.png";
import react from "../../../../assets/react.png";
import mysql from "../../../../assets/mysql.png";
import sass from "../../../../assets/sass.png";
import tailwind from "../../../../assets/tailwind.png";
import django from "../../../../assets/django.jpg";
import postgres from "../../../../assets/postgres.png";

import Card from "./Card";

const Skills = () => {
    return (
        <Fragment>
            <div className={classes.skillsContainer}>
                <Card logo={html5} skill="html5" score="95"/>
                <Card logo={css3} skill="css3" score="95"/>
                <Card logo={sass} skill="sass" score="75"/>
                <Card logo={tailwind} skill="js" score="95"/>

                <Card logo={js} skill="javascript" score="85"/>
                <Card logo={react} skill="react" score="50"/>

                <Card logo={pythonLogo} skill="python" score="80"/>
                <Card logo={django} skill="php" score="75"/>

                <Card logo={mysql} skill="mysql" score="75"/>
                <Card logo={postgres} skill="postgres" score="70"/>

            </div>
        </Fragment>
    );
};

export default Skills;
