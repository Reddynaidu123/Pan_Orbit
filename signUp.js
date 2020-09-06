import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { auth, generateUserDocument } from './fire_utils' ;

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.submit = this.submit.bind(this)
    }
    onChangeHandler({ target }) {
        this.setState({ [target.name]: target.value });
        console.log("hiii",this.state)
    }
     async submit(event) {
    
         event.preventDefault();
        try {
           const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            console.log("user details", user)
            generateUserDocument(user);
        } catch (error) {
            console.log('Error Signing up with email and password',error);
        }

     

    };
    render() {
        return (
            <div>

                <p>Email :</p>
                <input placeholder="enter your email"  name="email" onChange={this.onChangeHandler}></input><br /><br />


                <p>password :</p>
                <input placeholder="enter your email" name="password" onChange={this.onChangeHandler}></input><br /><br />

                <Button onClick={this.submit}>submit</Button>
            </div>
        );
    }
}

export default signUp;