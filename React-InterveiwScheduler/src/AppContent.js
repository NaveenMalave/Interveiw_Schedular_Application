import { Component } from "react";
import AddCandidate from "./AddCandidate";
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import GetCandidate from "./GetCandidate";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import ScheduleInterview from "./ScheduleInterview";
import GetListInterview from "./GetListInteview";
const Home=(props)=>{
    return(
    <div>
        <h3 style={{Color:"aquamarine"}}>Welcome to Interview Scheduler application</h3>
        <hr></hr>
        
    </div>
    )
}
class AppContent extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="app-content" style={{height:"850px",backgroundColor:"lightGray"}}>
                <div className="row" style={{backgroundColor:"lightwhite"}}>
                    <div className="col-md-4"  style={{}}>
                        <ul className="list-group" style={{gap:"10px"}}>
                            <button className="btn btn-success">
                                <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
                            </button>
                            
                           <button className="btn btn-info">
                                <Link to="/add-cand"  style={{color:"white",textDecoration:"none"}}>Add Candidate</Link>
                            </button>
                            {/* <li className="list-group-item"> */}
                            <button className="btn btn-secondary">
                                <Link to="/get-cand" style={{color:"white",textDecoration:"none"}}>Get Candidate Details</Link>
                         </button>
                            {/* </li> */}
                            <button className="btn btn-info">
                                <Link to="/sch-inter" style={{color:"white",textDecoration:"none"}}>Schedule Interview</Link>
                         </button>
                         <button className="btn btn-secondary">
                                <Link to="/int" style={{color:"white",textDecoration:"none"}}>Get Interview List</Link>
                         </button>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route  element={<ProtectedRoute/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path='/add-cand' element={<AddCandidate/>}/>
                            <Route path='/get-cand' element={<GetCandidate/>}/>
                            <Route path="/sch-inter" element={<ScheduleInterview/>}/>
                            <Route path="/int" element={<GetListInterview/>}/>
                        </Route>
                            
                        </Routes>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}
export default AppContent;