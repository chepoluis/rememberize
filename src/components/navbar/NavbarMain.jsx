import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Navbar } from 'react-bootstrap';
import { userImage } from "../../helpers/userImages";

export const NavbarMain = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rememberize</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Learn</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title={
                <div className="pull-left">
                  <img 
                    className="user-image" 
                    src={userImage(`./user.png`)}
                    alt='Default user'
                  />
                </div>
              } 
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
