import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='navBar'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
              <Nav.Link
                as='button'
                style={{ border: "none", backgroundColor: "rgba(255, 255, 255, 0)"}}>
                <i className="fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;