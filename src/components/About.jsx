import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const About = () => {
  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '2.5M', label: 'Tasks Completed' },
    { number: '4.9', label: 'App Store Rating' }
  ]

  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-start"> {}
          <Col lg={6} data-aos="fade-right" className="about-content">
            <h2 className="section-title">Revolutionizing Task Management</h2>
            <p className="lead mb-4">
              TaskFlow is more than just a to-do list. It's a comprehensive productivity 
              platform designed to help individuals and teams achieve their goals with 
              intelligent task management and seamless collaboration.
            </p>
            
            <div className="feature-list mb-4">
              <div className="feature-item d-flex align-items-center mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>AI-powered task prioritization</span>
              </div>
              <div className="feature-item d-flex align-items-center mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>Real-time team collaboration</span>
              </div>
              <div className="feature-item d-flex align-items-center mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>Advanced analytics and reporting</span>
              </div>
            </div>
            
            <Button className="btn-primary-custom">
              Learn More About Us
            </Button>
          </Col>
          
          <Col lg={6} data-aos="fade-left" className="about-visual-column">
            <div className="stats-grid mb-5"> {}
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="about-visual">
              <div className="floating-cards-container">
                <div className="floating-card card-1">
                  <i className="fas fa-calendar text-primary"></i>
                  <span>Schedule Tasks</span>
                </div>
                <div className="floating-card card-2">
                  <i className="fas fa-chart-bar text-success"></i>
                  <span>Track Progress</span>
                </div>
                <div className="floating-card card-3">
                  <i className="fas fa-users text-warning"></i>
                  <span>Team Collaboration</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About