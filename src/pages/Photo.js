import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Photo.css';
import Gallery from '../components/Gallery';


class Photo extends Component{
  componentDidMount(){
    this.toTop();
  }
  toTop = () => {
      window.scrollTo(0, 0);
  }
    render(){
        return(
            <section  id="photo" className="container">
                <div className="inner-container">
                    <div id="slide1"className="slide">
                        <h1 className="accent heading">Photo...</h1>
                        <p>I love photography. From cutting edge digital techniques to historical chemical processes.
                        I create mostly for myself these days but am always open to collaborative projects,
                        unique ideas, and helping others capture their vision. 
                        </p>
                        <p>If your company is in need of business portraits or product photography,  
                        I can include photographic services as part of your web development package.</p>
                        <Link smooth to="/photo#gallery" className="hashLink">scroll<span className="scrollArrow"></span></Link>
                    </div>
                </div>
                <Gallery />
            </section>
        );
    }
}
export default Photo;