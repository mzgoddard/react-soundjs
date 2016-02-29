import React, {Component} from 'react';
import testUtils from 'react-addons-test-utils';

import {SoundContext} from '../lib/sound-context';

const renderer = testUtils.createRenderer();

class HasSoundContext extends Component {
  render() {
    return <div></div>;
  }
}

HasSoundContext.contextTypes = {
  soundjs: React.PropTypes.any,
  soundjsContext: React.PropTypes.any,
};

describe('SoundContext', function() {
  it('', function() {
    renderer.render(<SoundContext><HasSoundContext /></SoundContext>);
    let result = renderer.getRenderOutput();
    // renderer.render(result);
    console.log(render.getRenderOutput());
    console.log(result);
    expect(result.context)
    console.log(context);
    console.log(renderer);
    console.log(renderer.getRenderOutput());
  });
});
