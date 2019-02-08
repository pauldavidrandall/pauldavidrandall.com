import React, { Component } from 'react';
import { alertMessage } from './AlertMessage';
import './EmailTable.css';
import ConfirmMessage, { confirmMessage } from './ConfirmMessage';

class EmailTable extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", id: ""}
  }
  //dynamicly build email list table
  buildTable = (data) => {
    const tbl = document.getElementById('currentEmailList');
    tbl.innerHTML = "";
    for(var i = 0; i < data.length; i++){
      //iterate through each document
      let email = data[i].email;
      let joinDate = data[i].joinDate.split("T")[0];
      let jDA = joinDate.split("-");
      joinDate = jDA[1]+"/"+jDA[2]+"/"+jDA[0]
      let id = data[i]._id;
      // create row
      const tr = tbl.insertRow();
      //create first td
      let td = tr.insertCell();
      td.appendChild(document.createTextNode(email));
      //create second td
      td = tr.insertCell();
      td.appendChild(document.createTextNode("Joined: " +joinDate));
      //create remove button
      td = tr.insertCell();
      td.id = id;
      td.className = "removeEmail";
      td.appendChild(document.createTextNode("X remove"))
      }
    document.getElementById("emailTable").addEventListener('click', this.handleEmailList);
  }
  //If delete is cancled close confirmation message
  handleCancel = () => {
    document.getElementById('confirmMessage').style.display='none'
  }
  //If delete is confirmed delete the email from db and refresh the email list view
  handleConfirm = (message) => { 
    document.getElementById('confirmMessage').style.display='none'
    let header = new Headers({
      'Access-Control-Allow-Origin':'https://www.pauldavidrandall.com'
    });
    fetch('https://api.pauldavidrandall.com/emailList/'+this.state.id+'/delete', { 
      method: 'delete',
      mode: 'cors',
      headers: {'Content-Type':'application/json', header},
      body: JSON.stringify(
        {id: this.state.id,
        email: this.state.email})
    })
    .then((res) => res.text())
    .then(text => {
      alertMessage(text)
      this.props.refreshEmailList();
    })
    .catch((err)=>console.log(err))
  }
  //if X is clicked open confirmation message to confirm, and updates email list view if delete confirmed
  handleEmailList = (e) => {
    if (e.target.className !== 'removeEmail') return;
    this.setState({email: e.target.previousSibling.previousSibling.innerHTML, id: e.target.id})
    const message = {title: "Delete Email?", style: "warning", message: "Are you sure you want to remove <strong>" + this.state.email + "</strong> from the email list?"}
    confirmMessage(message);
  }
  componentDidUpdate(){
    if (!this.props.modalStatus)this.buildTable(this.props.data)
  }
  render(){
    return (
      <>
        <table id="emailTable">
          <thead>
            <tr>
            <th>Email</th>
            <th>Join Date</th>
            <th>Remove</th>
            </tr>
          </thead>
          <tbody id="currentEmailList"></tbody>
        </table>
        <ConfirmMessage handleCancel={this.handleCancel} handleConfirm={this.handleConfirm}/>
      </>
    )
  }
}
export default EmailTable;