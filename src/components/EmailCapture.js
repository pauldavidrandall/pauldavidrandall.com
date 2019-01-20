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
                    title = "Join My Mailing List"
                    body = {<EmailForm closeOnSuccess={this.toggleModal}/>}
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.toggleModal}>Email Capture Form</button>
            </>
        )
    }
}
export default EmailCapture;