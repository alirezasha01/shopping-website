import React from "react";
import "./Controls.css"
import Builder from "./Builder/Builder";

const products = [
    {title : "product 1" , type : 'product1'},
    {title : "product 2" , type : 'product2'},
    {title : "product 3" , type : 'product3'},
    {title : "product 4" , type : 'product4'}
]
const Controls = (props) =>{
    return(
        <div className="controls">
            {products.map((item)=>{
                return(
                <Builder
                key={item.title}
                title={item.title}
                add={()=>props.productAdd(item.type)}
                />
                )
            })}
        </div>
    )
}

export default Controls