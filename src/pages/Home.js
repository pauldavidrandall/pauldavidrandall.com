import React, {Component} from 'react';
import { Link  } from "react-router-dom";


class Home extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <section id="home" className="container">
                <div id="slide1"className="slide">
                <h1 className="accent heading">Hello...</h1>
                <p>
                    My name is <Link to="/about">Paul. </Link> 
                    After following my pasion of <Link to="photo">photography </Link> for over a decade  
                    I found a new passion in <Link to="web">web development. </Link> 
                    Now I create high quality custom websites.
                    Please <Link to="contact">contact me</Link> if you are interested in working together.
                </p>
                </div>
            </section>
        );
    }
}

export default Home;