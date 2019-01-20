import React, {Component} from 'react';
import ContactForm from '../components/ContactForm';
import "./Contact.css";

class Contact extends Component{
    componentDidMount(){
        this.toTop();
    }
    toTop = () => {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <section  id="contact" className="container">
                <div id="slide1"className="slide">
                    <h1 className="accent heading">Contact...</h1>
                    <p>If you are interested in working with me on your current or future project, please to reach out to me.</p>
                   <ContactForm />
                </div>
                
            </section>
        );
    }
}

export default Contact;