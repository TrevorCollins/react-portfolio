import React from "react";
import githubIcon from "./images/githubIcon.png";
import linkedinIcon from "./images/linkedinIcon.png";


const footerStyle = {
    margin: "auto",
    display: "inline-block",
    position: "absolute",
    top: "3%",
    left: "3%"
}

const iconStyle = {
    width: "50px",
    margin: "10px",
    opacity: "0.7"
}

function Footer() {
    return(
        <div id="footer" style={footerStyle}>
            <a href="https://github.com/TrevorCollins">
                <img style={iconStyle} src={githubIcon} alt="Git hub link" target="_blank" />
            </a>

            <a href="https://github.com/TrevorCollins">
                <img style={iconStyle} src={linkedinIcon} alt="Linked In link" target="_blank" />
            </a>

        </div>
    )
}

export default Footer;