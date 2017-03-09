import React, { Component } from 'react';
var peticionAPI= function (value) {
  
  this.setState.keyword=value;
}
export class Busqueda extends Component{
  constructor(props){
    super(props);
    this.state={keyword:''};
  }

  render() {
    return (
      <div>
        <input ></input>

      </div>
    );
  }
}


export default Busqueda;
