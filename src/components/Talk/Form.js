import React, { Fragment, useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./Form.module.css";
import emailjs from "emailjs-com";
import useInput from "../../hooks/use-input";
import validate from "./validate";
import Modal from "../UI/Modal/Modal";
import messageSent from "../../assets/message_sent.svg";

const Form = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(false);
    const {
        value: fname,
        valueChangeHandler: fnameChangeHandler,
        InputBlurHandler: fnameBlurHandler,
        hasError: fnameHasError,
        reset: fnameReset,
        valueIsValid: fnameIsValid,
    } = useInput(validate, "name");

    const {
        value: lname,
        valueChangeHandler: lnameChangeHandler,
        InputBlurHandler: lnameBlurHandler,
        hasError: lnameHasError,
        reset: lnameReset,
        valueIsValid: lnameIsValid,
    } = useInput(validate, "name");

    const {
        value: email,
        valueChangeHandler: emailChangeHandler,
        InputBlurHandler: emailBlurHandler,
        hasError: emailHasError,
        reset: emailReset,
        valueIsValid: emailIsValid,
    } = useInput(validate, "email");

    const {
        value: subject,
        valueChangeHandler: subjectChangeHandler,
        InputBlurHandler: subjectBlurHandler,
        hasError: subjectHasError,
        reset: subjectReset,
        valueIsValid: subjectIsValid,
    } = useInput(validate, "subject");

    const {
        value: message,
        valueChangeHandler: messageChangeHandler,
        InputBlurHandler: messageBlurHandler,
        hasError: messageHasError,
        reset: messageReset,
        valueIsValid: messageIsValid,
    } = useInput(validate, "message");

    let formIsValid = false;
    if (
        fnameIsValid &&
        lnameIsValid &&
        emailIsValid &&
        subjectIsValid &&
        messageIsValid
    ) {
        formIsValid = true;
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (!formIsValid) {
            return;
        }
        emailjs
            .sendForm(
                "service_1x3iap6",
                "template_qcjsp0i",
                form.current,
                "8GCeL8FaJGJGtKabl"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    fnameReset();
                    lnameReset();
                    emailReset();
                    subjectReset();
                    messageReset();
                    setShowModal(true);
                    setError(false)
                },
                (error) => {
                    setShowModal(true)
                    setError(true);
                }
            );
    };
    return (
        <Fragment>
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <div className={classes.row}>
                    <Input
                        type={"text"}
                        width={"w-[50%]"}
                        placeholder={"First name"}
                        id={"fname"}
                        classes={fnameHasError ? classes.inputInvalid : ""}
                        onChange={fnameChangeHandler}
                        onBlur={fnameBlurHandler}
                        value={fname}
                    />
                    <Input
                        type={"text"}
                        width={"w-[50%]"}
                        placeholder={"Last name"}
                        id={"lname"}
                        classes={lnameHasError ? classes.inputInvalid : ""}
                        onChange={lnameChangeHandler}
                        onBlur={lnameBlurHandler}
                        value={lname}
                    />
                </div>
                <div className={classes.row}>
                    <Input
                        type={"email"}
                        width={"w-full"}
                        placeholder={"Email"}
                        id={"email"}
                        classes={emailHasError ? classes.inputInvalid : ""}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={email}
                    />
                </div>
                <div className={classes.row}>
                    <Input
                        type={"text"}
                        width={"w-full"}
                        placeholder={"Subject"}
                        id={"subject"}
                        classes={subjectHasError ? classes.inputInvalid : ""}
                        onChange={subjectChangeHandler}
                        onBlur={subjectBlurHandler}
                        value={subject}
                    />
                </div>
                <div className={classes.row}>
                    <textarea
                        className={`${classes.textArea} ${
                            messageHasError && classes.textAreaInvalid
                        }`}
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Your message..."
                        maxLength={10000}
                        onChange={messageChangeHandler}
                        onBlur={messageBlurHandler}
                        value={message}
                    ></textarea>
                </div>
                <button
                    disabled={!formIsValid}
                    className={
                        !formIsValid ? classes.invalidBtn : classes.validBtn
                    }
                    type="submit"
                >
                    Send Message
                </button>
            </form>
            {showModal && !error && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className={classes.modal}>
                        <h1>Message sent!</h1>
                        <img src={messageSent} alt="Message sent" />
                        <p>
                            Thanks for your message, I'll get back to you as
                            soon as possible.
                        </p>
                    </div>
                </Modal>
            )}
            {showModal && error && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className={classes.modal}>
                        <h1>Oups...</h1>
                        <p>
                            Something went wrong. I didn't get your message.
                            Please try again.
                        </p>
                    </div>
                </Modal>
            )}
        </Fragment>
    );
};

export default Form;
