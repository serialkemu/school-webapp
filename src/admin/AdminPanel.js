import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import axios from 'axios';

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);
  const [type, setType] = useState('pre-school');
  const [status, setStatus] = useState('pending');

  const fetchApplications = async () => {
    try {
      console.log('Fetching applications with type:', type, 'and status:', status);

      const token = localStorage.getItem('token');
      console.log('token: ', token)
      if (token) {
        const authHeader = `Bearer ${token}`;

        const response = await axios.get(`http://localhost:5000/api/admin/applications/${type}`, {
          params: { status },
          headers: {
            Authorization: authHeader,
          },
        });

        console.log('Response data:', response.data);
        setApplications(response.data);
      } else {
        console.warn('No token found in localStorage');
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  useEffect(() => {
    console.log('Type or status changed:', { type, status });
    fetchApplications();
  }, [type, status]);

  return (
    <Container className="mt-4">
      <h2>Admin Panel</h2>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="typeSelect">
              <Form.Label>Filter by Type</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="pre-school">Pre-School</option>
                <option value="lower-primary">Lower-Primary</option>
                <option value="upper-primary">Upper-Primary</option>
                <option value="secondary">Secondary</option>
                <option value="college">College</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="statusSelect">
              <Form.Label>Filter by Status</Form.Label>
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Row>
        {applications.map((application) => (
          <Col md={4} key={application._id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{application.firstName} {application.otherNames}</Card.Title>
                <Card.Text>
                  <strong>ID Number:</strong> {application.idNumber || 'N/A'}<br />
                  <strong>Course/Class:</strong> {application.course || application.classGrade || 'N/A'}<br />
                  <strong>Phone:</strong> {application.phoneNumber}<br />
                  <strong>Email:</strong> {application.email}<br />
                  <strong>Status:</strong> {application.status}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminPanel;
