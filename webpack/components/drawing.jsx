import React, { Component } from "react";
import { render } from "react-dom";
import { Tex2SVG, MathJaxProvider } from "react-hook-mathjax";

export class Petal extends Component {
  // state = {
  //   color: null
  // };
  render() {
    let { x, y, rot, color } = this.props;
    x = typeof x === "undefined" ? 0 : x;
    y = typeof y === "undefined" ? 0 : y;
    color = typeof color === "undefined" ? "transparent" : color;
    console.log(rot);
    return (
      <g transform={"translate(" + x + "," + y + ") rotate(" + rot + ")"}>
        <g transform="translate(0,20)">
          <path
            d="M -10 0 C -20 20, -50 85, -30 90 C -25 95, 25 95, 30 90 C 50 85, 20 20, 10 0"
            stroke={color}
            fill={color}
          />
          <title>{this.props.caption}</title>
          {/* <path d="M -30 90 C -25 95, 25 95, 30 90" stroke="black" fill="red" /> */}
          {/* <path d="M 10 0 C 20 20, 50 85, 30 90" stroke="black" fill="red" /> */}
        </g>
      </g>
    );
  }
}
