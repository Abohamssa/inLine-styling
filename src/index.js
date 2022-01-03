import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color: "red",
    fontSize: "26px",
    border: "2px solid black"
};

customStyle.fontSize = "50px";

ReactDOM.render(
    <h1 style={customStyle}>Hello World!</h1>,
    document.getElementById("root")
);
