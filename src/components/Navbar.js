import React, { useEffect } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'



const Navbar = () => {

    let navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
    

    let location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                {!localStorage.getItem("token") ?
                    <div className="d-flex flex-row-reverse" role="search">
                        <Link className={`mx-2 navbar-nav nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link>
                        <Link className={`mx-2 navbar-nav nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">Signup</Link>
                    </div> :
                    <button className="mx-2 navbar-nav nav-link" onClick={handleLogout}>Logout</button>}
            </div>
        </nav>
    )
}

export default Navbar