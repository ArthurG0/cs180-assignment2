import React, { useState } from 'react';
import video1 from '../assets/supersonic_1.mp4'
import video2 from '../assets/supersonic_2.mp4'
import video3 from '../assets/supersonic_3.mp4'
import video4 from '../assets/supersonic_4.mp4'
class Video extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        enlargedVideo: null
    }

    this.handleOverlayClick = this.handleOverlayClick.bind(this)
    this.handleVideoClick = this.handleVideoClick.bind(this)

  }

  handleVideoClick(event) {
      console.log(`video was clicked ${event.target.src}`)
      this.setState({enlargedVideo: event.target.src})
  }

  handleOverlayClick() {
      console.log(`Overlay was clicked`)
      this.setState({enlargedVideo : null})
  }


  render() {
    let overLayObjectStyle = {
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
    let enlargedVideoObjectStyle = {
        width: "90vmin",
        opacity: "1",
        zIndex: "5000",
        margin: "auto",
        position: "fixed",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)"
    }

    let wrapperObjectStyle= {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "250px",
        maxWidth: "23%",
        height: "230px",
        margin: "10px 10px 100px 10px"
    }

    let mainDivStyle = {
        display: "flex",
        flexWrap: "wrap"
    }

    let videoStyle = {
        maxHeight: "100%",
        maxWidth: "100%"
    }

    let videoArray = [video1, video2, video3, video4]

    let overLayObject;
    let enlargedVideoObject;

    if(this.state.enlargedVideo){
        enlargedVideoObject = <video
            src = {this.state.enlargedVideo}
            controls = {true}
            style = {enlargedVideoObjectStyle}
        ></video>

        overLayObject = <div
            onClick = {this.handleOverlayClick}  
            style = {overLayObjectStyle}
        ></div>
    }

    return (
      <div>

          <h2>Jets going at the speed of sound!</h2>
          {overLayObject}
          {enlargedVideoObject}
          <div style={mainDivStyle}>
              {
                videoArray.map((video) => 
                    <div style={wrapperObjectStyle}>
                        <video
                            src = {video}
                            controls = {false}
                            style = {videoStyle}
                            onClick = {this.handleVideoClick}
                        ></video>
                    </div>
                )
              }
          </div>

      </div>
    );
  }
}

export default Video;