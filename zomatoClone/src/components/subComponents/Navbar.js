import React from 'react';
import { Link } from 'react-router-dom';
import eduLogo from "../images/NewFolder/eduLogo.png";
import Logins from './Logins';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-danger">
                <div class="container-fluid">
                    <Link to={`/`} style={{ textDecoration: "none", color: "white" }} >
                        <img
                            className="navLogo"
                            src={eduLogo}
                            alt="error"
                            width="50px"
                            height="50px"
                        />
                    </Link>
                    <Logins />
                </div>
            </nav>
        </>
    )
}

export default Navbar