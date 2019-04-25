import React, { Component } from "react";
import Nav from "../Nav";

import edb from "./assets/images/edb.png";
import ts from "./assets/images/ts.png";
import wgg from "./assets/images/wgg.png";
import bam from "./assets/images/bam.png";
import ff from "./assets/images/ff.png";
import goc from "./assets/images/goc.png";

class Portfolio extends Component {
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
            // textAlign: "center"
        }

        const titleStyle = {
            fontSize: "2rem",
            borderBottom: "1px black solid",
            width: "70%",
            marginBottom: "10px"
        }

        const portfolio = [
            {
                title: "Eat-Da-Burger",
                url: "https://hidden-hollows-61737.herokuapp.com/",
                gitHub: "https://github.com/TrevorCollins/burger",
                image: edb
            }, {
                title: "Train Schedule",
                url: "https://trevorcollins.github.io/train-schedule/",
                gitHub: "https://github.com/TrevorCollins/train-schedule",
                image: ts
            }, {
                title: "Word Guess Game",
                url: "https://trevorcollins.github.io/Word-Guess-Game/",
                gitHub: "https://github.com/TrevorCollins/Word-Guess-Game",
                image: wgg
            }, {
                title: "Bamazon",
                url: "https://github.com/TrevorCollins/bamazon",
                gitHub: "https://github.com/TrevorCollins/bamazon",
                image: bam
            }, {
                title: "Friend Finder",
                url: "https://warm-sea-78402.herokuapp.com/",
                gitHub: "https://github.com/TrevorCollins/Friend-Finder",
                image: ff
            }, {
                title: "Game of Clicks",
                url: "https://trevorcollins.github.io/clicky-game/",
                gitHub: "https://github.com/TrevorCollins/clicky-game",
                image: goc
            }
        ];

        return (
            <div>
                <Nav />
                <div style={divStyle}>
                    <div style={titleStyle}>
                        Work
                    </div>
                    <div style={gridStyle}>
                        {portfolio.map((site) => (
                            <GridItem title={site.title} url={site.url} image={site.image} key={site.title} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const gridStyle = {
    color: "blue",
    overflow: "auto",
    display: "inline-block",
    width: "auto"
}

const gridItemStyle = {
    display: "inline-block",
    margin: "15px",
    float: "left"
}

const gridImgStyle = {
    border: "1px black solid",
    width: "200px"
}

function GridItem(props) {
    return (
        <a href={props.url} target="_blank">
            <div style={gridItemStyle}>
                <img className="grid-item-img" style={gridImgStyle} src={props.image} alt={props.title} />
                <GridItemTitle title={props.title} />
            </div >
        </a>
    )
}

const gridItemTitleStyle = {
    textAlign: "center",
    background: "black",
    color: "white",
    position: "bottom",
    // border: "1px white solid",
    display: "block"
}

function GridItemTitle(props) {
    return (
        <div style={gridItemTitleStyle}>
            {props.title}
        </div>
    )
}

export default Portfolio;