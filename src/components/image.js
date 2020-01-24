import React, { Component } from 'react';
import { pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const cImage = (props) => {

  const styles = {
    rubberBand: {
      animation: 'x 2s',
      animationName: Radium.keyframes(pulse, 'pulse'),
      position: 'absolute',
      top: props.top + 'px',
      left: props.left + 'px'
    }
  }

  return(
    <StyleRoot>
      <img className="animated pulse "
        {...props.photo}
        style={styles.rubberBand}
      />
    </StyleRoot>
  );
}

export default cImage;
