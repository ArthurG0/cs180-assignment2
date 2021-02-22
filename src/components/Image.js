import React, { useState } from 'react';
import img1 from '../assets/porsche_1.jpg'
import img2 from '../assets/porsche_2.jpg'
import img3 from '../assets/porsche_3.jpg'
import img4 from '../assets/porsche_4.jpg'
import img5 from '../assets/porsche_5.jpeg'
import img6 from '../assets/porsche_6.jpg'
import img7 from '../assets/porsche_7.jpg'
import img8 from '../assets/porsche_8.jpg'
import img9 from '../assets/porsche_9.jpg'
import img10 from '../assets/porsche_10.jpg'
import img11 from '../assets/porsche_11.jpg'
import img12 from '../assets/porsche_12.jpg'
import img13 from '../assets/porsche_13.jpg'
import img14 from '../assets/porsche_14.jpg'
import img15 from '../assets/porsche_15.jpg'
import img16 from '../assets/porsche_16.jpg'
import img17 from '../assets/porsche_17.jpg'
import img18 from '../assets/porsche_18.jpg'
import img19 from '../assets/porsche_19.jpg'
import img20 from '../assets/porsche_20.jpg'
import img21 from '../assets/porsche_21.jpg'
import img22 from '../assets/porsche_22.jpg'
import img23 from '../assets/porsche_23.jpg'
import img24 from '../assets/porsche_24.jpg'
import img25 from '../assets/porsche_25.jpg'
import img26 from '../assets/porsche_26.jpg'



class Image extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        scroll: 0,
        enlargedImage: null
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.returnToTop = this.returnToTop.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.handleOverlayClick = this.handleOverlayClick.bind(this)

  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleImageClick(event) {
      console.log(`standard image clicked ${event.target.src}`)
      this.setState({enlargedImage: event.target.src})
  }

  handleOverlayClick(event) {
      console.log(`overlay clicked`)
      this.setState({enlargedImage: null})
  }
  
  handleScroll(event) {
      let scrollTop = window.scrollY
      this.setState({
          scroll: scrollTop
      });
      console.log(scrollTop)
  }

  returnToTop() {
      console.log("return to top was called")
      window.scroll(0,0)
      this.setState({scroll: 0})
      
  }


  render() {

    let scrollToTopObjectStyle = {
        display: "none",
        position: "fixed", /* Fixed/sticky position */
        bottom: "20px", /* Place the button at the bottom of the page */
        right: "30px", /* Place the button 30px from the right */
        zIndex: "2", /* Make sure it does not overlap */
        border: "none", /* Remove borders */
        outline: "none", /* Remove outline */
        backgroundColor: "rgb(145, 143, 143)", /* Set a background color */
        color: "white", /* Text color */
        cursor: "pointer", /* Add a mouse pointer on hover */
        padding: "15px", /* Some padding */
        borderRadius: "10px", /* Rounded corners */
        fontSize: "18px" /* Increase font size */
    }

    if(this.state.scroll / document.body.offsetHeight > 0.25) scrollToTopObjectStyle.display = "block"
    
    let imagesArray = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9,
        img10, img11, img12, img13, img14, img15, img16, img17, img18,
        img19, img20, img21, img22, img23, img24, img25, img26
    ]

    let wrapperObjectStyle= {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "250px",
        maxWidth: "23%",
        height: "230px",
        margin: "10px 10px 100px 10px"
    }

    let imageObjectStyle = {
        maxWidth: "100%",
        maxHeight: "100%"
    }

    let mainDivStyle = {
        display: "flex",
        flexWrap: "wrap"
    }

    let enlargedImageObjectStyle = {

        /*
        overLayImage.style.width = "90vmin"
                overLayImage.style.opacity = "1"
                overLayImage.style.zIndex = "10000"
                overLayImage.style.margin = "auto"
                overLayImage.style.position = "fixed"
                overLayImage.style.top = "50vh"
                overLayImage.style.left = "50vw"
                overLayImage.style.transform = "translate( -50%, -50% )"
        */
       width: "90vmin",
       opacity: "1",
       zIndex: "5000",
       margin: "auto",
       position: "fixed",
       top: "50vh",
       left: "50vw",
       transform: "translate(-50%, -50%)"

    }
    let overLayObjectStyle = {
        /*
        grayOverlay.style.position = "fixed"
                grayOverlay.style.display = "flex"
                grayOverlay.style.alignItems = "center"
                grayOverlay.style.justifyContent = "center"
                grayOverlay.style.top = "0"
                grayOverlay.style.left = "0"
                grayOverlay.style.width = "100%"
                grayOverlay.style.height = "100%"
                grayOverlay.style.backgroundColor = "#000000"
                grayOverlay.style.opacity = "0"
        */
       position: "fixed",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       top: "0",
       left: "0",
       width: "100%",
       height: "100%",
       backgroundColor: "black",
       opacity: "0"
    }

    let enlargedImageObject;
    let overLayObject;
    if(this.state.enlargedImage){
        enlargedImageObject = 
        <img
            src = {this.state.enlargedImage}
            style = {enlargedImageObjectStyle}
        ></img>
        overLayObject = <div
            onClick = {this.handleOverlayClick}  
            style = {overLayObjectStyle}
        ></div>
    }

    return (
      <div >

          <h2>Porsche 911 through generations: gallery</h2>
          {overLayObject}
          {enlargedImageObject}
          <button
            style={scrollToTopObjectStyle}
            onClick={this.returnToTop}
          >Back To Top</button>
          <div style={mainDivStyle}>
            {
                imagesArray.map((image) => 
                    <div style={wrapperObjectStyle}>
                        <img
                            src={image}
                            style={imageObjectStyle}
                            onClick={this.handleImageClick}
                            
                        ></img>
                    </div>
                )
            }
          </div>
           
           
      </div>
    );
  }
}

export default Image;