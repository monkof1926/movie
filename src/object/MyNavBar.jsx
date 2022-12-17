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
                <Navbar.Brand href = "#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id = "navbarScroll">
                    <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                    >
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Movie">Movie</Nav.Link>
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
                    <NavDropdown title = "SearchType" id = "SearchTypeID">
                        <NavDropdown.Item href="Best Match">Best Match</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Simple Match">Simple Match</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Name Match">Name Match</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Structured Match">Structured Match</NavDropdown.Item>
                    </NavDropdown>
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
        <Outlet />
        </>

    );
}

export default MyNavBar;
