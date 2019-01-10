import React, { Component } from 'react';
import { alertMessage } from './AlertMessage'
import './ContactForm.css'

class ContactForm extends Component {
    componentDidMount(){
        //Send Message Button
        const btn = document.getElementById('sendMessageBtn');
        btn.addEventListener('click', (e) => {
            const form = document.getElementById('contactInfo')
            const message = {
                name : form.elements[0].value,
                email: form.elements[1].value,
                message: form.elements[2].value
            }
            let error = [];
            if (message.name === ""){
                document.getElementById('nameError').innerHTML = 'Valid Name Required';
                error.push(1);
            }
            else{
                document.getElementById('nameError').innerHTML = '';
            }
            if (message.name === ""){
                document.getElementById('emailError').innerHTML = 'Valid Email Required';
                error.push(1);
            }
            else{
                document.getElementById('emailError').innerHTML = '';
            }
            if (message.name === ""){
                document.getElementById('messageError').innerHTML = 'Message Required';
                error.push(1);
            }
            else{
                document.getElementById('messageError').innerHTML = '';
            }
            if (error.length > 0){
                error=[];
                return;
            }
            //Clear Contact Form Inputs
            for (let i = 0; i < form.elements.length; i++){
                form.elements[i].value="";
            }
            //send message to database
            fetch('/contactForm/sendMessage', { 
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(message)
              })
                .then((res) => res.text())
                .then(text => alertMessage(text))
                .then(() => this.props.closeOnSuccess())
                .catch((err)=>console.log(err))
            });
    };
    render(){
        return(
            <div>
                <p>{this.props.formHeading}</p>
                <form id='contactInfo'>
                    <div id="nameError" className="error-field"></div>
                    <input type='text' name='name' placeholder="Your name..."></input>
                    <div id="emailError" className="error-field"></div>
                    <input type='email' name='email' placeholder="Your email address..."></input>
                    <div id="messageError" className="error-field"></div>
                    <textarea name='message' placeholder="Please enter your message..."></textarea>
                </form>
                <button id="sendMessageBtn">Send Message</button>
            </div>
            
        )
    }
};

export default ContactForm;
