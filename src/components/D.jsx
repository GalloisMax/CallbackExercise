import React, { Component } from "react";

export class D extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="comp-c">
        <p
        >{`I'm D : My title prop is something C decided to pass me: ${title} `}</p>
        <div
          className="the-btn"
          onClick={() => {
            console.log("Im doin nothin'");
            //What am I supposed to call ?
            this.props.handleClick("test");
          }}
          // le onClick appel la fonction anonyme => la fonction annonyme appel la méthode
          // onClick={() => this.props.handleClick()}
        >
          {" "}
          I'm a clickable div, but, wait, what am I supposed to do?{" "}
        </div>
      </div>
    );
  }
}

export default D;
