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
                        with a focus in web development. During this year of
                        study, I learned a several new technologies and I was
                        able to work on several projects
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
