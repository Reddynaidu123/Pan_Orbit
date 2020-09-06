import React, { Component } from 'react'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
  this.x=this.x.bind(this)
    }
    x(event){
  console.log(event.target.files[0])
  console.log(event.target.files)
    }
    render() {
      return (
        <div>
          <h1>Hello {this.props.name}</h1>
          <h2>Start editing me</h2>
          <input type="file" onChange={this.x}/>
        </div>
      )
    }
  }

  export default App;