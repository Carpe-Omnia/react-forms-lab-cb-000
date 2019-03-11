import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ""
    };
  }
  handleInput = event => {
    this.setState( {
      textInput: event.target.value
    })
    console.log(event.target.value)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleInput(event) } value={this.state.textInput} />
      </div>
    );
  }
}

export default TwitterMessage;
