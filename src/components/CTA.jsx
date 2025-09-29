import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const CTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} data-aos="zoom-in">
            <h2 className="cta-title">Ready to Transform Your Productivity?</h2>
            <p className="cta-subtitle">
              Join thousands of teams and individuals who use TaskFlow to get more done in less time. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="cta-buttons">
              <Button 
                className="btn-primary-custom btn-lg me-3"
                onClick={scrollToPricing}
              >
                <i className="fas fa-rocket me-2"></i>
                Start Free Trial
              </Button>
              <Button 
                variant="outline-light"
                className="btn-lg"
              >
                <i className="fas fa-play-circle me-2"></i>
                Watch Demo
              </Button>
            </div>
            
            <div className="cta-features">
              <div className="feature-tag">
                <i className="fas fa-check me-2"></i>
                No credit card required
              </div>
              <div className="feature-tag">
                <i className="fas fa-check me-2"></i>
                14-day free trial
              </div>
              <div className="feature-tag">
                <i className="fas fa-check me-2"></i>
                Cancel anytime
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTA