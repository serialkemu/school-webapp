import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import highschool from '../../assets/img/highschool.jpg'
import FileCard from '../../components/FileCard';



const Secondary = () => {
  return (
    <Container className="bg">
      <h1 className="text-center m-3 ">Secondary School
      </h1>
      <Row> Primary
        <Col className='col-12'>
        <p className="text-center">Please pick your class and access the resources available</p>
        </Col>
        <Col className='text-center'>
        <Link to="/lower-primary" className='btn btn-primary m-2'>Login</Link>
        <Link to="/upper-primary" className='btn btn-primary m-2'>Register</Link>
        </Col>
        
      </Row>
      <Row>
        <Col md={12}>
          <FileCard
            title="FORM ONE"
            image={[highschool]}
            fileLinks={[
              { name: "Math ", url: "link_to_file_1" },
              { name: "English", url: "link_to_file_2" },
              { name: "Kiswahili", url: "" },
              { name: "Biology", url: "" },
              { name: "Physics", url: "" },
              { name: "Chemistry", url: "" },
              { name: "History and Goverment", url: "" },
              { name: "Biology for the Blind", url: "" },
              { name: "General Science", url: "" },
              { name: "Geography", url: "" },
              { name: "CRE/HRE/IRE", url: "" },
              { name: "Agriculture", url: "" },
              { name: "Business Stud ies", url: "" },
          { name: "Computer Studies", url: "" },
       { name: "Electricity ", url: "link_to_file_1" },
       { name: "Drawing and Design", url: "link_to_file_2" },
       { name: "Aviation Technology", url: "" },
       { name: "Computer Studies", url: "" },
       { name: "German", url: "" },
       { name: "French", url: "" },
       { name: "Art and Science", url: "" },
       { name: "Home Science", url: "" },
       { name: "Woodwork", url: "" },
       { name: "Metal Work", url: "" },
       { name: "Building Construction", url: "" },
       { name: "Power Mechanichs", url: "" },
       { name: "Arabic", url: "" },
       
       
     ]}
   />
   </Col>
    
      </Row>
      
    </Container>
  );
};

export default Secondary;
