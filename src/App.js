import {React,Component} from "react";
import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";

class App extends Component{
  render(){
    return(
      <Layout>
        <Shopping/>
      </Layout>
    )
  }
}

export default App