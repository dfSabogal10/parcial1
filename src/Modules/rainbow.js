import React, { Component } from 'react';
var imageneshtml='';
export default class Rainbow extends Component{
  constructor(props){
    super(props);
    this.state={imagenes:this.props.imagenes}

    for (var imagen in this.state.imagenes) {
      if (this.state.imagenes.hasOwnProperty(imagen)) {
        imageneshtml=imageneshtml + "<img src="+imagen+"/>";
      }
    }
  }


  render() {
    return (
      <div>
        <h2> your rainbow</h2>
        {imageneshtml}
      </div>
    );
  }
}
