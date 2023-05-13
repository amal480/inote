import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Navbar = () => {
    let location=useLocation();
    useEffect(() => {
        // Google Analytics
        // ga('send', 'pageview');
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
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar