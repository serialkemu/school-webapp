import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contactInfoStyle}>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} style={iconStyle} /> 
          For any questions, reach the developer at <a href="tel:+254722949465">+254 722 949 465</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> 
          Email: <a href="mailto:nyagaka.ouko@jp-international-examinations.co.uk">nyagaka.ouko@jp-international-examinations.co.uk</a>
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  textAlign: 'center',
  borderTop: '1px solid #e7e7e7',
};

const contactInfoStyle = {
  margin: '0 auto',
  maxWidth: '600px',
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333',
};

const iconStyle = {
  marginRight: '8px',
};

export default Footer;
