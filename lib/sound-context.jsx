import React, {Children, Component} from 'react';

export class SoundContext extends Component {
  constructor(...args) {
    super(...args);
    this.soundRefCounts = {};
    this.unregisterDelay = this.props.unregisterDelay || 5000;
  }

  getChildContext() {
    return {
      soundjs: this.props.soundjs,
      soundjsContext: this,
    };
  }

  _getRefId(sound) {
    if (sound.id) {
      return sound.id;
    }
    return sound.src;
  }

  _eachSound(sounds, cb) {
    if (Array.isArray(sounds)) {
      sounds.forEach(cb);
    }
    else {
      cb(sounds);
    }
  }

  register(sounds) {
    this._eachSound(sounds, sound => {
      let id = this._getRefId(sound);
      if (!this.soundRefCounts[id]) {
        this.props.soundjs.registerSound(sound);
      }
      this.soundRefCounts[id]++;
    });
  }

  unregister(sounds) {
    setTimeout(() => {
      this._eachSound(sounds, sound => {
        let id = this._getRefId(sound);
        this.soundRefCounts[id]--;
        if (!this.soundRefCounts[id]) {
          this.props.soundjs.removeSound(sound);
        }
      });
    }, this.unregisterDelay);
  }

  render() {
    return Children.only(this.props.children);
  }
}

console.log(React.PropTypes)
SoundContext.propTypes = {
  soundjs: React.PropTypes.func.isRequired,
};

SoundContext.childContextTypes = {
  soundjs: React.PropTypes.any,
  soundjsContext: React.PropTypes.object,
};
