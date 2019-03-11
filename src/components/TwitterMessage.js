import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  handleInput = event => {
    console.log(event.target.value)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
