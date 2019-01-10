import React, { Component } from 'react';
import { alertMessage } from "./AlertMessage"
import './EmailForm.css'

class EmailForm extends Component {
    componentDidMount(){
        // Using eventlistener on 'join' btn to validate and submit email
        const btn = document.getElementById('joinEmailBtn')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const email = document.getElementById('capEmail').value
            if (email === "") {
                document.getElementById('emailCaptureError').innerHTML = 'Valid Email Required';
                return;
            };
            document.getElementById('capEmail').value="";
            document.getElementById('emailCaptureError').innerHTML = "";

            fetch('/emailList/addEmail', { 
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    {email: email,
                    subscribed: true})
            })
            .then((res) => res.text())
            .then(text => alertMessage(text))
            .then(() => this.props.closeOnSuccess())
            .catch((err)=>console.log(err))
        })
    }
    
    render(){
        return(
            <form id="emailCaptureForm">
                <div id="emailCaptureError" className="error-field"></div>
                <input type='email' name='email' id="capEmail" placeholder="enter your email..."></input>
                <button id="joinEmailBtn">Join</button>
            </form>
        )
    }
}
export default EmailForm;