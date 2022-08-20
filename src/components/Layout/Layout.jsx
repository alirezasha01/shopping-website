import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Layout.css"

const Layout = (props) =>{
    return(
        <Wrapper>
            <div>Navigation</div>
            <main className="content">{props.children}</main>
        </Wrapper>
    )
}

export default Layout