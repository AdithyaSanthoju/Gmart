import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DmartNavbar({ cart, toggleCart }) {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#" className='logo'>GROCERY</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> 
          
          <Nav.Link href="/">Ready to Cook</Nav.Link>
          <Nav.Link href="/">Home Appliances</Nav.Link>
          <Nav.Link href="/">Cookware</Nav.Link>
          <Nav.Link href="/">Serveware</Nav.Link>
        </Nav>
        <Form className="d-flex mx-auto">
          <FormControl
            type="search"
            placeholder="Search for items..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className='btn-1'>Search</Button>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/login">
            <i className="bi bi-person"></i>
          </Nav.Link>
          <Nav.Link href="#notifications"><i className="bi bi-bell"></i></Nav.Link>
          <Nav.Link href="#cart" onClick={toggleCart}>
            <i className="bi bi-cart"></i>({cart.length})
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DmartNavbar;
