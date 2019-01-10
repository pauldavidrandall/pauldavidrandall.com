import React, {Component} from 'react';
import './About.css';
class About extends Component{
    render(){
        return(
            <section  id="about" className="animated slideInLeft">
            <div id="slide1"className="slide">
            <h1 className="accent heading">About...</h1>
            <div className="imageContainer"><div className="profileImage"></div></div>
            <p>I live in the great state of <a href="http://www.puremichigan.org" rel="noopener noreferrer" target="_blank">Michigan. </a> 
                I hold an associates of applied science in web development from 
                <a href="http://www.wccnet.edu/academics/programs/view/program/APWDDD/" rel="noopener noreferrer" target="_blank"> Washtenaw Community College</a>,
                and a certificate in portrait photography from the now defunct 
                <a href="https://en.wikipedia.org/wiki/Hallmark_Institute_of_Photography" rel="noopener noreferrer" target="_blank"> Hallmark Institute of Photography.</a>
            </p>
            </div>
        </section>
        );
    }
}

export default About;