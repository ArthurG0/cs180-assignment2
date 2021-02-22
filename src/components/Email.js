import React, { useState } from 'react';

class Email extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      emailWellFormedResponse: null
    }

    this.submitButtonClicked = this.submitButtonClicked.bind(this)

  }

  submitButtonClicked() {
    console.log(`Submit button was clicked`)
    let text = document.getElementById('emailinput').value.toString()
    let emailMalformed = false;

    console.log('text says ', text)

    if(text.indexOf('@') < 0)  emailMalformed = true;
    else if(text.length < 4 ) emailMalformed = true;
    else if(text.substring(text.length - 1 - 3) != ".edu" && text.substring(text.length - 1 - 3) != ".com") emailMalformed = true;

    if(emailMalformed) this.setState({emailWellFormedResponse: "Invalid email address."})
    else this.setState({emailWellFormedResponse: "Email successfully recorded"})

  }


  render() {

    let responseObjectStyle = {
      opacity: "0"
    }

    if(this.state.emailWellFormedResponse) responseObjectStyle.opacity = "1"

    return (
      <div>

        <h4>Please enter your email:</h4>
        <input type="text" id="emailinput" name="email"></input>
        <p
          id="responseToValidation"
          style={responseObjectStyle}
        >{this.state.emailWellFormedResponse ? this.state.emailWellFormedResponse : "Default Value"}</p>
        <br></br>
        <button onClick={this.submitButtonClicked}>Validate Email</button>
      </div>
    );
  }
}

export default Email;