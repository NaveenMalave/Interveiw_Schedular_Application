import { Component } from "react";
import App from "./App";
const myStyle={
 backgroundColor:"lightblue",
 padding :"20px",
 color:"darkblue",
}
class AppFooter extends Component{
    render(){
        return(
            <div className="container" style={{backgroundColor:"lightpink",padding:"10px"}}>
             <p>&copy; All rights are reserved by Naveen</p>
            </div>
        );

    }
}
export default AppFooter;