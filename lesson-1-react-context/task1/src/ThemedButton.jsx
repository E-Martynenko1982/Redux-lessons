import React, { Component } from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends Component {


  render() {

    return (
      <div>
        <button {...this.props}
          className='btn'
          style={{
            backgroundColor: this.context.background,
            color: this.context.fontColor,
          }}
        ></button>
      </div>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;