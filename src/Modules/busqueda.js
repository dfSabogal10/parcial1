import React, { Component } from 'react';
import Rainbow from './rainbow'

var peticionAPI= function (value) {
  fetch('/flickr/' + value)
  .then(function(response) {
    if(response.ok)
    {        return response.json();      }
    throw new Error('Network response was not ok.');    })
  this.setState({keyword:value});
}
export class Busqueda extends Component{
  constructor(props){
    super(props);
    this.state={keyword:''};
  }

  render() {
    return (
      <form id="form1">
      <div>
        <input type="text" onChange={ peticionAPI(document.getElementById('form1').value)}></input>
        <Rainbow keyword={this.state.videos}/>

      </div>
      </form>
    );
  }
}


export default Busqueda;
