import React, { Component } from 'react';
import Navbar from './Navbar'
import { Route  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Web from '../pages/Web';
import Photo from '../pages/Photo';
import Contact from '../pages/Contact';
import AlertMessage from '../components/AlertMessage';
import './Page.css';
import './Colors.css';
import Footer from './Footer';

class Page extends Component{
  render(){
    return(
      <>
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
        <Footer />
      </>
    ); 
  }
};
export default Page;
