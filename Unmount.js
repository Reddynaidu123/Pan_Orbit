import React, { Component } from 'react';

export default class Unmount extends Component {
    constructor(props) {
        super(props);
        this.state={
            num: 0
        }
        this.x=this.x.bind(this)
    }
    x(){
this.setState({num:this.state.num + 1});
    }

    
    render() {
        return (
            <div>
               <h1>{this.state.num}</h1> 
               {this.state.num == 0 ? <App/> : null }

                
                <button onClick={this.x}>submit</button>
            </div>
        );
    }
}

class App extends Component {
    componentWillUnmount(){
        console.log("unmounted in willunmount")
        alert("2nd component unmounted")
    }
    render() {
        console.log("unmounted")

        return (
            <div>
                <h1>2nd componet rendered</h1>
            </div>
        );
    }
}

 