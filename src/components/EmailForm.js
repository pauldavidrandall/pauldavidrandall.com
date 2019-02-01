import React, { Component } from 'react';
import { alertMessage } from "./AlertMessage"
import './EmailForm.css'

class EmailForm extends Component {
    validateEmail(email){
            if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                document.getElementById('emailCaptureError').innerHTML = 'Valid Email Required';
                return false
            }
            else {
                document.getElementById('emailCaptureError').innerHTML = ''
                document.getElementById('capEmail').value=""
                document.getElementById('emailCaptureError').innerHTML = ""
                return true
            }
    }
    componentDidMount(){
        // Using eventlistener on 'join' btn to validate and submit email
        const btn = document.getElementById('joinEmailBtn')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const email = document.getElementById('capEmail').value
            if (this.validateEmail(email)){
                let header = new Headers({
                  'Access-Control-Allow-Origin':'https://www.pauldavidrandall.com'
                });
                fetch('https://api.pauldavidrandall.com/emailList/addEmail', { 
                    method: 'POST',
                    mode: 'cors',
                    headers: {'Content-Type':'application/json', header},
                    body: JSON.stringify({email: email, subscribed: true})
                })
                .then((res) => res.text())
                .then(text => alertMessage(text))
                .then(() => this.props.closeOnSuccess())
                .catch((err)=>console.log(err))
            }
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