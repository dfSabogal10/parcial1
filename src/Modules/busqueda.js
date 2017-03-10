import React, { Component } from 'react';
import Rainbow from './rainbow'
var XMLParser=require('react-xml-parser')


export default class Busqueda extends Component{
  constructor(props){
    super(props);
    this.state={
      imagenes:'',
    };
    this.colors=["red","orange", "yellow", "green", "blue","indigo", "violet" ];
  }

  peticionAPI (value, color, callback) {
    fetch('/flickr/' + value+' '+color)
    .then(function(response) {
      if(response.ok)
     {

       console.log(response.data);
        return response.json();
      }
      throw new Error('Network response was not ok.');    })
      .then(function(data){
        console.log("Gotit!");
        console.log(data.photos);
        callback(data);    })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);    });


  }
  render() {
    return (

      <div>
        <input type="text" onChange={
          (event) =>
          {
          for (var color in this.colors) {
            if (this.colors.hasOwnProperty(color)) {
              this.peticionAPI(event.target.value,color, (images)=>this.setState({imagenes:images}));
            }
          };
        }
        } class="form-control"></input>
        <Rainbow imagenes={this.state.imagenes}/>
      </div>
    );
  }
}
