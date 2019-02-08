import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import EmailCapture from '../components/EmailCapture';
import ContactFormExample from '../components/ContactFormExample';
import ViewEditEmailList from '../components/ViewEditEmailList';
import './Web.css';

class Web extends Component{
    componentDidMount(){
        this.toTop();
    }
    toTop = () => {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <section  id="web" className="container">
            <div className="inner-container">
                <div id="slide1"className="slide">
                  <h1 className="accent heading">Web...</h1>
                  <p>This website was built using today's top technologies:</p>
                  <ul>
                    <li>
                      <a href="https://reactjs.org/"rel="noopener noreferrer" target="_blank">React </a> for the front end
                    </li>
                    <li>
                      <a href="https://nodejs.org/" rel="noopener noreferrer" target="_blank">Node </a> and 
                      <a href="https://www.expressjs.com/" rel="noopener noreferrer" target="_blank"> Express </a> for the backend RESTful API
                    </li>
                    <li>
                    All hosted on 
                    <a href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank"> AWS </a> using:
                      <ul>
                        <li>
                          <a href="https://aws.amazon.com/cloudfront" rel="noopener noreferrer" target="_blank">Cloudfront CDN </a> for quick global delivery
                        </li>
                        <li>
                        <a href="https://aws.amazon.com/s3" rel="noopener noreferrer" target="_blank">S3 </a> for storing the static assets 
                        </li>
                        <li>
                          <a href="https://aws.amazon.com/elasticbeanstalk" rel="noopener noreferrer" target="_blank">Elastic Beanstalk </a> for API deployment and auto-scaling 
                        </li>
                      </ul>
                    </li>
                    <li>
                      All Connected to   
                      <a href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank"> MongoDB </a> database-as-a-service  
                      <a href="https://www.mlab.com/" rel="noopener noreferrer" target="_blank"> MLab. </a>
                    </li>
                  </ul>
                  <Link smooth to="/web#slide2" className="hashLink">scroll<span className="scrollArrow"></span></Link>    
                </div>
               
            </div>
            <div className="inner-container">
                <div id="slide2"className="slide">
                  <h2 className="accent">Always excited to learn more!</h2>
                  <p>I am experienced with:</p>
                  <ul>
                    <li>HTML5 Semantic Markup</li>
                    <li>CSS3, Flexbox, Media Queries, Bootstrap</li>
                    <li>JavaScript, JS6, Fetch/AJAX, Local Storage</li>
                    <li>React, Next.js, Webpack, ESLint</li>
                    <li>Node, Express, MongoDB, PHP, MySQL</li>
                    <li>REST API, Authentication</li>
                    <li>Git, Bash, NPM, Yarn, AWS CLI</li>
                    <li>AWS, DigitalOcean, NGINX, Apache</li>
                    <li>Linux, Mac OSX, Windows</li>
                  </ul>
                  <Link smooth to="/web#slide3" className="hashLink">scroll<span className="scrollArrow"></span></Link>
                </div>
            </div>
            <div className="inner-container">
                <div id="slide3"className="slide">
                  <h2 className="accent">Not just a coder!</h2>
                  <p>While adept with the technical programatic side of web developement I am also well versed in:</p>
                  <ul>
                   <li>graphic, content, and interface design principles</li>
                   <li>user-centered design, layout styles and strategies</li>
                   <li>competitive analysis, usability testing, and accessibility</li>
                   <li>navigation design, organization, and labeling</li>
                  </ul>
                  <p>Check out some sample functionality below...</p>
                  <Link smooth to="/web#slide4" className="hashLink">scroll<span className="scrollArrow"></span></Link>
                </div>
            </div>
            <div className="inner-container">
                <div id="slide4"className="slide">
                    <h2 className="accent">Email Capture</h2>
                    <p>Your email list is your biggest asset, and building that list is an important function of any website.
                    Allowing visitors an easy way to sign up for updates, reminders, or content should always be a focus of a professional website.
                    From simple sticky top bar, to slide in on scroll, or pop-up modal on exit, you should always offer visitors a way to give you their email. </p>
                    <EmailCapture id="emailCapture"/>
                    <Link smooth to="/web#slide5" className="hashLink">scroll<span className="scrollArrow"></span></Link>
                </div>
            </div>
            <div className="inner-container">
                <div id="slide5"className="slide">
                    <h2 className="accent">Admin Email List View</h2>
                    <p>Quick and easy access to your mailing list is important. Whatever admin functionality you need, be it copy and pasting the entire list into
                    an email, exporting the list to pdf, or even to manually delete emails, I can build it for you. </p>
                    <ViewEditEmailList id="viewEditEmailList"/> 
                    <Link smooth to="/web#slide6" className="hashLink">scroll<span className="scrollArrow"></span></Link>
                </div>
            </div>
            <div className="inner-container">
                <div id="slide6"className="slide">
                    <h2 className="accent">Contact Form</h2>
                    <p>Make it easy for your site visitors to contact you without having to leave your website. A contact form can also help reduce the amount of spam mail you receive.</p>
                    <ContactFormExample id="contactFormExample" formHeading="Please fill out this sample form:" />
                    <Link smooth to="/web#nav" className="hashLink">back to top<span className="scrollArrow"></span></Link>
                </div>
            </div>
            {/* <div className="inner-container">
            <div id="slide5"className="slide">
            <Link smooth to="/web#slide5" className="hashLink"><span className="scrollArrow upArrow"></span></Link>
            <h2 className="accent">Sample Sites</h2>
                <p>Every business should have a website. Even a simple website with your general information can help customers
                find you. If you need a commanding online presence with integrated booking or sales systems
                I can help with that too.</p>
                <div className="bucket-container">
                    <div id="bucket1" className="bucket"></div>  
                    <div id="bucket2" className="bucket"></div>
                    <div id="bucket3" className="bucket"></div>
                </div>
            </div>
            </div> */}
        </section>
        );
    }
}

export default Web;