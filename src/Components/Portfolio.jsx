/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mm-motivation.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [{
        title: "My Blog Website",
        description: "This is my blog website where I write about my experiences and Learnings in the tech industry.",
        url: "file:///C:/Users/MOHAN%20MAHESH/Desktop/MM%20projects%20HTML,CSS,JAVA%20SCRIPT,PYTHON/Color_Picker_APP/index.html",
    },
    {
        title: "Microsoft Learn Ambassador Website",
        description: "Be a Force for Good.",
        url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/531a183f-72a8-4ab7-8c3b-118728be5444",
    },
    {
        title: "Digital Clock",
        description: "A digital clock website displays the current time in a digital format, typically using HTML, CSS, and JavaScript to create a user-friendly and interactive timekeeping interface.",
        url: "file:///C:/Users/MOHAN%20MAHESH/Desktop/MM%20projects%20HTML,CSS,JAVA%20SCRIPT,PYTHON/DigitalClock/index.html",
    },
    {
        title: "Google Developer Profile",
        description: "Google For Developers Profile.",
        url: "https://developers.google.com/profile/u/103232758563133261620",
    },
];

const Portfolio = () => {
    return ( <
        section className = "padding"
        id = "portfolio" >
        <
        h2 style = {
            { textAlign: "center" } } > Portfolio < /h2> <
        div style = {
            { display: "flex", flexDirection: "row", paddingTop: "3rem" } } >
        <
        div style = {
            { maxWidth: "40%", alignSelf: "center" } } >
        <
        img src = { image }
        style = {
            { height: "90%", width: "100%", objectFit: "cover" } }
        alt = { imageAltText }
        /> <
        /div> <
        div className = "container" > {
            projectList.map((project) => ( <
                div className = "box"
                key = { project.title } >
                <
                a href = { project.url }
                target = "_blank"
                rel = "noopener noreferrer" >
                <
                h3 style = {
                    { flexBasis: "40px" } } > { project.title } < /h3> <
                /a> <
                p className = "small" > { project.description } < /p> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
};

export default Portfolio;