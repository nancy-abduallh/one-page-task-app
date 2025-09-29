import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
  const handleGetStarted = () => {
    document.getElementById('pricing').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title" data-aos="fade-up">
              Streamline Your Productivity with TaskFlow
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
              The intelligent task management app that helps you organize, prioritize, 
              and accomplish more than ever before. Simple, powerful, and designed for you.
            </p>
            <Button 
              className="btn-hero" 
              size="lg"
              onClick={handleGetStarted}
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <i className="fas fa-rocket me-2"></i>
              Get Started Free
            </Button>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-delay="300">
            <div className="text-center">
              <div className="hero-visual">
                {/* This would be an animated SVG or image in a real project */}
                <div style={{
                  width: '100%',
                  height: '400px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  <i className="fas fa-tasks" style={{fontSize: '8rem', opacity: 0.8}}></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero