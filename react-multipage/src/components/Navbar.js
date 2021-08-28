import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color:#222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }

`;

export const Navigation = () => (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
            <Navbar.Brand href="#home">Bootstrap</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
    </Container>
  </Navbar>

    </div>


) 

export default Navigation