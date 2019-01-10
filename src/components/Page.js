import React, { Component } from 'react';
import Navbar from './Navbar'
import { Route  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Web from '../pages/Web';
import Photo from '../pages/Photo';
import Contact from '../pages/Contact';
import AlertMessage from '../components/AlertMessage'




class Page extends Component{
    year = new Date().getFullYear();
    render(){
        return(
            <div>
                <header>
                <Navbar />
                </header>
                <main>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/web' component={Web} />
                <Route exact path='/photo' component={Photo} />
                <Route exact path='/contact' component={Contact} />
                <AlertMessage />
                </main>
                <footer className="main-footer"><p>Copyright Paul David Randall 2006-{this.year}</p></footer>
            </div>
        ); 
    }
};

export default Page;
