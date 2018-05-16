import React, { Component } from 'react';
import { SketchPad, TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../../tools';
import IO from 'socket.io-client'

const wsClient = IO(`ws://127.0.0.1:12346`);

export default class GuessExample extends Component
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
      items: []
    }
  }

  componentDidMount() {
    wsClient.on('addItem', item => this.setState({items: this.state.items.concat([item])}));
  }

  render() {
    const { tool, size, color, fill, fillColor, items } = this.state;
    return (
      <div>
        <div style={{float:'left', marginRight:20}}>
          <SketchPad
            width={500}
            height={500}
            animate={true}
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
