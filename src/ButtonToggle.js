import React, { Component } from "react";

export default class ButtonToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showMessage: false,
    };
  }

  toggleMessage = () => {
    this.setState({
      showMessage: !this.state.showMessage,
    });
  };

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.toggleMessage}>
          {this.state.showMessage ? "Hide" : "Show"}
        </button>

        {this.state.showMessage && (
          <p>Some text to show or hide {this.state.message}</p>
        )}
      </div>
    );
  }
}
