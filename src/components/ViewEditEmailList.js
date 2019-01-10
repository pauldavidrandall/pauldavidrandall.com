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
        if(this.state.hideModal === true) this.getEmailList();
    }
    //Fetch the current email list and pass it to buildTable()4
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
                this.toggleModal();
            }
        })
        .catch((err)=>console.log(err))
};
    componentDidUpdate(){
    }
    render(){
        return(
            <div id="viewEditEmailList">
                <ModalContainer 
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
                <button onClick={this.state.hideModal === true ? this.getEmailList : this.toggleModal}>View/Edit Email List</button>
            </div>
        )
    }
}
export default ViewEditEmailList;