import { use, useState } from "react";
import { json, Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    let [user,setUser]=useState({username:'',password:''})
   const login=(event)=>{
       event.preventDefault();
       fetch('http://localhost:5129/api/Account/login',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type' : 'application/json'
        },
       }).then(res=>res.json()).then(data=>{
        localStorage.setItem('token',data.token)
        navigate('/');
        console.log('token:',data.token);

        console.log('logged-in:',user);
       }).catch(err=>{
        console.log('invalid credentials:',err);
       })
       
    }
    const textHandler=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser((prevData)=>({...prevData,[name]:value}));
    }
    return (
        <form className="form" onSubmit={login} style={{width:'300px'}}>
            <div className="row">
                <div className="col-md-6">
                    <label className="form-label">UserName:</label>
                </div>
                <div className="col-md-6">
                    <input type="text" className="for-control" name="username"  value={user.username} onChange={textHandler}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label className="form-label">Password:</label>
                </div>
                <div className="col-md-6">
                    <input type="text" className="for-control" name="password" value={user.password} onChange={textHandler}/>
                </div>
            </div>
            <button className="btn btn-primary">Login</button>
            {/* <Link to="/register">register</Link> */}
        </form>
    )
}
export default Login;