import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    componentDidMount(props){
}
    render(){
        return(
            <nav id="nav">  
            <ul className="main-nav">
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/web" activeClassName="active">Web</NavLink></li>
                <li><NavLink to="/photo" activeClassName="active">Photo</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;