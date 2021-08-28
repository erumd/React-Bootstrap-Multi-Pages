import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

export const Bootstrapcard=() => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Bootstrapcard;
