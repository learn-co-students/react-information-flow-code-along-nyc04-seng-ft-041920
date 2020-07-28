import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div
        onClick={ () => this.props.handleColorChange(getRandomColor())}
        // in this particular situation I want to change state on click
        // so onclick I want to use that function I passed down
      className="child"
      style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
