import React, { Fragment } from "react";
import image from "../../../../assets/about.png";
import classes from "./About.module.css";
import AboutModal from "./AboutModal";

const About = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <Fragment>
            <div className={classes.container}>
                <img src={image} alt="About me illustration" width="300" />
                <div>
                    <h3>My journey</h3>
                    <p>
                        I graduated in 2022 with a license in computer science
                        with a focus on web development. During this year of
                        study, I learned several new technologies, including
                        Python and its framework Django. I was able to work on
                        several projects, which you can see in my portfolio.
                    </p>
                    <button
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
            {showModal && (
                <AboutModal
                    onClose={() => {
                        setShowModal(false);
                    }}
                />
            )}
        </Fragment>
    );
};

export default About;
