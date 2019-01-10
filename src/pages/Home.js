import React, {Component} from 'react';
import { Link  } from "react-router-dom";


class Home extends Component{
    render(){
        return(
            <section id="art" className="animated slideInRight">
                <div id="slide1"className="slide">
                <h1 className="accent heading">Hello...</h1>
                <p>
                    My name is <Link to="/about">Paul. </Link> 
                    After following my pasion of <Link to="photo">photography </Link> for 10 years 
                    I found a new passion in <Link to="web">web development. </Link> 
                    Now I create high quality custom websites.
                    Please <Link to="contact">contact me</Link> for all your digital solution needs.
                </p>
                </div>
            </section>
        );
    }
}

export default Home;