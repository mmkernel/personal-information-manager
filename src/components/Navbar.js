import { useEffect, useState } from 'react';
import '../assets/css/Navbar.css';
import postitLogo from "../assets/img/postit-logo.png";
import recipeLogo from "../assets/img/recipe-logo.png";
import shoppingLogo from "../assets/img/shopping-logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [currentLogo, setCurrentLogo] = useState(postitLogo);
    const location = useLocation();
    
    useEffect(() => {
        // Check the current route and set the logo accordingly
        if (location.pathname === '/whatcanieat') {
          setCurrentLogo(recipeLogo);
        } else if (location.pathname === '/whattobuy'){
            setCurrentLogo(shoppingLogo);
        }
          else {
          setCurrentLogo(postitLogo);
        }
      }, [location.pathname]);
    
    return (
    <>
        <aside className="w3-sidebar w3-white w3-animate-left" id="mySidebar"><br />
            <div id="logo">
                {/* <a href="#" onclick={close_menu} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                    <i className="fa fa-remove"></i>
                </a> */}
                <img src={currentLogo} alt='Logo' /><br />
                <h3><b>PIM</b></h3>
                <p>Personal Information Manager</p>
            </div>
            <nav className="main-menu w3-bar-block">
                <ul>
                    <li>
                        <NavLink to="/" className="w3-bar-item w3-button w3-padding" activeClassName="active">
                            <i className="fa fa-th-large fa-fw w3-margin-right"></i>Things To Do
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/whatcanieat" className="w3-bar-item w3-button w3-padding" activeClassName="active">
                            <i className="fa fa-cutlery w3-margin-right"></i>What Can I Eat
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/whattobuy" className="w3-bar-item w3-button w3-padding" activeClassName="active">
                            <i className="fa fa-shopping-basket fa-fw w3-margin-right"></i>What Do I Have To Buy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/whatsinside" className="w3-bar-item w3-button w3-padding" activeClassName="active">
                            <i className="fa fa-search fa-fw w3-margin-right"></i>What Is Inside
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" className="w3-bar-item w3-button w3-padding" activeClassName="active">
                            <i className="fa fa-tasks fa-fw w3-margin-right"></i>Tasks
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            {/* Social Media Links */}
            <div className="w3-panel w3-large social-media">
                <i className="fa fa-facebook-official w3-hover-opacity"></i>
                <i className="fa fa-instagram w3-hover-opacity"></i>
                <i className="fa fa-snapchat w3-hover-opacity"></i>
                <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                <i className="fa fa-twitter w3-hover-opacity"></i>
                <i className="fa fa-linkedin w3-hover-opacity"></i>
            </div>
        </aside>
    </>
    )
}

export default Navbar;