import React, { Component } from "react";
import Nav from "../Nav";
import "./contact.scss";

class Contact extends Component {
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
            padding: "10px"
        }

        const titleStyle = {
            fontSize: "2rem",
            borderBottom: "1px black solid",
            width: "70%",
            marginBottom: "10px"
        }


        return (
            <div>
                <Nav />
                <div style={divStyle}>
                    <div style={titleStyle}>
                        Contact
                    </div>
                    <div>
                        <div>
                            <div class="container">
                                <form action="action_page.php">
                                    <div className="inputField">
                                        <label for="fname">First Name</label>
                                        <br/>
                                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    </div>

                                    <div className="inputField">
                                        <label for="lname">Last Name</label>
                                        <br/>
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    </div>

                                    <div className="inputField">
                                        <label for="subject">Subject</label>
                                        <br/>
                                        <input id="messageInput" name="subject" placeholder="Write something.."></input>
                                    </div>

                                    <button type="submit">Submit</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;