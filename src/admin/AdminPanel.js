import React, { useState } from 'react';
import { Accordion, Card, Button, Container } from 'react-bootstrap';

const AdminPanel = ({ users = [] }) => {
  const [status, setStatus] = useState({});

  const handleApprove = (userId) => {
    setStatus({ ...status, [userId]: 'approved' });
  };

  const handleDeny = (userId) => {
    setStatus({ ...status, [userId]: 'denied' });
  };

  const getStatusColor = (userId) => {
    if (status[userId] === 'approved') {
      return 'success'; // Green
    } else if (status[userId] === 'denied') {
      return 'danger'; // Red
    }
    return 'secondary'; // Grey
  };

  return (
    <Container className="mt-4">
      {users.length > 0 ? (
        <Accordion defaultActiveKey="0">
          {users.map((user, index) => (
            <Card key={user.id} bg={getStatusColor(user.id)}>
              <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                {user.name}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  {/* Add more user fields here as necessary */}
                  <Button
                    variant="success"
                    onClick={() => handleApprove(user.id)}
                    className="mr-2"
                  >
                    Approve
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeny(user.id)}
                  >
                    Deny
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      ) : (
        <p>No users to display.</p>
      )}
    </Container>
  );
};

export default AdminPanel;
