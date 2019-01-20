import React, { Component } from 'react';
import ModalContainer from './ModalContainer';
import { alertMessage } from './AlertMessage'
import EmailTable from './EmailTable';

class ViewEditEmailList extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideModal: true,
            data: []
        };
    }
    toggleModal = () => {
        let value = this.state.hideModal === true ? false : true;
        this.setState({hideModal:value})
        // if(this.state.hideModal === true) this.getEmailList();
    }
    handleEsc = (event) => {
        if(event.key === "Escape") {
            if (this.state.hideModal === false) this.toggleModal();
        }
      }
    componentDidMount(){
        document.addEventListener("keydown", this.handleEsc, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleEsc, false);
    }
    //Fetch the current email list and if not empty pass it to buildTable()
    getEmailList = () => {
        fetch('/emailList/getList')
        .then((res) => res.json())
        .then(data => {
            // Check to see if email list is empty
            if (data.length === 0){
                let message = {style:"caution", title:"Email List", body:"The email list is currently empty"}
                alertMessage(JSON.stringify(message));
                if(!this.state.hideModal)this.toggleModal();
                return;
            } //if it isn't empty, build a table and show it
            else{
                this.setState({data: data})
                // this.toggleModal();
            }
        })
        .catch((err)=>console.log(err))
    };
    openEmailList = () => {
        this.getEmailList();
        this.toggleModal();
    }
    render(){
        return(
            <>
                <ModalContainer id={this.props.id}
                    hideModal={this.state.hideModal} 
                    title = "View / Edit My Mailing List"
                    body = { <EmailTable 
                            modalStatus={this.state.hideModal} 
                            data={this.state.data}
                            refreshEmailList={this.getEmailList}
                            closeWhenEmpty={this.toggleModal} 
                            />}
                    toggleModal = {this.toggleModal} 
                />
                <button onClick={this.state.hideModal === true ? this.openEmailList: this.toggleModal}>View/Edit Email List</button>
            </>
        )
    }
}
export default ViewEditEmailList;