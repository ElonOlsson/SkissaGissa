import React, { Component } from 'react';
import { SketchPad, TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../../../tools';
import IO from 'socket.io-client'
import store from "./../../../store";
import Timer from "./SketchExample/Timer";
import GetDbWordArea from './SketchExample/GetDbWordArea'
//import timerActions from 

const wsClient = IO(`ws://127.0.0.1:12346`);

export default class SketchExample extends Component
{
  socket = null;

  constructor(props) {
    super(props);

    this.state = {
      tool:TOOL_PENCIL,
      size: 2,
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: [],
    }
  }

  render() {
    const { tool, size, color, fill, fillColor, items } = this.state;
    return (
      <div>
        <div class="column">
          <div className="tools" class="btnGroup">
            <button
              style={tool == TOOL_LINE ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_LINE  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_LINE})}
            >Line</button>
            <button
              style={tool == TOOL_PENCIL ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_PENCIL  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_PENCIL})}
            >Pencil</button>
            <button
              style={tool == TOOL_ELLIPSE ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_ELLIPSE  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_ELLIPSE})}
            >Ellipse</button>
            <button
              style={tool == TOOL_RECTANGLE ? {fontWeight:'bold'} : undefined}
              className={tool == TOOL_RECTANGLE  ? 'item-active' : 'item'}
              onClick={() => this.setState({tool:TOOL_RECTANGLE})}
            >Rectangle</button>
          </div>
          <div className="options">
            <label htmlFor="">size: </label>
            <input min="1" max="20" type="range" value={size} onChange={(e) => this.setState({size: parseInt(e.target.value)})} />
          </div>
          <div className="options">
            <label htmlFor="">color: </label>
            <input type="color" value={color} onChange={(e) => this.setState({color: e.target.value})} />
          </div>
          {(this.state.tool == TOOL_ELLIPSE || this.state.tool == TOOL_RECTANGLE) ?
            <div>
              <label htmlFor="">fill in:</label>
              <input type="checkbox" value={fill} onChange={(e) => this.setState({fill: e.target.checked})} />
              {fill ? <span>
                  <label htmlFor="">with color:</label>
                  <input type="color" value={fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />
                </span> : ''}
            </div> : ''}

          <div class="toBottom"> 
            <GetDbWordArea/>
            <Timer updateInterval = {33}/>
          </div>
        </div>

        <div class="column">
          <SketchPad
             id="canvasSketch"
             width={400}
             height={400}
             animate={false}
             size={size}
             color={color}
             fillColor={fill ? fillColor : ''}
             items={items}
             tool={tool}
             onCompleteItem={(i) => wsClient.emit('addItem', i)}
           />
         </div>
      </div>
    );
  }
}
