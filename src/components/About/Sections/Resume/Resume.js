import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import download from "../../../../assets/down-arrow.png";
import classes from "./Resume.module.css";
import ResumeModal from "./ResumeModal";
import loaderIcon from "../../../../assets/loader.svg";

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const loader = (
        <div className={classes.loadingContainer}>
            <img
                src={loaderIcon}
                alt="loading icon"
                className={classes.loadingIcon}
            />
        </div>
    );

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={classes.container}>
            <div className={classes.para}>
                <p>
                    I am an energetic and imaginative graduate web developer
                    looking for an entry-level position within a tech
                    company. Passionate about tech, I enjoy problem-solving, as well creating websites to
                    the very highest standards, and giving customers and users
                    the best experience possible. I have experience in various
                    roles in the events and leisure industry.
                </p>
                <a
                    target="_blank"
                    className={classes.download}
                    href="./resume.pdf"
                >
                    <img src={download} alt="cv icon" />
                    <span>Download</span>
                </a>
            </div>
            <div
                onClick={() => {
                    setIsOpen(true);
                }}
                className={classes.pdfContainer}
            >
                <Document file="./resume.pdf" loading={loader}>
                    <Page width={250} pageNumber={pageNumber} />
                </Document>
            </div>
            {isOpen && (
                <ResumeModal
                    onClose={() => {
                        setIsOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default Resume;
