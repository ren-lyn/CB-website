import React from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import logo from '../assets/logo.svg';

const LandingPage = () => {
  const { user, logout, loading } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="Cliberduche logo"
            />
            Cliberduche
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              {loading ? (
                <Navbar.Text>Loading...</Navbar.Text>
              ) : user ? (
                <>
                  <Navbar.Text className="mx-2">
                    Name: <strong>{user.name}</strong>
                  </Navbar.Text>
                  <Navbar.Text className="mx-2">
                    Department: <strong>{user.department?.name || 'None'}</strong>
                  </Navbar.Text>
                  <Button variant="outline-light" size="sm" onClick={logout} className="ms-3">Logout</Button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <div className="p-5 mb-4 bg-light rounded-3">
          <Container fluid className="py-5">
            <h1 className="display-5 fw-bold">Welcome to Cliberduche</h1>
            <p className="col-md-8 fs-4">
              Your trusted partner for excellence. This is the company profile placeholder.
              We deliver high-quality solutions tailored to your needs.
            </p>
            <Button variant="primary" size="lg">Learn More</Button>
          </Container>
        </div>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Service One</Card.Title>
                <Card.Text>
                  Brief description of the first key service offered by the company.
                </Card.Text>
                <Button variant="outline-primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Service Two</Card.Title>
                <Card.Text>
                  Brief description of the second key service offered by the company.
                </Card.Text>
                <Button variant="outline-primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Service Three</Card.Title>
                <Card.Text>
                  Brief description of the third key service offered by the company.
                </Card.Text>
                <Button variant="outline-primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
