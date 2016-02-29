import React, {Component} from 'react';

const events = [
  'onClick',
];

export class Sound extends Component {
  _play(data, event) {
    if (data) {
      if (typeof data === 'string' || typeof data === 'object') {
        this.context.soundjs.play(data);
      }
      else if (typeof data === 'function') {
        return data(event, this.context.soundjs);
      }
    }
  }

  _handlers() {
    let options = {};
    for (let eventName of events) {
      if (this.props[eventName]) {
        options[eventName] = this._play.bind(this, this.props[eventName]);
      }
    }
  }

  componentDidMount() {
    this._play(this.props.onMount);
  }

  componentWillUnmount() {
    this._play(this.props.onUnmount);
  }

  render() {
    let handlers = this._handlers();
    return <span {...handlers}>{this.props.children}</span>;
  }
}

Sound.contextTypes = {
  soundjs: React.PropTypes.any,
};
