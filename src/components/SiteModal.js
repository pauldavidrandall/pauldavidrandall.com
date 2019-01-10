import React, { Component } from 'react';
import FullPageModal from './FullPageModal';

class SiteModal extends Component {
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
            <div id="siteModal">
                <FullPageModal
                    hideModal={this.state.hideModal} 
                    title={this.props.title}
                    body={this.props.site}
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.toggleModal}>{this.props.title}</button>
            </div>
        )
    }
}

export default SiteModal;