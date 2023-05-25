import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";

function Login(props) {

    const [credentials, setcredentials] = useState({email:"",password:""})

    let navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //API call
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}),

        });
        const json=await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem("token",json.authtoken);
            navigate("/")
            props.showalert("Logged in successfully","success")


        }
        else{
            props.showalert("Invalid credentials","danger")
        }
    }

    const onChange=(e)=>{
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Password" />
            </div>
            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className=" my-3 btn btn-primary">Submit</button>
        </form>
    </div>
)
}

export default Login