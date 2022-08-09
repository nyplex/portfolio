import React, { useState } from "react";
import Modal from "../../../UI/Modal/Modal";
import classes from "./ResumeModal.module.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import cross from "../../../../assets/cross.png";

const ResumeModal = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.pdfContainer}>
                <Document
                    file="./resume.pdf"
                    loading="waiiiit"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </Modal>
    );
};

export default ResumeModal;
