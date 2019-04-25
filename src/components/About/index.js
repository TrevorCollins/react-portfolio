import React, { Component } from "react";
import Nav from "../Nav";
import image from "./images/oxfordgarden.jpg";

class About extends Component {
    render() {
        const divStyle = {
            color: "black",
            // border: "2px white solid",
            // borderRadius: "10px",
            background: "#ffffff80",
            fontFamily: "'Anton', sans-serif",
            width: "50%",
            margin: "0 auto",
            display: "block",
            padding: "10px",
            overflow: "auto"
        }

        const titleStyle = {
            fontSize: "2rem",
            borderBottom: "1px black solid",
            width: "70%",
            marginBottom: "10px"
        }

        const imageStyle = {
            width: "300px",
            border: "2px black solid",
            borderRadius: "2%",
            display: "inline",
            float: "left",
            marginLeft: "10px",
        }

        const textStyle = {
            display: "inline",
            // fontSize: "1.05em",
            float: "right",
            padding: "5px",
            width: "54%",
            // textAlign: "center",
            lineHeight: "1.4em"
        }

        return (
            <div>
                <Nav />
                <div style={divStyle}>
                    <div id='about-title' style={titleStyle}>
                        About Me
                    </div>
                    <div id='about-body'>
                        <img style={imageStyle} src={image} alt="oxford gardens" />
                        <div id="about-text" style={textStyle}>
                            <p>I am a front-end web developer with a strong understanding of back-end frameworks. My background in graphic design, photography, and music allow me to find creative solutions to any problem. With a strong passion for website design, I bring a strong work ethic and a desire to better myself by fulfilling whatever role necessary to the best of my ability.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;