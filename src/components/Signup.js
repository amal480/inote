import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";

function Signup(props) {

  const [credentials, setcredentials] = useState({ name:"",email: "", password: "",cpassword:"" })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    //API call
    const {name,email,password}=credentials
    const response = await fetch(`${process.env.REACT_APP_SIGNUP}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email,password }),

    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/")
      props.showalert("Account created successfully","success")
    }
    else {
      props.showalert("Invalid credentials","danger")
    }
  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100" style={{backgroundColor:"white"}}>
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="name" name="name" onChange={onChange} className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" name="email" onChange={onChange} className="form-control" />
                            <label className="form-label" htmlFor="email">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" name="password" onChange={onChange} className="form-control" />
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                        </div>

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="cpassword" name="cpassword" onChange={onChange} className="form-control" />
                            <label className="form-label" htmlFor="cpassword">Confirm password</label>
                          </div>
                        </div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup