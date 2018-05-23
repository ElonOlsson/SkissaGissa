import React, { Component } from 'react';
import { SketchPad } from '../../../../tools';
import IO from 'socket.io-client'


const wsClient = IO(`ws://127.0.0.1:12346`);

export default class SketchExample extends Component
{
  socket = null;

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      drawable: false
    }
  }

  componentDidMount() {
    wsClient.on('addItem', item => this.setState({items: this.state.items.concat([item])}));
  }

  render() {
    const { items, drawable } = this.state;
    return (
      <div>
        <div style={{float:'left', marginRight:20}}>
          <SketchPad 
            width={500}
            height={500}
            items={items}
            drawable={this.state.drawable}
          />
        </div>
      </div>
    );
  }
}
