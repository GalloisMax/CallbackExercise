import React, { Component } from "react";
import { C } from "./C";

export class B extends Component {
  render() {
    const { title, handleClick } = this.props;
    return (
      <div className="comp-b">
        <p>{`I'm the B component ! My title prop is : ${title} `}</p>
        <C
          title={title}
          handleClick={handleClick}
          // ou bien
          // handleClick= {this.props.handleClick}
        />
      </div>
    );
  }
}

export default B;
