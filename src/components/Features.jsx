import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Features = () => {
  const features = [
    {
      icon: 'fa-brain',
      title: 'Smart Prioritization',
      description: 'Our AI-powered system automatically prioritizes your tasks based on deadlines, importance, and your work patterns.'
    },
    {
      icon: 'fa-users',
      title: 'Team Collaboration',
      description: 'Seamlessly collaborate with your team, assign tasks, track progress, and communicate in real-time.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Progress Analytics',
      description: 'Get detailed insights into your productivity trends and identify areas for improvement with beautiful analytics.'
    }
  ]

  return (
    <section className="features-section" id="features">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title" data-aos="fade-up">
              Why Choose TaskFlow?
            </h2>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index}>
              <div 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-icon">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features