import React, { Component } from 'react';
import './FullPageModal.css'

class FullPageModal extends Component {
    render(){
        const style = this.props.hideModal === true ? {display: 'none'} : { };

        return(
            <div className = "fullpage-modal" style={style}>
                <h1 className = "fullpage-modal-title">{this.props.title}
                <div className="modal-close" onClick={this.props.toggleModal}>X</div></h1>
                <div className="fullpage-modal-body">{this.props.body}</div>
            </div>
        )
    }
}

export default FullPageModal;