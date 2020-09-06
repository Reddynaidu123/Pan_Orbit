import React, { Component } from 'react';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            number: 0,
            hasError : false
        }
        this.x=this.x.bind(this)
        this.y=this.y.bind(this)
    }
    y(){
        return (
            <div>
                <h1>hiiiiiii</h1>
                <div style={{marginLeft : "20px"}}>
                {this.state.number}<br/><br/>
                </div>
                <button onClick={this.x}>submit</button>
            </div>
        )
    }
    x(){
        this.setState({number: this.state.number + 1},()=>{
            this.componentDidMount()
        });
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("prev",prevState)
        return(
            null
        )
    }
    componentDidMount(){
        console.log("didmount was called")
        // this.setState({number : 0});

    }
    componentDidUpdate(){
        console.log("didupdate was called")
    
    }
    // static getDerivedStateFromError(error){
    
    //         return {
    //             hasError : true
    //         }
       
    // }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.number === this.state.number){
            return false;
        }else{
            return true;
        }
    }
    render() {
        console.log("render")
        return(
            <div>
            {this.y()}

            </div>

        );
    
    }
}

export default App1;