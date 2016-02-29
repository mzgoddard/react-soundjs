import React, {Component} from 'react';
import {render} from 'react-dom';
import update from 'react-addons-update';

import {Sound as SoundJS} from 'soundjs';

import {SoundContext, SoundRegister, Sound} from 'react-soundjs';

import c4 from './c4.wav';
import g4 from './g4.wav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    this.setState(update(this.state, {
      items: {$push: [{name: 'Item'}]},
    }));
  }

  removeItem(event) {
    let index = event.currentTarget.dataset.index;
    this.setState(update(this.state, {
      items: {$splice: [[index, 1]]},
    }))
  }

  render() {
    return (<div>
      <h1>react-soundjs Example</h1>
      <div onClick={this.addItem}>Add Item</div>
      <List items={this.state.items} removeItem={this.removeItem} />
    </div>);
  }
}

function List(props) {
  return (<div>
    <SoundRegister sounds={[c4, g4]} />
    {props.items.map((item, index) => (
      <div key={index} onClick={props.removeItem} dataIndex={index}>
        <Sound onMount={c4} onUnmount={g4} />
        [x] {item.name}
      </div>
    ))}
  </div>);
}

render(
  <SoundContext soundjs={SoundJS}><App /></SoundContext>,
  document.getElementById('root')
);
