import React, { Component } from 'react';

export class Rainbow extends Component{
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        {this.props.image}
      </div>
    );
  }
}

export default Rainbow;
