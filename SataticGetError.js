import React, { Component } from 'react';

class SataticGetError extends Component {
    constructor(props) {
        super(props);
        this.state={
                hasError: false 
            

        }
    }
       static getDerivedStateFromError(error) {
       alert("error")
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    render() {
        console.log("entered")
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default SataticGetError;