import React from "react";
import "./Controls.css"
import Builder from "./Builder/Builder";

const products = [
    {title : "product 1" , type : "product1"},
    {title : "product 2" , type : "product2"},
    {title : "product 3" , type : "product3"},
    {title : "product 4" , type : "product4"}
]
const Controls = () =>{
    return(
        <div className="controls">
            {products.map((item)=>{
                return <Builder key={item.title} title={item.title}/>
            })}
        </div>
    )
}

export default Controls