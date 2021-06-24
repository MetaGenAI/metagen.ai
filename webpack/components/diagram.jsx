import React, { Component } from "react";
import { render } from "react-dom";
import { Tex2SVG, MathJaxProvider } from "react-hook-mathjax";

export class ColoredRect extends Component {
  // state = {
  //   color: null
  // };
  render() {
    const { x, y, width, height, targetUrl } = this.props;
    let texts = this.props.text;
    if (typeof texts === "undefined") {
      texts = "";
    }
    // texts = texts.split(",");
    let shiftY = this.props.shiftY ? this.props.shiftY : 0;
    if (typeof texts === "string") texts = [texts];
    return (
      <a href={targetUrl} target="_blank">
      <g>
        <rect
          {...this.props}
          fill={this.props.color}
          shadowblur={5}
          // onClick={this.handleClick}
        />
        <text
          x={x + width / 2}
          y={y + height / 2 - (10 * (texts.length - 1)) / 2 + shiftY}
          dominantBaseline="middle"
          textAnchor="middle"
          {...this.props.textProps}
        >
          {texts.map((t, i) => (
            <tspan key={i} x={x + width / 2} dy={`${i * 1.2}em`}>
              {t}
            </tspan>
          ))}
        </text>
        {this.props.children}
      </g>
      </a>
    );
  }
}

export class EquationRect extends Component {
  render() {
    const { x, y, width, height } = this.props;
    let eqs = this.props.eq;
    if (typeof eqs === "string") eqs = [eqs];
    let eqShiftY = this.props.eqShiftY ? this.props.eqShiftY : 0;
    return (
      <ColoredRect {...this.props}>
        <foreignObject
          x={x}
          y={y}
          width={width}
          height={height}
          textAlign="center"
        >
          <div
            style={{
              position: "relative",
              top: `${50+eqShiftY}%`,
              transform: "translateY(-50%)",
              textAlign: "center"
            }}
          >
            <Tex2SVG display="display" latex={this.props.eq} />
          </div>
        </foreignObject>
      </ColoredRect>
    );
  }
}

export class Arrow extends Component {
  render() {
    const { x1, y1, x2, y2 } = this.props;
    let { l1, l2 } = this.props;
    let { d1, d2 } = this.props;
    // let l1 = 50;
    // let l2 = 10;
    l1 = typeof l1 === "undefined" ? 100 : l1;
    l2 = typeof l2 === "undefined" ? 100 : l2;
    d1 = typeof d1 === "undefined" ? 0 : d1;
    d2 = typeof d2 === "undefined" ? 0 : d2;
    let t1 = `${x1 + l1} ${y1}`;
    let t2 = `${x2 - l2} ${y2}`;
    if (this.props.o1 === "up") {
      t1 = `${x1 + d1} ${y1 - l1}`;
    } else if (this.props.o1 === "down") {
      t1 = `${x1 + d1} ${y1 + l1}`;
    } else if (this.props.o1 === "right") {
      t1 = `${x1 + l1} ${y1 + d1}`;
    } else if (this.props.o1 === "left") {
      t1 = `${x1 - l1} ${y1 + d1}`;
    }
    if (this.props.o2 === "up") {
      t2 = `${x2 + d2} ${y2 + l2}`;
    } else if (this.props.o2 === "down") {
      t2 = `${x2 + d2} ${y2 - l2}`;
    } else if (this.props.o2 === "right") {
      t2 = `${x2 - l2} ${y2 + d2}`;
    } else if (this.props.o2 === "left") {
      t2 = `${x2 + l2} ${y2 + d2}`;
    }
    return (
      <path
        d={`M ${x1} ${y1} C ${t1} ${t2} ${x2} ${y2}`}
        stroke="black"
        fill="transparent"
        markerEnd="url(#arrowhead)"
        {...this.props.style}
      />
      // <path d="M 37.217 -51.499 C 37.217 -129.795 236.22 -32.577 435.876 -29.967" stroke="black" fill="transparent"/>
    );
  }
}

export class MarkerDefs extends Component {
  render() {
    return (
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
    );
  }
}
