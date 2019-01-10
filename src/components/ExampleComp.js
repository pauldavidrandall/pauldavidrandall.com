import React, { Component } from 'react';
import ModalContainer from './ModalContainer';

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
            <div id="exampleComp">
                <ModalContainer 
                    hideModal={this.state.hideModal} 
                    title="Example Modal"
                    body="In this reusable Ract Component the Title, Message, and Click Handling are passed to the modal as properties."
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.toggleModal}>Example Modal</button>
            </div>
        )
    }
}

export default ExampleComp;