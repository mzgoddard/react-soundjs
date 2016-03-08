import React, {Children, Component} from 'react';

export class SoundContext extends Component {
  constructor(...args) {
    super(...args);
    this.soundRefCounts = {};
  }

  getChildContext() {
    return {
      soundjs: this.props.soundjs,
      soundjsContext: this,
    };
  }

  _getRefId(sound) {
    if (typeof sound === 'string') {
      return sound;
    }
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
        this.soundRefCounts[id] = 0;
      }
      this.soundRefCounts[id]++;
    });
  }

  unregister(sounds) {
    this._eachSound(sounds, sound => {
      let id = this._getRefId(sound);
      this.soundRefCounts[id]--;
      if (!this.soundRefCounts[id]) {
        this.props.soundjs.removeSound(sound);
      }
    });
  }

  render() {
    return Children.only(this.props.children);
  }
}

SoundContext.propTypes = {
  soundjs: React.PropTypes.func.isRequired,
};

SoundContext.childContextTypes = {
  soundjs: React.PropTypes.any,
  soundjsContext: React.PropTypes.object,
};
