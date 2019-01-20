import React, { Component } from 'react';

class Images extends Component {
    componentDidMount(){
        var req = require.context(process.env.PUBLIC_URL+"/galleryImages/", false, /.*\.jpg$/);
        req.keys().forEach(function(key){
            req(key);
        });
    }
    render(){
        return(
            this.req.forEach(function(key){
                <img src={req.key} url={{img.node.relativePath}}></img>
            })
        )
    }
}
export default Images;