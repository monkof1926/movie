import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function loginForm(){
    return(
        <Form>
            {/Form til indførsel af email/}
            <Form.Group classname ="mb-3" controlID ="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type ="email" placeholder ="Enter email"/>
                <Form.Text classname ="text-muted">
                    Please enter your email
                </Form.Text>
            </Form.Group>
                
            {/Form til indførsel af password/}
            <Form.Group classname ="mb-3" controlID ="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type ="password" placeholder ="Password"/>
                <Form.Text classname ="text-muted">
                    Please enter your correct password
                </Form.Text>
            </Form.Group>
        </Form>
    )
}