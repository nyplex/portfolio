import { Fragment } from "react";
import Section from "./components/About/Section";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Talk from "./components/Talk/Talk";


function App() {
    return (
        <Fragment>
            <Header id={"Home"}/>
            <Section id={"About"}/>
            <Portfolio id={"Portfolio"}/>
            <Talk id={"Contact"}/>
            <Footer/>
        </Fragment>
    );
}

export default App;
