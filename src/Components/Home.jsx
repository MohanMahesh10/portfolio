import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/bg.jpeg";

const imageAltText =
    "Mohan Mahesh here. My domain was artificial intelligence and machine learning, and I am currently in my third year of computer science and engineering at Kalasalingam Academy Of Research And Education.";

const Home = ({ name, title }) => {
    return ( <
        section id = "home"
        className = "min-height" >
        <
        img className = "background"
        src = { image }
        alt = { imageAltText }
        /> <
        div style = {
            { position: "absolute", top: "5rem", left: "2rem", width: "17rem" } } >
        <
        h1 > { name } < /h1> <
        h2 > { title } < /h2> <
        /div> <
        div style = {
            { position: "absolute", bottom: "3rem", left: "50%" } } >
        <
        img src = { arrowSvg }
        style = {
            { height: "3rem", width: "3rem" } }
        alt = { imageAltText }
        /> <
        /div> <
        /section>
    );
};

Home.defaultProps = {
    name: "",
    title: "",
};

Home.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Home;