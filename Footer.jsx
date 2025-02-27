import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide the best second-hand cars with verified sellers and trusted services.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/signin" className="text-white">Sign In</Link></li>
              <li><Link to="/signup" className="text-white">Sign Up</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@carbuying.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="https://instagram.com" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="https://twitter.com" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" className="text-white"><FaLinkedin size={24} /></a>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Car Buying. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
