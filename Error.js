import React, { Component } from 'react';
import Catch from './catch.js';
import StaticGetError from './SataticGetError.js';
import { Button } from 'react-bootstrap';
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
  


    render() {
 

        return (
            <div>
                <StaticGetError>

                <Catch numbers={this.state.number}/>
                </StaticGetError>

               
            </div>
        )

    }
}

export default Error;
