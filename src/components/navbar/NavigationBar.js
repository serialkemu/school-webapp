import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">School Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/pre-school">Pre-School</Nav.Link>
          <Nav.Link as={Link} to="/lower-primary">Lower Primary</Nav.Link>
          <Nav.Link as={Link} to="/upper-primary">Upper Primary</Nav.Link>
          <Nav.Link as={Link} to="/secondary">Secondary</Nav.Link>
          <Nav.Link as={Link} to="/college">College</Nav.Link>
          {/* <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" variant="outline-success" className="mr-sm-2" />
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/admin">A</Nav.Link>
          </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
