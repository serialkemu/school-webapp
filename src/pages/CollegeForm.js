import React, { useState } from 'react';
import axios from 'axios'; 
import { Form, Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const CollegeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    otherNames: '',
    idNumber: '',
    course: '',
    phoneNumber: '',
    email: '',
    dob: '',     
    gender: '',  
    level : '',
    location: '', 
    password: '', 
  });

  const level = [
    'Highschool',
    'Diploma',
    'Certificate',
    'Degree',
    'Masters',
    'PHD',
  ];

  const courses = [
    'BSc.CS (Bachelor of Science in Computer Science)',
    'BSc.NCS (Bachelor of Science in Networking & Cyber Security)',
    'BSc.AIT (Bachelor of Science in Applied Information Technology)',
    'BSc.VFX (Bachelor of Science in Animation and Visual Effects)',
    'BSc.AI & ML (Bachelor of Science in Artificial Intelligence & Machine Learning)',
    'BSc.AF(Bachelor of Science in Accounting & Finance)',
    'BBA IM/IB (Bachelor of Business Administration)',
    'BSc.AE (Bachelor of Science in Applied Economics)',
    'BHM (Bachelor of Hotel Management)',
    'BMIT (Bachelor of Medical Imaging Technology)',
    'BMLT(Bachelor of Medical Laboratory Technology)',
    'DBA - Diploma in Business Administration',
    'DIT - Diploma in Information Technology',
    'DCHN - Diploma in Computer Hardware & Networking',
    'DNCS - Diploma in Networking & Cyber Security',
    'DMA - Diploma in Multimedia & Animation',
    'DSE - Diploma in Software Engineering',
    'HEC - Higher Education Certificate - Business & IT',
    'HEC - Higher Education Certificate - Physical Sciences',
    'HEC - Higher Education Certificate - Health Sciences',
  ];

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSelect = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const formDataToSend = {
        ...formData,
      };

     
      console.log("Form data to send:", formDataToSend);

      
      const response = await axios.post('http://localhost:5000/api/college', formDataToSend);
      console.log(response.data); 

     
      alert('Form submitted successfully! You will be contacted');

    } catch (error) {
      console.error(error);
      alert('Failed to submit form! Please try again.');
    }
  };

  return (
    <Container className="mt-4">
      <h2>College Application Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.FloatingLabel>First Name</Form.FloatingLabel>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
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
                placeholder="Enter your other names"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Enter your date of birth"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formIdNumber">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                placeholder="Enter your ID number"
              />
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
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter your location"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter a password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.FloatingLabel>Level Of Education</Form.FloatingLabel>
              <DropdownButton
                title={formData.level || 'Select level'}
                onSelect={(value) => handleSelect(value, 'level')}
              >
                {level.map((lvl) => (
                  <Dropdown.Item eventKey={lvl} key={lvl}>
                    {lvl}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCourse">
              <Form.Label>Course</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={formData.course || "Select Course"}
                onSelect={(value) => handleSelect(value, 'course')}
              >
                {courses.map((course) => (
                  <Dropdown.Item key={course} eventKey={course}>
                    {course}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className='m-3'>
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default CollegeForm;
