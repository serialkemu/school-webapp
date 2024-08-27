import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

import { Form, Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const UpperPrimaryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    otherNames: '',
    classGrade: '',
    phoneNumber: '',
    email: '',
  });

  const classes = [
    'Class 1',
    'Class 2',
    'Class 3',
  ];

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle dropdown selection
  const handleSelect = (value) => {
    setFormData({ ...formData, classGrade: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try { 
      // Send POST request to backend
      const response = await axios.post('http://localhost:5000/api/upper-primary', formData);
      console.log(response.data); // For debugging
  
      // Handle successful submission
      alert('Form submitted successfully!');
  
    } catch (error) {
      console.error(error);
      alert('Failed to submit form! Please try again.');
    }
  };
  
  return (
    <Container className="mt-4">
      <h2>Upper Primary Application Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formOtherNames">
              <Form.Label>Other Names</Form.Label>
              <Form.Control
                type="text"
                name="otherNames"
                value={formData.otherNames}
                onChange={handleInputChange}
                placeholder="Enter other names"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formClassGrade">
              <Form.Label>Class/Grade</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={formData.classGrade || "Select Class/Grade"}
                onSelect={handleSelect}
              >
                {classes.map((className) => (
                  <Dropdown.Item key={className} eventKey={className}>
                    {className}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default UpperPrimaryForm;
