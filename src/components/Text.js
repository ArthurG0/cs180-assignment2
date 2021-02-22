import React, { useState } from 'react';

class Text extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        activeRadioOption : ""
    }

    this.onValueChange = this.onValueChange.bind(this)


  }

  onValueChange(event){
      console.log(`Option ${event.target.value} was selected`)
      this.setState({activeRadioOption : event.target.value})
  }


  render() {

    let ta1 = "jinesh"
    let ta2 = "dennis"
    let ta3 = "wenda"

    let TA1 = "Jinesh Jhonsa"
    let TA2 = "Dennis Zhang"
    let TA3 = "Wenda Xu"

    return (
      <div>
          <form>
            {/* <label for="fname" >First name:</label><br></br>
            <input type="text" id="fname" name="fname"></input><br></br><br></br>
            
            <label for="flname" >Last name:</label><br></br>
            <input type="text" id="lname" name="lname"></input><br></br><br></br>

            <label for="fname" >Choose favorite CS185 TA:</label><br></br><br></br>
            <input type="radio" name="fav_ta" value="jinesh">Jinesh Jhonsa</input><br></br>
            <input type="radio" name="fav_ta" value="dennis">Dennis Zhang</input><br></br>
            <input type="radio" name="fav_ta" value="wenda">Wenda Xu</input><br></br><br></br>

            <input type="submit" value="Done, submit"></input> */}
            <label >First name:</label><br></br>
            <input type="text" id="fname" name="fname"></input><br></br><br></br>

            <label >Last name:</label><br></br>
            <input type="text" id="lname" name="lname"></input><br></br><br></br>

            <label >Choose favorite CS185 TA:</label><br></br><br></br>
            
            <input
              type="radio"
              value = {ta1}
              name="fav_ta"
              checked={this.state.activeRadioOption === ta1}
              onChange={this.onValueChange}
            />
            {TA1}

            <br></br>

            <input
              type="radio"
              value = {ta2}
              name="fav_ta"
              checked={this.state.activeRadioOption === ta2}
              onChange={this.onValueChange}
            />
            {TA2}
            
            <br></br>

            <input
              type="radio"
              value = {ta3}
              name="fav_ta"
              checked={this.state.activeRadioOption === ta3}
              onChange={this.onValueChange}
            />
            {TA3}

            <br></br><br></br>

            <input type="submit" value="Done, submit"></input>

            </form> 
      </div>
    );
  }
}

export default Text;