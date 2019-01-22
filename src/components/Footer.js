import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    year = new Date().getFullYear();
    render(){
        return(
            <footer><p>copyright paul david randall <span>2006-{this.year}</span></p></footer>
        )
    }
}
export default Footer;