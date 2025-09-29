import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Integrations = () => {
  const integrations = [
    {
      name: 'Slack',
      icon: 'fa-slack',
      description: 'Get task notifications directly in Slack channels'
    },
    {
      name: 'Google Calendar',
      icon: 'fa-google',
      description: 'Sync deadlines and meetings with your calendar'
    },
    {
      name: 'Microsoft Teams',
      icon: 'fa-microsoft',
      description: 'Integrate with Teams for seamless collaboration'
    },
    {
      name: 'Dropbox',
      icon: 'fa-dropbox',
      description: 'Attach files directly from your cloud storage'
    },
    {
      name: 'GitHub',
      icon: 'fa-github',
      description: 'Connect with repositories and track development tasks'
    },
    {
      name: 'Zapier',
      icon: 'fa-bolt',
      description: 'Connect with 3000+ apps through Zapier integration'
    }
  ]

  return (
    <section className="integrations-section" id="integrations">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center">Seamless Integrations</h2>
            <p className="section-subtitle text-center">
              TaskFlow works with your favorite tools to create a unified workflow
            </p>
          </Col>
        </Row>
        
        <Row>
          {integrations.map((integration, index) => (
            <Col lg={4} md={6} key={index}>
              <div 
                className="integration-card"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="integration-icon">
                  <i className={`fab ${integration.icon}`}></i>
                </div>
                <h5 className="integration-name">{integration.name}</h5>
                <p className="integration-description">{integration.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row>
          <Col lg={12} className="text-center">
            <div className="integrations-cta" data-aos="fade-up">
              <p className="mb-3">Want to see more integrations?</p>
              <button className="btn btn-outline-primary">
                View All Integrations
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Integrations