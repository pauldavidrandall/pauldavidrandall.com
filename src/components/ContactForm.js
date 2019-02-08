import React, { Component } from 'react';
import { alertMessage } from './AlertMessage'
import './ContactForm.css'

function validateForm(message){
  let error = [];
  if (!message.name.match(/^[a-zA-Z ]{2,30}$/)){
      document.getElementById('nameError').innerHTML = 'Valid Name Required';
      error.push(1)
  }
  else{
      document.getElementById('nameError').innerHTML = '';
  }
  if (!message.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
      document.getElementById('emailError').innerHTML = 'Valid Email Required';
      error.push(1)            }
  else{
      document.getElementById('emailError').innerHTML = '';
  }
  if (message.message === ""){
      document.getElementById('messageError').innerHTML = 'Message Required';
      error.push(1)            }
  else{
      document.getElementById('messageError').innerHTML = '';
  }
  if (error.length === 0) return true
  return false
}
class ContactForm extends Component {
  handleSubmit(props) {
    const form = document.getElementById('contactInfo')
    const message = {
      name : form.elements[0].value,
      email: form.elements[1].value,
      message: form.elements[2].value
    }
    if (validateForm(message)){
      //Clear Contact Form Inputs
      for (let i = 0; i < form.elements.length; i++){
      form.elements[i].value="";
      }
      //send message to database
      fetch('https://api.pauldavidrandall.com/contactForm/sendMessage', { 
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(message)
      })
        .then((res) => res.text())
        .then(text => alertMessage(text))
        .catch((err)=>console.log(err))
    };
  }
  render(){
    return(
      <div>
        <p>{this.props.formHeading}</p>
        <form id='contactInfo'>
          <div id="nameError" className="error-field"></div>
          <label for="name" className="screen-reader-text">Name:</label>
          <input type='text' name='name' id="name" placeholder="Your name..."></input>
          <div id="emailError" className="error-field"></div>
          <label for="email" className="screen-reader-text">Email:</label>
          <input type='email' name='email' id="email" placeholder="Your email address..."></input>
          <div id="messageError" className="error-field"></div>
          <label for="message" className="screen-reader-text">Message:</label>
          <textarea name='message' id="message" placeholder="Please enter your message..."></textarea>
        </form>
        <button id="sendMessageBtn" onClick={this.handleSubmit}>Send Message</button>
      </div>  
    )
  }
};

export default ContactForm;
