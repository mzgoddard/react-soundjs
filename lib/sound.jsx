import React, {Component} from 'react';

const events = {
  mount: 'onMount',
  unmount: 'onUnmount',
  click: 'onClick',
};

export class Sound extends Component {
  constructor(...args) {
    super(...args);

    this._play = this._play.bind(this);
  }

  _play(event) {
    let data = this.props[events[event.type]];
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
    for (let handlerName in this.props) {
      options[handlerName] = this._play;
    }
    return options;
  }

  componentDidMount() {
    this._play({type: 'mount'});
  }

  componentWillUnmount() {
    this._play({type: 'unmount'});
  }

  render() {
    let handlers = this._handlers();
    return <span {...handlers}>{this.props.children}</span>;
  }
}

Sound.contextTypes = {
  soundjs: React.PropTypes.any,
};
