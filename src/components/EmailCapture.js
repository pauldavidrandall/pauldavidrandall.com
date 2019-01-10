import React, { Component } from 'react';
import ModalContainer from './ModalContainer';
import EmailForm from './EmailForm';

class EmailCapture extends Component {
    constructor(props){
        super(props);
        this.state = {hideModal: true};
    }
    toggleModal = () => {
        let value = this.state.hideModal === true ? false : true;
        this.setState({hideModal:value})
    }
    render(){
        return(
            <div id="emailCapture2">
                <ModalContainer 
                    hideModal={this.state.hideModal} 
                    title = "Join My Mailing List"
                    body = {<EmailForm closeOnSuccess={this.toggleModal}/>}
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.toggleModal}>Email Capture Form</button>
            </div>
        )
    }
}
export default EmailCapture;