import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Home} from "../components/Home";
import {Movie} from "../components/Movie";

const Navgationbar = () => {
    return(
        <>
        <Navbar bg = "light" expand = "lg" className="Navbar">
            <Container fluid>
                <Navbar.Brand href = "#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id = "navbarScroll">
                    <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                    >
                    <Nav.Link href="/" onSelect={<Home/>}>Home</Nav.Link>
                    <Nav.Link href="../Movie " onSelect={<Movie/>}>Movie</Nav.Link>
                    <NavDropdown title = "Link" id = " navbarScrollingDropdown">
                        <NavDropdown.Item href= "#action3">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4">
                            Another Action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type = "search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navgationbar;
