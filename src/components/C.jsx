import React, { Component } from "react";
import { D } from "./D";

export class C extends Component {
  render() {
    const { title, handleClick } = this.props;
    return (
      <div className="comp-c">
        <p
        >{`I'm C : My title prop is the same as my parent (B)! So : ${title} `}</p>
        <D handleClick={handleClick}
          // ou bien
        // handleClick= {this.props.handleClick}
         />
      </div>
    );
  }
}

export default C;
