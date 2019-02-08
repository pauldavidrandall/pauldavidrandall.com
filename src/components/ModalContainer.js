import React, { Component } from 'react';
import './ModalContainer.css'

class ModalContainer extends Component {
  render(){
    const style = this.props.hideModal === true ? {display: 'none'} : { };
    const body = document.getElementsByTagName('body')[0]
    this.props.hideModal === false ? body.className = "modal-open" : body.className = ""
    return(
      <div className = "modal-container" id={this.props.id} style={style}>
        <h1 className = "modal-title item">{this.props.title}
        <span className="modal-close" onClick={this.props.toggleModal}>X</span></h1>
        <div className="modal-body item">{this.props.body}</div>
      </div>
    )
  }
}
export default ModalContainer;