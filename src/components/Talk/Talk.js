import React from "react";
import Form from "./Form";
import classes from "./Talk.module.css";
import location from "../../assets/address.png";

const Talk = (props) => {
    return (
        <div id={props.id} className={classes.mainContainer}>
            <div className={classes.container}>
                <h2>Let's Talk</h2>
                <div className={classes.flexContainer}>
                    <div className={classes.formContainer}>
                        <h3>Get In Touch</h3>
                        <Form />
                    </div>
                    <div className={classes.contactContainer}>
                        <div className={classes.card}>
                            <div>
                                <img src={location} alt="" />
                                <span>Address</span>
                            </div>
                            <p>London, SE13</p>
                        </div>
                        <div className={classes.card}>
                            <div>
                                <img src={location} alt="" />
                                <span>Email</span>
                            </div>
                            <p>nypels.alexandre@outlook.com</p>
                        </div>
                        <div className={classes.card}>
                            <div>
                                <img src={location} alt="" />
                                <span>Mobile</span>
                            </div>
                            <p>+44 7802 354 504</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Talk;
