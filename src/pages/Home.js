import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; 



const Home = () => {
  return (
    <Container className="mt-4 bg">
      <div className="parallax-section">
        <h1 className="parallax-title">Welcome to Online Training</h1>
      </div>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>ONLINE TRAINING</Card.Title>
              <Card.Text>
                We provide online training, continuous assessment tests, and examinations for all learners. Our resources help parents, teachers, and learners manage online and home schooling. Our facilitators are teachers with all Kenyan legal requirements with many years’ experience in both government and private schools.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.ImgOverlay>

              </Card.ImgOverlay>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>PARTNERSHIP</Card.Title>
              <Card.Text>
                WE HAVE PARTNERED WITH NORTHERN ARIZONA UNIVERSITY.
                We have partnered with Northern Arizona University to make it easier for Kenyan Students to access top American University education. If you wish to study in America and are unsure how to proceed, call +254722949465. We will be happy to discuss the various study programs at NAU.
                <a href="#"> Click Here.</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>CORONA VIRUS</Card.Title>
              <Card.Text>
                Due to the Covid-19 pandemic, we have provided part of our website to primary and secondary school students to access online learning materials. We have partnered with teachers from both private and government schools to help students access quality education during these uncertain times.
                For more information on how to protect yourself from the Corona Virus, please follow this link: <a href="https://www.who.int">World Health Organization</a>.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>MINISTRY OF HEALTH CERTIFIED COVID-19 COURSE</Card.Title>
              <Card.Text>
                We have partnered with AMREF and the Ministry of Health to bring you COVID-19 Training. This course is mandatory for all health workers. To access the training, please <a href="#">REGISTER HERE</a>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="parallax-section parallax-section-2">
        <h2 className="parallax-title">Partnered with NAU</h2>
      </div>
  
    </Container>
  );
};

export default Home;
