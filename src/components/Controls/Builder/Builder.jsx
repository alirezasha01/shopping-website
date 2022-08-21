import React from "react";
import "./Builder.css"

const Builder = (props) =>{
    return(
        <div className="builder">
            <div>{props.title}</div>
            <button onClick={props.add}>Add</button>
            <button>Remove</button>
        </div>
    )
}

export default Builder