console.log("Hello, world!")

import React, { Component } from "react";
import { render } from "react-dom";
import { Tex2SVG, MathJaxProvider } from "react-hook-mathjax";
import { ColoredRect, EquationRect, Arrow, MarkerDefs } from "./components/diagram.jsx";
import { Petal } from "./components/drawing.jsx";


class TransflowerLogo extends Component {
  render() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 240 240">
          <MarkerDefs />
          <g transform="translate(120,120)">
            <Petal rot="0" color="#FF0018" caption="movement" />
            <Petal rot="60" color="#FFA52C" caption="hearing" />
            <Petal rot="120" color="#FFFF41" caption="speech (soon)" />
            <Petal rot="180" color="#008018" caption="language (soon)" />
            <Petal rot="240" color="#0000F9" caption="vision (soon)" />
            <Petal rot="300" color="#86007D" caption="touch (soon)" />
          </g>
        </svg>
    );
  }
}

class TransflowerArchitecture extends Component {
  render() {
    const mathJaxOptions = {
      svg: {
        scale: 1, // global scaling factor for all expressions
        minScale: 0.5, // smallest scaling factor to use
        mtextInheritFont: false, // true to make mtext elements use surrounding font
        merrorInheritFont: true, // true to make merror text use surrounding font
        mathmlSpacing: false, // true for MathML spacing rules, false for TeX rules
        skipAttributes: {}, // RFDa and other attributes NOT to copy to the output
        exFactor: 0.5, // default size of ex in em units
        displayAlign: "center", // default for indentalign when set to 'auto'
        displayIndent: "0", // default for indentshift when set to 'auto'
        fontCache: "local", // or 'global' or 'none'
        localID: null, // ID to use for local font cache (for single equation processing)
        internalSpeechTitles: true, // insert <title> tags with speech content
        titleID: 0 // initial id number to use for aria-labeledby titles
      }
    };
    const baseUrl="https://github.com/guillefix/mt-lightning/blob/main/";
    return (
      <MathJaxProvider options={mathJaxOptions}>
        {/* <svg width={window.innerWidth} height={window.innerHeight}> */}
        <svg width="100%" height={400} viewBox="0 0 1000 500">
          <MarkerDefs />
          <g transform="translate(0,10)">
            <g transform="translate(10,200)">
            <EquationRect
                x={0}
                y={110}
                width={150}
                height={50}
                text={"Motion context"}
                shiftY={-7}
                eqShiftY={17}
                eq="x_{i-k_x},...,x_{i-1}"
                color="#bfc6ff"
                targetUrl={baseUrl+"models/transflower_model.py#L177"}
              />
            <EquationRect
                x={170}
                y={110}
                width={250}
                height={50}
                text={"Audio context"}
                shiftY={-7}
                eqShiftY={17}
                eq="m_{i-k_m},...,m_{i+l_m}"
                color="#bfc6ff"
                targetUrl={baseUrl+"models/transflower_model.py#L177"}
              />
              <ColoredRect
                x={0}
                y={60}
                width={150}
                height={40}
                text="Motion encoder"
                color="#a5e872"
                targetUrl={baseUrl+"models/transflower_model.py#L31"}
              />
              <ColoredRect
                x={170}
                y={60}
                width={250}
                height={40}
                text="Audio Encoder"
                color="#a5e872"
                targetUrl={baseUrl+"models/transflower_model.py#L31"}
              />
              <ColoredRect
                x={0}
                y={10}
                width={420}
                height={40}
                text="Cross-modal transformer"
                color="#a5e872"
                targetUrl={baseUrl+"models/transflower_model.py#L45"}
              />
              <EquationRect
                x={0}
                y={-40}
                width={100}
                height={40}
                color="#f7abeb"
                eq="\mathbf{h}"
                targetUrl={baseUrl+"models/transflower_model.py#L211"}
              />
              <Arrow
                x1={50}
                y1={-50}
                x2={435}
                y2={-30}
                o1="up"
                o2="right"
                style={{ strokeWidth: 1.5 }}
              />
            </g>
            <g transform="translate(470,100)">
            <ColoredRect
                x={0}
                y={0}
                width={100}
                height={210}
                text={["Normalizing", "Flow"]}
                color="#a5e872"
                targetUrl={baseUrl+"models/transflower_model.py#L68"}
              />>
              <EquationRect
                x={0}
                y={220}
                width={100}
                height={40}
                color="#ababab"
                eq="z\sim \mathcal{N}(0,1)"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L93"}
              />
            <EquationRect
                x={0}
                y={-60}
                width={100}
                height={50}
                text={"Output"}
                shiftY={-7}
                eqShiftY={17}
                eq="x_{i},...,x_{i+N}"
                color="#bfc6ff"
                targetUrl={baseUrl+"models/transflower_model.py#L167"}
              />
            </g>
            <g transform="translate(600,130)">
              <line x1="-30" y1="60" x2="0" y2="10" stroke="black" />
              <line x1="-30" y1="100" x2="0" y2="150" stroke="black" />
              <ColoredRect
                x={0}
                y={110}
                width={100}
                height={40}
                text={"BatchNorm"}
                color="#a5e872"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L159"}
              />
              <ColoredRect
                x={0}
                y={60}
                width={100}
                height={40}
                text={"Inv 1x1 Conv"}
                color="#a5e872"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L168"}
              />
              <ColoredRect
                x={0}
                y={10}
                width={100}
                height={40}
                text={["Affine coupling", "layer"]}
                textProps={{ fontSize: "0.8em" }}
                color="#a5e872"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L169"}
              />>
            </g>
            <g transform="translate(740,100)">
              {/* encompasing rectangle */}
              <ColoredRect
                x={-10}
                y={-20}
                width={230}
                height={280}
                color="rgba(0,0,0,0)"
                strokeWidth="1px"
                stroke="black"
              />
              <line x1="-40" y1="40" x2="-10" y2="-20" stroke="black" />
              <line x1="-40" y1="80" x2="-10" y2="260" stroke="black" />
              <EquationRect
                x={55}
                y={210}
                width={100}
                height={40}
                eq="z_i"
                color="#ababab"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L266"}
              />
              <EquationRect
                x={0}
                y={160}
                width={100}
                height={20}
                eq="z_i'"
                color="#ababab"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L266"}
              />
              <ColoredRect
                x={55}
                y={185}
                width={100}
                height={20}
                text="Split"
                color="rgba(0,0,0,0)"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L266"}
              />
              <EquationRect
                x={110}
                y={160}
                width={100}
                height={20}
                eq="z_i''"
                color="#ababab"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L266"}
              />
              <ColoredRect
                x={0}
                y={135}
                width={100}
                height={20}
                text="Concat"
                color="rgba(0,0,0,0)"
                targetUrl={baseUrl+"models/flowplusplus/coupling.py#L45"}
              />
              <EquationRect
                x={0}
                y={110}
                width={100}
                height={20}
                eq="z_i'"
                color="#ababab"
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L266"}
              />
              <EquationRect
                x={0}
                y={90}
                width={100}
                height={40}
                eq="\mathbf{h}"
                color="#f7abeb"
                targetUrl={baseUrl+"models/flowplusplus/coupling.py#L45"}
              />
              <EquationRect
                x={0}
                y={70}
                width={100}
                height={20}
                eq="z_i'"
                color="#ababab"
                targetUrl={baseUrl+"models/flowplusplus/coupling.py#L45"}
              />
              <ColoredRect
                x={0}
                y={20}
                width={100}
                height={40}
                text={["Coupling", "Transformer"]}
                color="#a5e872"
                textProps={{ fontSize: "0.8em" }}
                targetUrl={baseUrl+"models/flowplusplus/coupling.py#L27"}
              />>
              <ColoredRect
                x={0}
                y={-10}
                width={200}
                height={20}
                text="Affine coupling"
                color="#a5e872"
                textProps={{ fontSize: "0.8em" }}
                targetUrl={baseUrl+"models/flowplusplus/flowplusplus.py#L200"}
              />
              <Arrow x1={160} y1={150} x2={160} y2={25} o1="up" o2="up" />
            </g>
          </g>
        </svg>
      </MathJaxProvider>
    );
  }
}

render(<TransflowerArchitecture />, document.getElementById("transflower-visualization"));
render(<TransflowerLogo />, document.getElementById("transflower-logo"));
