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
                    <p>Using today's top technologies, including 
                        <a href="https://reactjs.org/"rel="noopener noreferrer" target="_blank"> React, </a>
                        <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">Next JS, </a>
                        <a href="https://nodejs.org/" rel="noopener noreferrer" target="_blank">Node, </a>
                        <a href="https://www.docker.com/" rel="noopener noreferrer" target="_blank">Docker, </a>
                        <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">DigitalOcean, </a> and
                        <a href="https://aws.amazon.com/" rel="noopener noreferrer" target="_blank"> AWS.</a> I create custom websites to help your business grow and achieve your vision.
                        Check out some example functionality bellow.
                    </p>
                </div>
                <Link smooth to="/web#slide2" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div className="inner-container">
            <div id="slide2"className="slide">
                <h2 className="accent">Email Capture</h2>
                <p>Your email list is your biggest asset, and building that list is an important function of any website.
                Allowing visitors an easy way to sign up for updates, reminders, or content should always be a focus of a professional website.
                From simple sticky top bar, to slide in on scroll, or pop-up modal on exit, you should always offer visitors a way to give you their email. </p>
                <EmailCapture id="emailCapture"/>
            </div>
                <Link smooth to="/web#slide3" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div className="inner-container">
                <div id="slide3"className="slide">
                    <h2 className="accent">Admin Email List View</h2>
                    <p>Quick and easy access to your mailing list is important. Whatever admin functionality you need, be it copy and pasting the entire list into
                    an email, exporting the list to pdf, or even to manually delete emails, I can build it for you. </p>
                    <ViewEditEmailList id="viewEditEmailList"/> 
                </div>
                    <Link smooth to="/web#slide4" className="hashLink"><span className="scrollArrow"></span></Link>
            </div>
            <div className="inner-container">
            <div id="slide4"className="slide">
            <h2 className="accent">Contact Form</h2>
                <p>Make it easy for your site visitors to contact you without having to leave your website. A contact form can also help reduce the amount of spam mail you receive.</p>
                <ContactFormExample id="contactFormExample" formHeading="Please fill out this sample form:" />
                </div>
                {/* <Link smooth to="/web#slide5" className="hashLink"><span className="scrollArrow"></span></Link> */}
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