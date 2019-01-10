import React, { Component } from 'react';
import './SimpleSiteExample.css';

class SimpleSiteExample extends Component {
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
            <div id="simpleSiteExample">
                <header>
                    <nav>
                        <ul>
                            <li>Logo</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <h2>Welcome to our Site</h2>
                    <p>Thank you for visting our company on the web. To learn more about us click on about.
                    Contact us through our contact page!</p></main>
                <footer>Copyright Logo 2018</footer>
            </div>
        )
    }
}

export default SimpleSiteExample;