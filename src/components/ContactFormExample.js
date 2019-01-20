import React, { Component } from 'react';
import ModalContainer from './ModalContainer';
import ContactForm from './ContactForm';

class ExampleComp extends Component {
    constructor(props){
        super(props);
        this.state = {hideModal: true};
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal = () => {
        let value = this.state.hideModal === true ? false : true;
        this.setState({hideModal:value})
    }
    handleEsc = (event) => {
        if(event.key === "Escape") {
            if (this.state.hideModal === false) this.toggleModal();        }
      }
    componentDidMount(){
        document.addEventListener("keydown", this.handleEsc, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleEsc, false);
    }
    render(){
        return(
            <>
                <ModalContainer id={this.props.id}
                    hideModal={this.state.hideModal} 
                    title="Contact Me"
                    body={<ContactForm formHeading="Please fill out this sample form:" toggleModal={this.toggleModal}/>}
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.toggleModal}>Contact Form</button>
            </>
        )
    }
}

export default ExampleComp;