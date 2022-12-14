import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartSideBar from './CartSideBar';

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='navBar'>
      <Navbar sticky='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
              <Nav.Link
                onClick={handleShow}
                as='button'
                style={{ border: "none", backgroundColor: "rgba(255, 255, 255, 0)" }}>
                <i className="fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartSideBar show={show} handleClose={handleClose}/>
    </div>
  );
};

export default NavBar;