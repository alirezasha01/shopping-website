import {React , Component} from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const prices = {
    product1: 55000,
    product2: 66000,
    product3: 25000,
    product4: 33000,
}
class Shopping extends Component{
    state={
        products:{
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice:0
    }
    addProductsHandler=(type)=>{
        const prevCount = this.state.products[type]
        const updateCount = prevCount + 1
        const updateProductCounter={
            ...this.state.products
        }
        updateProductCounter[type] = updateCount
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const updatePrice = priceAdd + prevPrice
        this.setState({totalPrice:updatePrice , products:updateProductCounter})

        console.log("testing add")
    }
    render(){
        return(
            <Wrapper>
                <Controls productAdd={this.addProductsHandler}/>
            </Wrapper>
        )
    }
}

export default Shopping