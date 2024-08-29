import React from 'react';
import { Container, Row, Col, Card, CardImg, Button } from 'react-bootstrap';
import './Home.css'; 
import TypingEffect from './TypingEffect';
import arizona1 from '../assets/arizona1.png';
import arizona2 from '../assets/arizona2.jpg';
import arizona3 from '../assets/arizona1.jpg';
import preschool from '../assets/img/preschool.jpg';
import highschool from '../assets/img/highschool.jpg';
import primary3 from '../assets/img/primary3.jpg';
import middleprimary from '../assets/img/middleprimary.jpg';
import collage from '../assets/img/collage1.jpg';
import primary from '../assets/img/primary1.jpg'


const ParallaxSection = ({ title, text, parallaxClass = "parallax-section" }) => (
  <div className={parallaxClass}>
    <Row className="text-align-center">
      <Col className="col-12">
        <h1 className="parallax-title">{title}</h1>
      </Col>
      {text && (
        <Col>
          <TypingEffect text={text} speed={50} />
        </Col>
      )}
    </Row>
  </div>
);

const CustomCard = ({ title, text, linkText, linkHref, images }) => (
  <Card className="mb-4 no-border">
    <Card.Body>
      <Card.Title className='text-center'>{title}</Card.Title>
      <Row>
        {text && (
          <Col md={6}>
            <Card.Text className='p-3 m-3'>
              {text}
              {linkHref ? (
                <a href={linkHref} className='link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>{linkText}</a>
              ) : (
                <span>{linkText}</span>
              )}
            </Card.Text>
          </Col>
        )}
        {images && (
          <Col md={6} className="d-flex justify-content-around align-items-center">
            {images.map((img, idx) => (
              <CardImg key={idx} src={img} className='img-fluid rounded' />
            ))}
          </Col>
        )}
      </Row>
    </Card.Body>
  </Card>
);


const CustomCardz = ({ titlez, textz, linkHrefz, linkTextz, imagez, btntex, btnLink }) => (
  <Card className='mb-4 no-border'>
    <Card.Body>
      <Card.Header className='text-center'>{titlez}</Card.Header>
      <Row>
        {imagez && (
          <Col md={6} className="d-flex justify-content-around align-items-center">
            {imagez.map((img, idx) => (
              <CardImg key={idx} src={img} className='img-fluid rounded' />
            ))}
          </Col>
        )}
        {textz && (
          <Col md={6}>
            <Card.Text className='p-3 m-3'>
              {textz}
              {linkHrefz ? (
                <a href={linkHrefz} className='link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>{linkTextz}</a>
              ) : (
                <span>{linkTextz}</span>
              )}
            </Card.Text>
            {btntex && <Button variant="primary" href={btnLink} className='btn btn-primary '>{btntex}</Button>}
          </Col>
        )}
      </Row>
    </Card.Body>
  </Card>
);


const Home = () => {
  return (
    <Container className="bg">
      <ParallaxSection 
        title="IQ Online Training" 
        text="We provide online training, continuous assessment tests, and examinations for all learners. Our resources help parents, teachers, and learners manage online and home schooling. Our facilitators are teachers with all Kenyan legal requirements and many years of experience in both government and private schools."
      />
      
      <Row>
        <Col md={12}>
          <CustomCard
            title="PARTNERSHIP"
            text="We have partnered with Northern Arizona University to make it easier for Kenyan Students to access top American University education. If you wish to study in America and are unsure how to proceed, call +254722949465. We will be happy to discuss the various study programs at NAU."
            linkText="Click Here"
            linkHref="https://nau.edu/how-to-apply/"
            images={[arizona1]} 
          />
          <CustomCard
            title="CORONA VIRUS"
            text="Due to the Covid-19 pandemic, we have provided part of our website to primary and secondary school students to access online learning materials. We have partnered with teachers from both private and government schools to help students access quality education during these uncertain times."
            linkText="World Health Organization"
            linkHref="https://www.who.int"
            images={[arizona2]}
          />
          <CustomCard
            title="MINISTRY OF HEALTH CERTIFIED COVID-19 COURSE"
            text="We have partnered with AMREF and the Ministry of Health to bring you COVID-19 Training. This course is mandatory for all health workers."
            linkText="REGISTER HERE"
            linkHref="https://www.who.int" // Fixed URL
            images={[arizona3]}
          />
        </Col>
      </Row>

      <ParallaxSection 
        title="Partnered with NAU" 
        parallaxClass="parallax-section-2" 
      />
      
      <CustomCardz
        titlez="Pre-School"
        textz="Our Playgroup online training is based on the KICD syllabus. We help parents find activities in a home setting which can help the child play and learn. The following subjects are presented for the PP1 group: Language skills, Environmental Studies, Mathematics, Psychomotor, Creative Arts, and Religious Education. In addition to the subjects continuation from PP1, we have tried to incorporate co-competency to be accrued by the PP2 learners. Each learning activity area has both the general and specific learning outcomes."
        linkTextz=""
        linkHref=""
        imagez={[preschool]}
        btntex="Join Pre-school"
        btnLink="/preschool" 
      />
       <CustomCardz
       titlez="Lower Primary"
       textz="This section covers Grade One to Four.This is an online platform where parents and students can access educational materials commensurate with their class. The platform has Interactive CBC, Comprehensive Notes, Continuous Assessment Tests, Examinations by top teachers for the primary school goers. The training can also be accessed using an Android App. The lessons and exams are in pdf so that the client can download them. All the materials are originated from top serving teachers both in the government and private schools spectrum."
       linkTextz=""
       linkHref=""
       imagez={[primary]}
       btntex="Join Pre-school"
       btnLink="/preschool" 
       />
        <CustomCardz
        titlez="Upper-Primary"
        textz="This covers section covers Class Five to Eight.This is an online platform where parents and students can access educational materials commensurate with their class. The platform has Interactive CBC, Comprehensive Notes, Continuous Assessment Tests, Examinations by top teachers for the primary school goers. The training can also be accessed using an Android App.The lessons and exams are in pdf so that the client can download them. All the materials are originated from top serving teachers both in the government and private schools spectrum."
        linkTextz=""
        linkHref=""
        imagez={[primary3]}
        btntex="Join Pre-school"
        btnLink="/preschool" 
        />
         <CustomCardz
        titlez="highschool"
        textz="Our Online training means anyone with access to a computer or mobile phone gets access to KCSE (KNEC) exam papers, Assessment tests and examination from the best tutors in the country. The learners also access excellent notes in our portal.The students, teachers, instructors and the general readership will certainly find the platform extremely useful in teaching and learning. You only need to sign in and off you go to the course you are interested in."
        linkTextz=""
        linkHref=""
        imagez={[highschool]}
        btntex="Join Pre-school"
        btnLink="/preschool" 
        />
         <CustomCardz
        titlez="Collage"
        textz="Generally the examination board is concerned with the development of examination and assessment procedures. We assist training providers in skills development. Our Certification is a sign that the trainees who have done our programs meet the needs of today’s workplace. Our qualifications and apprenticeships are valued by employers across the world.IQ provides TVET approved qualifications in Kenya. The qualifications are operationally administrated by JP International Examinations. These qualifications are vocational in nature. There is a deliberate effort to examine and award students based on their practical skills rather than only on their academic prowess. The qualifications start from entry level to the highest levels of professional achievement. These skills are recognized by employers worldwide hence the bearers of these qualifications are a statement that the work will be done."
        linkTextz=""
        linkHref=""
        imagez={[collage]}
        btntex="Join Pre-school"
        btnLink="/preschool" 
        />
    </Container>
  );
};

export default Home;
