import React, { Component } from 'react';
import './ConfirmMessage.css';

export const confirmMessage = (message) =>{
    
    let alertDiv = document.getElementById('confirmMessage');
    let title = document.getElementById('confirmTitle');
    let body = document.getElementById('confirmBody')
    title.className = message.style
    title.innerHTML = message.title;
    body.innerHTML=message.message;
    alertDiv.style.display='block';
}

class ConfirmMessage extends Component {
    render(){
        return(
            <div  id="confirmMessage" className="modal">
                <div className="modal-content">
                    <div id="confirmTitle"className="confirmTitle warning">Test Title</div>
                    <p id="confirmBody">This is a test message</p> 
                    <button onClick={this.props.handleCancel}>Cancel</button> <button onClick={this.props.handleConfirm}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default ConfirmMessage;