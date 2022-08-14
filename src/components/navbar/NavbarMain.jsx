import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from 'react-bootstrap';

export const NavbarMain = () => {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" className="color-navbar">
          <Container>
            <Navbar.Brand><strong>Rememberize</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/game">Play</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
};
