import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../images/logo2.png'

const Header = () => {
    return (
        <Navbar bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img width={200} src={logo2} alt="" /></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#signup">SignUp</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;