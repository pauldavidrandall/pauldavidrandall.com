import React, {Component} from 'react';
import './About.css';
class About extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render(){
    return(
      <section  id="about" className="container">
        <div id="slide1"className="slide">
          <h1 className="accent heading">About...</h1>
          <div className="imageContainer"><div className="profileImage"></div></div>
          <p>I live in the beautiful state of <a href="http://www.puremichigan.org" rel="noopener noreferrer" target="_blank">Michigan. </a> 
            I hold an associates of applied science in web development from 
            <a href="http://www.wccnet.edu/academics/programs/view/program/APWDDD/" rel="noopener noreferrer" target="_blank"> Washtenaw Community College</a>,
            and a certificate in portrait photography from the now defunct 
            <a href="https://en.wikipedia.org/wiki/Hallmark_Institute_of_Photography" rel="noopener noreferrer" target="_blank"> Hallmark Institute of Photography. </a> 
          </p>
          <p>Always excited about learning more about my passions, other people, technology, politics, and the world.  
            I love to read, study, tinker, debate, converse, and laugh. Usually with a travel mug of coffee in hand. 
          </p>
        </div>
      </section>
    );
  }
}

export default About;