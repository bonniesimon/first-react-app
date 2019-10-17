import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
    render(){
        return(
            <div className="nav">
                <div className="logo">React To-do</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
                
            </div>
        )
    }
}


export default Navbar;