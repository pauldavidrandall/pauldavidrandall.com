import React, { Component } from 'react';
import './AlertMessage.css';

export const alertMessage = (message) =>{
  message = JSON.parse(message);
    let title = document.getElementById('alertTitle');
    let alertDiv = document.getElementById('alertMessage');
    title.className = message.style
    title.innerHTML = message.title;
    document.getElementById('alertBody').innerHTML=message.body;
    alertDiv.style.display='block';
    setTimeout(function(){alertDiv.className="disapear"}, 1000);
    setTimeout(function(){alertDiv.style.display='none'}, 2500);
    setTimeout(function(){alertDiv.className="modal"}, 3000);
      if (message.body === "Your message has been received.") closeContactFormModal()
} 
//current work around for non-auto closing contact form
const closeContactFormModal = () => {
  if(document.getElementById('contactFormExample')) {
    document.getElementById('contactFormExample').style.display='none';
  }
  document.getElementsByTagName('body')[0].className = "";
}
class AlertMessage extends Component {
  render(){
    return(
      <div  id="alertMessage" className="modal">
        {/* Modal Content */}
        <div className="modal-content">
          <div id="alertTitle"className="alertTitle caution">Test Title</div>
          <p id="alertBody">This is a test message</p> 
        </div>
      </div>
    );
  }
}

export default AlertMessage;