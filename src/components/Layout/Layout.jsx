import React from "react";
import Wrapper from "../../hoc/Wrapper";

const Layout = (props) =>{
    return(
        <Wrapper>
            <div>Navigation</div>
            <main>{props.children}</main>
        </Wrapper>
    )
}

export default Layout