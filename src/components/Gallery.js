import React, { Component } from 'react';
import './Gallery.css';
import { HashLink as Link } from 'react-router-hash-link';

//const temp images, this will be moved to component will mount and call the server
let images =[];
class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            showLargeImage: false,
            previousImage: "",
            currentImage: "",
            nextImage: ""
        }
    }
    componentWillMount(){
        //get the images from the image folder and fill the images array, then set state.images
        if(images.length === 0){
            const req = require.context(process.env.PUBLIC_URL+"../../public/galleryImages/", false, /.*\.jpg$/);
            req.keys().forEach(function(key, i){
                req(key);
                let image = key;
                let imageArr = image.split("")
                imageArr.splice(0,1)
                image = imageArr.join("")
                images.push({id:"image"+i, path:process.env.PUBLIC_URL+"/galleryImages"+image, caption:"This is an image caption for image "+i})
            });
            //if images array is empty call server for current database of images
            this.setState({images:images})
        }
    }
    componentWillUnmount(){
        images = [];
    }
    componentDidMount(){
        //keydown to listen for escape and right/left arrows for large image control
        document.addEventListener('keydown', (e) => {
            if (this.state.showLargeImage){
            if(e.key === "Escape") {
                let value = this.state.showLargeImage === false ? true : false;
                this.setState({showLargeImage:value})
                let body = document.getElementsByTagName('body')[0]
                value === true ? body.className = "modal-open" : body.className = ""
            }
            if(e.key === "ArrowLeft") {
                this.scrollPrev();
            }
            if(e.key === "ArrowRight") {
                this.scrollNext();
            }}
        })
        // Create each image bucket and append it to "image-container"
        let bucket;
        for (let i = 0; i < this.state.images.length; i++) {
            bucket = document.createElement("div")
            let eID = document.createAttribute('id')
            eID.value = this.state.images[i].id
            bucket.setAttributeNode(eID)
            let cName = document.createAttribute('class')
            cName.value = "bucket"
            bucket.setAttributeNode(cName)
            bucket.setAttribute("style", "background-image: url("+ this.state.images[i].path + ");")
            document.getElementById('bucket-container').appendChild(bucket)
        }
    }
    // if user clicks on a thumbnail set current, previous, and next images
    // show current image in large size
    //if they click the large image close it
    toggleImage = (e) => {
        let cImage;
        const largeImage = document.getElementById("largeImage")
        // const imageCaption = document.getElementById("imageCaption")
        if (e.type === "click") {
            //if a bucket or image control is clicked, set current image, and update large image display
            if (e.target.className === "bucket" || e.target.classname === "galleryControl") {
                cImage = this.setImage(e) //returns correct current image ID
                let result = this.state.images.filter(obj => {
                 return obj.id === cImage //get the correct image path based on current image ID
                 })
                 largeImage.setAttribute("style", "background-image: url("+ result[0].path+ ");")
                //  imageCaption.innerHTML = result[0].caption
             }
             //if bucket or large image is clicked, toggle the large image display
             if (e.target.className === "bucket" || e.target.id === "largeImage"){
                let value = this.state.showLargeImage === false ? true : false;
                this.setState({showLargeImage:value})
                let body = document.getElementsByTagName('body')[0]
                value === true ? body.className = "modal-open" : body.className = ""
                let scrollArrow = document.getElementsByClassName('hashLink')[1]
                value === true ? scrollArrow.style.display = "none" : scrollArrow.style.display = "block"
             }
        }
        else {
            if (e.scroll === "previous"){
                cImage = this.state.previousImage
            }
            else if (e.scroll === "next"){
                cImage = this.state.nextImage
            }
            let result = this.state.images.filter(obj => {
            return obj.id === cImage
            })
            largeImage.setAttribute("style", "background-image: url("+ result[0].path+ ");")
            // imageCaption.innerHTML = result[0].caption
            this.setImage(cImage)
        }
        
    }
    scrollPrev = () => {
        let image = {
            scroll: "previous",
            id: document.getElementById(this.state.nextImage).id
        }
        this.toggleImage(image)
    }
    scrollNext = () => {
        let image = {
            scroll: "next",
            id: document.getElementById(this.state.nextImage).id
        }
        this.toggleImage(image)
    }
    //when a thumbnail is clicked or a gallery set current/prev/next iamges.
    //if a scrollPrev/Next was clicked, it passes the prev/next image id to toggle image, then passed to this function to be set as current image
    setImage = (e) => {
        let image, pImage, nImage;
        if (e.type === "click"){//this is if it was a thumbnail clicked
            image = e.target
        }
        else{//this is if it was a gallery control clicked
            image = document.getElementById(e)
        }
        pImage = image.previousSibling
        nImage = image.nextSibling
        let buckets = document.getElementsByClassName('bucket')
        if (pImage.id === "imageDisplay"){ //if previous sibling wasn't an image, get the last image instead
            pImage = buckets[buckets.length - 1]
        }
        if (nImage === null){//if next image wasn't an image get the first image instead
            nImage = document.getElementsByClassName('bucket')[0]
        }   
        this.setState({previousImage:pImage.id})
        this.setState({currentImage: image.id})
        this.setState({nextImage: nImage.id})
        return image.id
    }
    render(){
        const lBtn = "<";
        const rBtn = ">";
        const style = this.state.showLargeImage === false ? {display: 'none'} : { };
        return(
            <div id="gallery"className="slide inner-container" onClick={this.toggleImage}>
                        <p>click on a thumbnail to view image</p>
                        <div id="bucket-container">
                            {/* imageDisplay shows selected image in larger size with controls to scroll previous or next */}
                            <div id="imageDisplay" style={style}> 
                            <div id="iGleft" className="galleryControl" onClick={this.scrollPrev}><p>{lBtn}</p></div>
                            <div id="largeImage">
                                <p>click edge to scroll</p>
                                <p>click center to close</p>
                                {/* <div id="imageCaption"></div> */}
                            </div> 
                            <div id="iGright" className="galleryControl" onClick={this.scrollNext}><p>{rBtn}</p></div>
                            </div>
                        </div>
                        <Link smooth to="/photo#slide1" className="hashLink"><span className="scrollArrow"></span></Link>
                    </div>
        )
    }
}

export default Gallery;