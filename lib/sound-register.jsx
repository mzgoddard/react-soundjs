import React, {Component} from 'react';

export class SoundRegister extends Component {
  componentWillMount() {
    let sounds = this.props.sound || this.props.sounds;
    this.context.soundjsContext.register(sounds);
  }

  componentWillUnmount() {
    let sounds = this.props.sound || this.props.sounds;
    let soundjsContext = this.context.soundjsContext;
    let delay = this.props.unregisterDelay || 5000;
    setTimeout(() => {
      soundjsContext.unregister(sounds);
    }, delay);
  }

  render() {
    if (this.props.children) {
      return <span>{this.props.children}</span>;
    }
    return <script></script>;
  }
}

SoundRegister.propTypes = {
  // sound: React.PropTypes.object,
  // sounds: React.PropTypes.object,
};

SoundRegister.contextTypes = {
  soundjsContext: React.PropTypes.object,
};
