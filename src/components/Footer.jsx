import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5>TaskFlow</h5>
            <p>
              Streamline your productivity with our intelligent task management 
              solution. Designed for individuals and teams who want to accomplish more.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Product</h5>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Support</h5>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Download</h5>
            <div className="download-buttons">
              <a href="#" className="btn btn-outline-light w-100 mb-2">
                <i className="fab fa-apple me-2"></i>App Store
              </a>
              <a href="#" className="btn btn-outline-light w-100">
                <i className="fab fa-google-play me-2"></i>Play Store
              </a>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12}>
            <div className="footer-bottom">
              <p>&copy; 2025 TaskFlow. All rights reserved. | Nancy Abduallh</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer