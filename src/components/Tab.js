import React, { useState } from 'react';


class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beingHovered: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseExit = this.onMouseExit.bind(this)
    this.onIWasPressed = this.onIWasPressed.bind(this)


  }

  onMouseEnter() {
    this.setState({beingHovered: true})
  }

  onMouseExit() {
    this.setState({beingHovered: false})
  }

  onIWasPressed() {
    this.props.onPressed(this.props.id)
  }
  

  render() {
      /*

      li.navBarElement{
        display: inline;
        float: left;
        width: 100px;
        min-width: 60px;
        background-color: #9966ff;
        margin-top :auto;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        border-right: 1px solid black;
    }
    
    li.navBarElement.selected{
        background-color: #6a02d3;
    }

    li.navBarElement.selected:hover{
        background-color: #6a02d3;
    }

    li.navBarElement:hover{
        background-color: #c0a0ff;
    }

      */
     let styleObject = {
       display: "inline" ,
       float: "left" ,
       width: "100px", 
       minWidth: "60px", 
       backgroundColor: "#9966ff", 
       marginTop :"auto", 
       marginBottom: "auto", 
       marginLeft: "auto", 
       marginRight: "auto", 
       borderRight: "1px solid black",
       paddingTop: "14px",
       paddingBottom: "14px",
       textAlign: "center",
       color: "white",
       fontFamily: "Courier"
     }

     let beingSelected = this.props.id === this.props.selectedId
     let beingHovered = this.state.beingHovered;

     if(beingSelected){
       styleObject.backgroundColor = "#6a02d3"
     }
     else if(beingHovered){
       styleObject.backgroundColor = "#c0a0ff"
     }





    return (
      <div 
      style={styleObject}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseExit}
      onClick={this.onIWasPressed}
      >
        {this.props.id}{this.props.id === this.props.selectedId ? " a" : " n a"}{this.state.beingHovered ? " h": " n h"}
      </div>
    );
  }
}

export default Tab;