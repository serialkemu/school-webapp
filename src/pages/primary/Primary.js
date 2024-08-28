import { Button } from 'bootstrap';
import React from 'react';
import { Container, Row, Col, Card, CardImg} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import primary3 from '../../assets/img/primary4.jpg'




const FileCard = ({ title, image, fileLinks }) => (
  <Card className="mb-4">
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

const Primary = () => {
  return (
    <Container className="bg">
      <h1 className="text-center my-5">Primary</h1>
      <Row>
        <Col className='col-12'>
        <p className="text-center">Please pick your class and access the resources available</p>
        </Col>
        <Col className='text-center'>
        <Link to="/lower-primary" className='btn btn-primary m-2'>Lower-Primary</Link>
        <Link to="/upper-primary" className='btn btn-primary m-2'>Upper-Primary</Link>
        </Col>
        
      </Row>
      <Row>
        <Col md={12}>
          <FileCard
            title="Grade One"
            image={[primary3]}
            fileLinks={[
              { name: "Math ", url: "link_to_file_1" },
              { name: "English", url: "link_to_file_2" },
              { name: "Kiswahili", url: "" },
              { name: "Science", url: "" },
              { name: "StudieSciences", url: "" },
              { name: "Religious Education", url: "" },
              { name: "Mother Tongue", url: "" },
              { name: "Creative Art", url: "" },
              { name: "Physical Education", url: "" },
              { name: "Pastrol Programme", url: "" },

              
              // Add more file links as needed
            ]}
          />
        </Col>
        <Col md={12}>
   <FileCard
     title="Grade Two"
     image="path_to_image" // Replace with actual image path
     fileLinks={[
       { name: "Math ", url: "link_to_file_1" },
       { name: "English", url: "link_to_file_2" },
       { name: "Kiswahili", url: "" },
       { name: "Science", url: "" },
       { name: "StudieSciences", url: "" },
       { name: "Religious Education", url: "" },
       { name: "Mother Tongue", url: "" },
       { name: "Creative Art", url: "" },
       { name: "Physical Education", url: "" },
       { name: "Pastrol Programme", url: "" },
       
       // Add more file links as needed
     ]}
   />
    </Col>
    <Col md={12}>
   <FileCard
     title="Grade Three"
     image="path_to_image" // Replace with actual image path
     fileLinks={[
       { name: "Math ", url: "link_to_file_1" },
       { name: "English", url: "link_to_file_2" },
       { name: "Kiswahili", url: "" },
       { name: "Science", url: "" },
       { name: "StudieSciences", url: "" },
       { name: "Religious Education", url: "" },
       { name: "Mother Tongue", url: "" },
       { name: "Creative Art", url: "" },
       { name: "Physical Education", url: "" },
       { name: "Pastrol Programme", url: "" },
       
       // Add more file links as needed
     ]}
   />
 </Col>
 <Col md={12}>
   <FileCard
     title="Grade Four"
     image="path_to_image" // Replace with actual image path
     fileLinks={[
       { name: "Math ", url: "link_to_file_1" },
       { name: "English", url: "link_to_file_2" },
       { name: "Kiswahili", url: "" },
       { name: "Science", url: "" },
       { name: "StudieSciences", url: "" },
       { name: "Religious Education", url: "" },
       { name: "Mother Tongue", url: "" },
       { name: "Creative Art", url: "" },
       { name: "Physical Education", url: "" },
       { name: "Pastrol Programme", url: "" },
       
       // Add more file links as needed
     ]}
   />
 </Col>
      </Row>
      {/* Add more FileCard components as needed */}
    </Container>
  );
};

export default Primary;
