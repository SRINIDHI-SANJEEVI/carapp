import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
      <Container>
        {/* Styled Brand Name */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          <span style={{ color: "white" }}>Car</span>
          <span className="text-danger">space</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="text-white">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-white">Sign Up</Nav.Link>
          </Nav>

          <Nav className="ms-3">
            <Nav.Link as={Link} to="/profile" className="text-white fs-4">
              <FaUserCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
