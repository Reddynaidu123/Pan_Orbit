import React from 'react';
import Button from 'react-bootstrap/Button';

import {auth} from 'firebase-utils';


class signin extends Component {
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
    
    
    render() {
        return (
            <div>
                <input></input>
            </div>
        );
    }
}

export default signin;

    const handleSignin = (event) => {
        event.preventDefault();
        console.log(email, pass);
        auth.signInWithEmailAndPassword(email, pass)
            .then((val) => console.log("res",val))
            .catch((error) => {
                setError('Error signing in with password and email!');
                console.error(
                    'Error signing in with password and email',
                    error
                );
            });
    };
    render() {
        return (
            <div>
                <Button>sign in</Button>
            </div>
        );
    }


export default signin;