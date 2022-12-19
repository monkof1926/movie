import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = () => {

    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');

    const handleInputChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleInputChangePassword = (event) => {
        setPassword(event.target.value);
    }

    //Modal Stuff
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        //fetchLogin();
        }
    );

    return(

        <Form>
            <Form.Group classname ="mb-3" controlID ="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type ="text"
                    name ="username"
                    placeholder ="Enter username"
                    value={username}
                    onChange={handleInputChangeUsername}
                />
                <Form.Text classname ="text-muted">
                    Please enter your email
                </Form.Text>
            </Form.Group>
            <Form.Group classname ="mb-3" controlID ="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type ="password"
                    name ="password"
                    placeholder ="Password"
                    value ={password}
                    onChange={handleInputChangePassword}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;