import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";

const MyNavBar = () => {
    return(
        <>
        <Navbar bg = "light" expand = "lg" className="Navbar">
            <Container fluid>
            <Navbar.Brand href="/Home" style={{ background: 'linear-gradient(to right, orange, yellow)', border: '2px solid black', fontWeight: 'bold', textAlign: 'center' }}>Movie Database</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id = "navbarScroll">
                    <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                    >
                    <Nav.Link href="/SearchView">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </>

    );
}

export default MyNavBar;
