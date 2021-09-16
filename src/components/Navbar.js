import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../logo.png";
import { faAddressBook, faBackward, faBars, faChartLine, faHistory, faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "grey"}}>
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="..."></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="?pg=home"><FontAwesomeIcon icon={faHome} /> <small>Home</small></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="?pg=link"><FontAwesomeIcon icon={faAddressBook} /> <small>Link</small></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="?pg=refs"><FontAwesomeIcon icon={faBackward} /> <small>References</small></a>
                        </li>
                        <li className="nav-item">
                            <a href="?pg=abt" className="nav-link"><FontAwesomeIcon icon={faHistory} /> <small>About</small></a>
                        </li>
                        <li className="nav-item">
                            <a href="?pg=org" className="nav-link"><FontAwesomeIcon icon={faChartLine} /> <small>Organization</small></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
