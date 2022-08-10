import React from "react";
import About from "./Sections/About/About";
import Resume from "./Sections/Resume/Resume";
import Skills from "./Sections/Skills/Skills";

const reducer = (state, action) => {
    switch (action.section) {
        case "about":
            return {
                ...state,
                section: "about",
                component: <About />,
                title: "About me"
            };
        case "skills":
            return {
                ...state,
                section: "skills",
                component: <Skills />,
                title: "My skills"
            };
        case "resume":
            return {
                ...state,
                section: "resume",
                component: <Resume />,
                title: "My resume"
            }
        default:
            break;
    }
};


export default reducer;