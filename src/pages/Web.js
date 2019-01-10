import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import EmailCapture from '../components/EmailCapture';
import ContactFormExample from '../components/ContactFormExample';
import ViewEditEmailList from '../components/ViewEditEmailList';
import ExampleComp from '../components/ExampleComp'
import SiteModal from '../components/SiteModal';
import SimpleSiteExample from '../components/SimpleSiteExample';
import ExampleSite2 from '../components/ExampleSite2';
import ParallaxExample from '../components/parallaxExample/ParallaxExample'
import './Web.css';


const site1 = <SimpleSiteExample />;
const site2 = <ExampleSite2 />;
const site3 = <ParallaxExample />;
class Web extends Component{
    componentDidMount(){
        this.toTop();
    }
    toTop = () => {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <section  id="web" className="animated slideInLeft" style={this.props.style} onTransitionEnd={this.props.transitionEnd}>
            <div id="slide1"className="slide">
            <h1 className="accent heading">Web...</h1>
            <p>Using today's top technologies, including 
                <a href="https://reactjs.org/"rel="noopener noreferrer" target="_blank"> React, </a>
                <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">Next JS, </a>
                <a href="https://nodejs.org/" rel="noopener noreferrer" target="_blank">Node, </a>
                <a href="https://www.docker.com/" rel="noopener noreferrer" target="_blank">Docker, </a>
                <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">DigitalOcean, </a> and
                <a href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank"> AWS.</a> I create custom websites to help your business grow and achieve your vision.
                Check out some example functionality bellow.
            </p>
            <Link smooth to="/web#slide2" className="hashLink"><span className="scrollArrow"></span></Link>
            
            </div>
            <div id="slide2"className="slide">
                <Link smooth to="/web#slide1" className="hashLink"><span className="scrollArrow upArrow"></span></Link>

                <h2 className="accent">Email Capture</h2>
                <p>Your email list is your biggest asset, and building that list is an important function of any website.
                Allowing visitors an easy way to sign up for updates, reminders, or content should always be a focus of a professional website.
                From simple sticky top bar, to slide in on scroll, or pop-up modal on exit, you should always offer visitors a way to give you their email. </p>
                <EmailCapture />
                <Link smooth to="/web#slide3" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div id="slide3"className="slide">
            <Link smooth to="/web#slide2" className="hashLink"><span className="scrollArrow upArrow"></span></Link>

            <h2 className="accent">Admin Email List View</h2>
                <p>Quick and easy access to your mailing list is important. Whatever admin functionality you need, be it copy and pasting the entire list into
                 an email, exporting the list to pdf, or even to manually delete emails, I can build it for you. </p>
                <ViewEditEmailList /> 
                <Link smooth to="/web#slide4" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div id="slide4"className="slide">
            <Link smooth to="/web#slide3" className="hashLink"><span className="scrollArrow upArrow"></span></Link>
            <h2 className="accent">General Modals</h2>
                <p>Modals are a great way to draw attention to important messages or calls to action. 
                Whatever your design calls for, I can make it happen. Using React on the front end to build 
                reusable custom components, Nodejs on the backend to handle business logic and connect to
                your favorite (least hated?) SQL or NoSQL database.</p>
                <ExampleComp />
                <Link smooth to="/web#slide5" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div id="slide5"className="slide">
            <Link smooth to="/web#slide4" className="hashLink"><span className="scrollArrow upArrow"></span></Link>
            <h2 className="accent">Contact Form</h2>
                <p>Make it easy for your site visitors to contact you without having to leave your website</p>
                <ContactFormExample formHeading="Please fill out this sample form:" />
                <Link smooth to="/web#slide6" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div id="slide6"className="slide">
            <Link smooth to="/web#slide5" className="hashLink"><span className="scrollArrow upArrow"></span></Link>
            <h2 className="accent">Simple Site Example</h2>
                <p>Every business should have a website. Even if all you need to present
                is general information about your company, a simple website can help customers
                find you.</p>
                <SiteModal title="Simple Site Example" site={site1}/>
                <SiteModal title="Example Site 2" site={site2}/>
                <SiteModal title="Parallax Site" site={site3}/>
                <Link smooth to="/web#slide1" className="hashLink"><span id="pageUp" className="scrollArrow upArrow"></span></Link>
            </div>
        </section>
        );
    }
}

export default Web;