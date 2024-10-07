import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

function DmartNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#" className='logo'>GROCERY</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="me-auto">
          <Nav.Link href="#allCategories">All Categories</Nav.Link>
          <Nav.Link href="#readyToCook">Ready to Cook</Nav.Link>
          <Nav.Link href="#homeAppliances">Home Appliances</Nav.Link>
          <Nav.Link href="#cookware">Cookware</Nav.Link>
          <Nav.Link href="#serveware">Serveware</Nav.Link>
        </Nav>
        <Form className="d-flex mx-auto">
          <FormControl
            type="search"
            placeholder="Search for items..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="#signin">Sign In / Register</Nav.Link>
          <Nav.Link href="#notifications">Notifications</Nav.Link>
          <Nav.Link href="#cart">Cart (₹0)</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DmartNavbar;
