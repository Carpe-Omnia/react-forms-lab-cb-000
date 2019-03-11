import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: ""
    };
  }
  handleInput = event => {
    this.setState( {
      textInput: event.target.value
    })
    this.setState({charsLeft: this.props.maxChars - event.target.value.length})

  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleInput(event) } value={this.state.textInput} />

      </div>
      <p> chars remaining: {this.state.charsLeft} </p>
    );
  }
}

export default TwitterMessage;
