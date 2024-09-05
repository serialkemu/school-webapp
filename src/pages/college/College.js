import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import collage1 from '../../assets/img/collage1.jpg'
import collage2 from '../../assets/img/collage2.jpg'
import business from '../../assets/img/business.jpg'
import FileCard from '../../components/FileCard';



const College = () => {
  return (
    <Container className="bg">
      <h1 className="text-center m-3 ">College
      </h1>
      <Row>
        <Col className='col-12'>
        <p className="text-center">Please pick your class and access the resources available</p>
        </Col>
        <Col className='text-center'>
        <Link to="/login" className='btn btn-primary m-2'>Login</Link>
        <Link to="/collegeForm" className='btn btn-primary m-2'>Register</Link>
        </Col>
        
      </Row>
      <Row>
        <Col md={12}>
          <FileCard
            title="ICT"
            image={[collage2]}
            fileLinks={[
              { name: " Diploma in Information Communication Technology", url: "link_to_file_1" },
              { name: "Craft in Information Communication Technology", url: "link_to_file_2" },
              { name: "Certificate in Information Communication Technology", url: "" },
              { name: "Artisan in Information Communication Technology", url: "" },
              { name: "Entry Level Three in Information Communication Technology", url: "" },
              { name: "Entry Level Two in Information Communication Technology", url: "" },
              { name: "Entry Level One in Information Communication Technology ", url: "" },
            ]}
          />
          
        </Col>
        <Col md={12}>
   <FileCard
     title="BUSINESS ADMINSTRATION"
     image={[business]} 
     fileLinks={[
      { name: "Diploma in Administration", url: "" },
      { name: "Certificate in Administration", url: "" },
      { name: "Craft in Adminstration", url: "" },
      { name: "Artisan in Adminstration", url: "" },
      { name: "Entry Level Three in Administration", url: "" },
      { name: "Entry Level Two in Administration", url: "" },
      { name: "Entry Level One in Administration", url: "" },
       
     ]}
   />
   </Col>
   <Col md={12}>
  <FileCard
    title="INTERIOR DESIGN"
    image="path_to_interior_design_image"
    fileLinks={[
      { name: "Certificate in Interior Design", url: "link_to_certificate" },
      { name: "Craft in Interior Design", url: "link_to_craft" },
      { name: "Artisan in Interior Design", url: "link_to_artisan" },
      { name: "Entry Level Three in Interior Design", url: "link_to_entry_level_three" },
      { name: "Entry Level Two in Interior Design", url: "link_to_entry_level_two" },
      { name: "Entry Level One in Interior Design", url: "link_to_entry_level_one" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="JOURNALISM"
    image="path_to_journalism_image"
    fileLinks={[
      { name: "Diploma in Journalism", url: "link_to_diploma" },
      { name: "Certificate in Journalism", url: "link_to_certificate" },
      { name: "Craft in Journalism", url: "link_to_craft" },
      { name: "Artisan in Journalism", url: "link_to_artisan" },
      { name: "Entry Level One in Journalism", url: "link_to_entry_level_one" },
      { name: "Entry Level Two in Journalism", url: "link_to_entry_level_two" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="COMMUNITY HEALTH"
    image="path_to_community_health_image"
    fileLinks={[
      { name: "Diploma in Community Health", url: "link_to_diploma" },
      { name: "Certificate in Community Health", url: "link_to_certificate" },
      { name: "Craft in Community Health", url: "link_to_craft" },
      { name: "Artisan in Community Health", url: "link_to_artisan" },
      { name: "Entry Level Three in Community Health", url: "link_to_entry_level_three" },
      { name: "Entry Level Two in Community Health", url: "link_to_entry_level_two" },
      { name: "Entry Level One in Community Health", url: "link_to_entry_level_one" },
    ]}
  />
</Col>
<Col md={12}>
  <FileCard
    title="PROJECT MANAGEMENT"
    image="path_to_project_management_image"
    fileLinks={[
      { name: "Diploma in Project Management", url: "link_to_diploma" },
      { name: "Certificate in Project Management", url: "link_to_certificate" },
      { name: "Craft in Project Management", url: "link_to_craft" },
      { name: "Artisan in Project Management", url: "link_to_artisan" },
      { name: "Entry Level Three in Project Management", url: "link_to_entry_level_three" },
      { name: "Entry Level Two in Project Management", url: "link_to_entry_level_two" },
      { name: "Entry Level One in Project Management", url: "link_to_entry_level_one" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="COSMETOLOGY HAIR AND BEAUTY"
    image="path_to_cosmetology_image"
    fileLinks={[
      { name: "Diploma in Cosmetology", url: "link_to_diploma" },
      { name: "Certificate in Hair and Beauty", url: "link_to_certificate" },
      { name: "Craft in Hair and Beauty", url: "link_to_craft" },
      { name: "Artisan in Hair and Beauty", url: "link_to_artisan" },
      { name: "Entry Level One in Hair and Beauty", url: "link_to_entry_level_one" },
      { name: "Entry Level Two in Hair and Beauty", url: "link_to_entry_level_two" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="CUSTOMER SERVICE"
    image="path_to_customer_service_image"
    fileLinks={[
      { name: "Diploma in Customer Service", url: "link_to_diploma" },
      { name: "Certificate in Customer Service", url: "link_to_certificate" },
      { name: "Craft in Customer Service", url: "link_to_craft" },
      { name: "Artisan in Customer Service", url: "link_to_artisan" },
      { name: "Entry Level Three in Customer Service", url: "link_to_entry_level_three" },
      { name: "Entry Level Two in Customer Service", url: "link_to_entry_level_two" },
      { name: "Entry Level One in Customer Service", url: "link_to_entry_level_one" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="FASHION AND DESIGN"
    image="path_to_fashion_design_image"
    fileLinks={[
      { name: "Diploma in Fashion and Design", url: "link_to_diploma" },
      { name: "Certificate in Fashion and Design", url: "link_to_certificate" },
      { name: "Craft in Fashion and Design", url: "link_to_craft" },
      { name: "Artisan in Fashion and Design", url: "link_to_artisan" },
      { name: "Entry Level Three in Fashion and Design", url: "link_to_entry_level_three" },
      { name: "Entry Level Two in Fashion and Design", url: "link_to_entry_level_two" },
      { name: "Entry Level One in Fashion and Design", url: "link_to_entry_level_one" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="FRONT OFFICE"
    image="path_to_front_office_image"
    fileLinks={[
      { name: "Diploma in Front Office", url: "link_to_diploma" },
      { name: "Certificate in Front Office", url: "link_to_certificate" },
      { name: "Craft in Front Office", url: "link_to_craft" },
      { name: "Artisan in Front Office", url: "link_to_artisan" },
      { name: "Entry Level One in Front Office", url: "link_to_entry_level_one" },
      { name: "Entry Level Two in Front Office", url: "link_to_entry_level_two" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="TOURISM AND HOSPITALITY"
    image="path_to_tourism_hospitality_image"
    fileLinks={[
      { name: "Diploma in Tourism and Hospitality", url: "link_to_diploma" },
      { name: "Certificate in Tourism and Hospitality", url: "link_to_certificate" },
      { name: "Craft in Tourism and Hospitality", url: "link_to_craft" },
      { name: "Artisan in Tourism and Hospitality", url: "link_to_artisan" },
      { name: "Entry Level Three in Tourism and Hospitality", url: "link_to_entry_level_three" },
      { name: "Entry Level Two in Tourism and Hospitality", url: "link_to_entry_level_two" },
      { name: "Entry Level One in Tourism and Hospitality", url: "link_to_entry_level_one" },
    ]}
  />
</Col>
<Col md={12}>
  <FileCard
    title="SOCIAL WORK"
    image="path_to_social_work_image"
    fileLinks={[
      { name: "Diploma in Social Work", url: "link_to_diploma" },
      { name: "Certificate in Social Work", url: "link_to_certificate" },
      { name: "Craft in Social Work", url: "link_to_craft" },
      { name: "Artisan in Social Work", url: "link_to_artisan" },
      { name: "Entry Level One in Social Work", url: "link_to_entry_level_one" },
      { name: "Entry Level Two in Social Work", url: "link_to_entry_level_two" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="INTERNATIONAL RELATIONS"
    image="path_to_international_relations_image"
    fileLinks={[
      { name: "Diploma in International Relations", url: "link_to_diploma" },
      { name: "Certificate in International Relations", url: "link_to_certificate" },
      { name: "Craft in International Relations", url: "link_to_craft" },
      { name: "Artisan in International Relations", url: "link_to_artisan" },
      { name: "Entry Level One in International Relations", url: "link_to_entry_level_one" },
      { name: "Entry Level Two in International Relations", url: "link_to_entry_level_two" },
    ]}
  />
</Col>

<Col md={12}>
  <FileCard
    title="FORENSIC CRIMINOLOGY"
    image="path_to_forensic_criminology_image"
    fileLinks={[
      { name: "Diploma in Forensic Criminology", url: "link_to_diploma" },
      { name: "Certificate in Forensic Criminology", url: "link_to_certificate" },
    ]}
  />
</Col>


    
      </Row>
      
    </Container>
  );
};

export default College;
