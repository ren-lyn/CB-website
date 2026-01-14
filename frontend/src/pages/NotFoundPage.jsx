import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', textAlign: 'center' }}>
      <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '2rem' }} />
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-muted mb-3">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p className="text-muted mb-5">Redirecting to home in {countdown} seconds...</p>
      <Link to="/">
        <Button variant="primary" size="lg">Go Home Now</Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
