import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>

        <ul className="nav nav-pills">
        <div className ="container">
            <div
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </div>
            <div className="active"><a href="/">Dog Clicky Game</a></div>
            <div>Score: <span style={{ color: "yellow" }}>{props.curScore}</span> | Top Score: {props.topScore}</div>
            </div>
        </ul>

    </div>

);

export default Navpills;