import React, { Component } from "react";
import { B } from "./B";

export class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertText: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /**
   * This is the method which has to be called from the button's click event on component D
   */
  handleClick = text => {
    alert(`I'm the A component, and i was asked to say : ${text}`);
    this.setState({
      alertText: text
    });
  };

  render() {
    const { alertText } = this.state;
    return (
      <div className="comp-a">
        <p>{`I'm the A component ! Alert text => ${alertText}`}</p>
        <B
          title={"Bah bravo Niels super pour l'appareil photo !"}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default A;
