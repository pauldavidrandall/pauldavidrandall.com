import React, { Component } from 'react';
import './ModalContainer.css'

class ModalContainer extends Component {
    render(){
        const style = this.props.hideModal === true ? {display: 'none'} : { };

        return(
            <div className = "modal-container" style={style}>
                <h1 className = "modal-title">{this.props.title}
                <div className="modal-close" onClick={this.props.toggleModal}>X</div></h1>
                <div className="modal-body">{this.props.body}</div>
            </div>
        )
    }
}

export default ModalContainer;