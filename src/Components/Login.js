import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Login extends Component {

    //------------------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
            Token: ''
        }
    }


    //------------------------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <Container>
                <Form className="standout">
                    <h1>Please Log In</h1>
                    <FormGroup>
                        <Label>Email Address</Label>
                        <Input type="email" name="emailAddy" id="emailAddy" placeholder="you@someplace.com"></Input> 
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="loginPw" id="loginPw" placeholder="Password"></Input>
                    </FormGroup>
                    <Button type="Submit" value="Submit">Submit</Button>
                </Form>
            </Container>
        );

    }
}

export default Login;