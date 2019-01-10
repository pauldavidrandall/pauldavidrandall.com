import React, { Component } from 'react';
import { alertMessage } from './AlertMessage';
import './EmailTable.css';

class EmailTable extends Component {
    //dynamicly build email list table
    buildTable = (data) => {
        const tbl = document.getElementById('currentEmailList');
        tbl.innerHTML = "";
        for(var i = 0; i < data.length; i++){
            //iterate through each document
            let email = data[i].email;
            let joinDate = data[i].joinDate.split("T")[0];
            let id = data[i]._id;
            // create row
            const tr = tbl.insertRow();
            //create first td
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(email));
            //create second td
            td = tr.insertCell();
            td.appendChild(document.createTextNode(joinDate));
            //create remove button
            td = tr.insertCell();
            td.id = id;
            td.className = "removeEmail";
            td.appendChild(document.createTextNode("X"))
            }
            document.getElementById("emailTable").addEventListener('click', this.handleEmailList);
    }
    //Deletes Email if X is clicked, and updates email list view
    handleEmailList = (e) => {
        if (e.target.className !== 'removeEmail') return;
        let email = e.target.previousSibling.previousSibling.innerHTML;
        let id = e.target.id;
        fetch('emailList/'+id+'/delete', { 
            method: 'delete',
            body: JSON.stringify(
                {id: id,
                email: email})
        })
            .then((res) => res.text())
            .then(text => {
                this.props.refreshEmailList();
                alertMessage(text)
            })
            .catch((err)=>console.log(err))
    }
    componentDidUpdate(){
        if (!this.props.modalStatus)this.buildTable(this.props.data)
    }
    render(){
        return (
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
        )
    }
}
export default EmailTable;