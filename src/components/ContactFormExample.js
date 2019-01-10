import React, { Component } from 'react';
import ModalContainer from './ModalContainer';
import ContactForm from './ContactForm';

class ExampleComp extends Component {
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
            <div id="contactFormExample">
                <ModalContainer 
                    hideModal={this.state.hideModal} 
                    title="Contact Me"
                    body={<ContactForm formHeading="Please fill out this sample form:" closeOnSuccess={this.toggleModal}/>}
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.toggleModal}>Contact Form</button>
            </div>
        )
    }
}

export default ExampleComp;