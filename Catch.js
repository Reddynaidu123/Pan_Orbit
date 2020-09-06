import React, { Component } from 'react';

class Catch extends Component {
    
constructor(props) {
    super(props);
    this.state={
        name:"kalyan"
    }

}
  

    render() {
        console.log("hiiiii",this.props.numbers)

        if(this.props.numbers == 0){
            throw new Error("he is not a hero !")
        }
        
        return 
            this.props.numbers
             
            
        
    }
}

export default Catch;