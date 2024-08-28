import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'react-bootstrap';
import PreSchoolForm from '../PreSchoolForm';
import { Link } from 'react-router-dom';


const FileCard = ({ title, image, fileLinks }) => (
  <Card className="m-4">
    <Card.Body>
      <Card.Title className="text-center">{title}</Card.Title>
      <Row>
        {image && (
          <Col md={6} className="d-flex justify-content-around align-items-center">
            <CardImg src={image} className="img-fluid rounded" />
          </Col>
        )}
        {fileLinks && (
          <Col md={6}>
            <ul className="list-group">
              {fileLinks.map((link, idx) => (
                <li key={idx} className="list-group-item">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
    </Card.Body>
  </Card>
);

const Pre = () => {
  return (
    <Container className="bg">
      <h1 className="text-center my-5">Pre-school</h1>
      <Row>
      <Col className='text-center'>
      <Link to="/preSchoolForm" className='btn btn-primary m-2'>Login</Link>
      <Link to="/preSchoolForm" className='btn btn-primary m-2'>Register</Link>
      </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FileCard
            title="PLAY GROUP"
            image="path_to_image" // Replace with actual image path
            fileLinks={[
              { name: "Language Activities", url: "" },
              { name: "Mathematical Activities", url: "" },
              { name: "Environmental Activities", url: "" },
              { name: "Psychomotor and Creative Arts", url: "" },
              { name: "Religious Education", url: "" },
              { name: "Pastrol Programme of Instruction", url: "" },
              { name: "", url: "" },
              { name: "", url: "" },
              { name: "", url: "" },
              { name: "", url: "" },

              
              // Add more file links as needed
            ]}
          />
        </Col>
        <Col md={12}>
   <FileCard
     title="PP1"
     image="path_to_image" // Replace with actual image path
     fileLinks={[
       { name: "Language Activities", url: "" },
       { name: "Mathematical Activities", url: "" },
       { name: "Environmental Activities", url: "" },
       { name: "Psychomotor and Creative Arts", url: "" },
       { name: "Religious Education", url: "" },
       { name: "Pastrol Programme of Instruction", url: "" },
       { name: "", url: "" },
       { name: "", url: "" },
       { name: "", url: "" },
       { name: "", url: "" },
       
       // Add more file links as needed
     ]}
   />
 </Col>
 <Col md={12}>
   <FileCard
     title="PP2"
     image="path_to_image" // Replace with actual image path
     fileLinks={[
       { name: "Language Activities", url: "" },
       { name: "Mathematical Activities", url: "" },
       { name: "Environmental Activities", url: "" },
       { name: "Psychomotor and Creative Arts", url: "" },
       { name: "Religious Education", url: "" },
       { name: "Pastrol Programme of Instruction", url: "" },
       { name: "", url: "" },
       { name: "", url: "" },
       { name: "", url: "" },
       { name: "", url: "" },
       
       // Add more file links as needed
     ]}
   />
 </Col>
      </Row>
      {/* Add more FileCard components as needed */}
    </Container>
  );
};

export default Pre;
