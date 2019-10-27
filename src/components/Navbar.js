import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <div className="nav">
                <div className="logo">React To-do</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About Me</a></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
                
            </div>
        )
    }
}


export default Navbar;