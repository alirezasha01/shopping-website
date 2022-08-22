import React from "react";
import "./Controls.css"
import Builder from "./Builder/Builder";
import {prices} from "../../containers/Shopping/Shopping";

const products = [
    {title : "product 1" , type : 'product1'},
    {title : "product 2" , type : 'product2'},
    {title : "product 3" , type : 'product3'},
    {title : "product 4" , type : 'product4'}
]
const Controls = (props) =>{
    return(
        <div className="controls">
            <div>
                <p>Total Price: {props.totalPrice}$</p>
            </div>
            {products.map((item)=>{
                return(
                <Builder
                key={item.title}
                title={item.title}
                add={()=>props.productAdd(item.type)}
                remove={()=>props.productRem(item.type)}
                price={prices[item.type]}
                count={props.counter[item.type]}
                />
                )
            })}
        </div>
    )
}

export default Controls