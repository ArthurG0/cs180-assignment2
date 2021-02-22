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
        scroll: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.returnToTop = this.returnToTop.bind(this)

  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
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

    return (
      <div >
          Image Compomenent
          <h2>Porsche 911 through generations: gallery</h2>
          <button
            style={scrollToTopObjectStyle}
            onClick={this.returnToTop}
          >Back To Top</button>
          <div style={mainDivStyle}>
            {
                imagesArray.map((image) => 
                    <div style={wrapperObjectStyle}>
                        <img src={image} style={imageObjectStyle}></img>
                    </div>
                )
            }
          </div>
           
           
      </div>
    );
  }
}

export default Image;