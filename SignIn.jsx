import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="shadow-lg bg-white rounded overflow-hidden auth-box">
          <Col md={6} className="p-0">
            <img 
              src="/images/car.png" 
              alt="Car" 
              className="auth-image"
            />
          </Col>
          <Col md={6} className="auth-content">
            <Card className="w-100 border-0">
              <Card.Body>
                <h2 className="text-center fw-bold">
                  Car<span className="text-danger">space</span>
                </h2>
                <h3 className="text-center">Sign In</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} required />
                  </Form.Group>
                  <Button variant="danger" className="w-100 rounded-pill" type="submit">
                    Sign In
                  </Button>
                </Form>
                <p className="text-center mt-2">
                  Don't have an account?{" "}
                  <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
                    Sign Up
                  </span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
