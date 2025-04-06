import { Component } from "react";
import App from "./App";

class AppHeader extends Component{
     logout=()=>{
        localStorage.removeItem('token');
        window.location.reload();
    }
    render(){
        const myStyle = {
            color: "white",
            backgroundColor: "lightseagreen",
            padding: "20px",
            fontFamily: "Sans-Serif",
           
          };
        return(
            <div className="container row" style={myStyle} >
                <div className="col-md-11">
                <h1 >{this.props.title}</h1>
                </div>
                <div className="col-md-1">
                <button  className="btn btn-danger" onClick={this.logout}>Log out</button>
                </div>
                
                
            </div>
            
        );
    }
}
export default AppHeader;