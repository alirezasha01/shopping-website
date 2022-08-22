import {React , Component} from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

export const prices = {
    product1: 55,
    product2: 66,
    product3: 25,
    product4: 33,
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
    }

    removeProductHandler = (type) =>{
        const prevCount = this.state.products[type]
        const updateCount = prevCount - 1
        const updateProductCounter={
            ...this.state.products
        }
        updateProductCounter[type] = updateCount
        const priceSub = prices[type]
        const prevPrice = this.state.totalPrice
        const updatePrice = prevPrice - priceSub
        if(updatePrice>=0){
        this.setState({totalPrice:updatePrice , products:updateProductCounter})
        }
    }
    render(){
        return(
            <Wrapper>
                <Controls
                productAdd={this.addProductsHandler}
                productRem={this.removeProductHandler}
                totalPrice={this.state.totalPrice}
                counter={this.state.products}
                />
            </Wrapper>
        )
    }
}

export default Shopping