import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

const HowItWorks = () => {
  const [showVideo, setShowVideo] = useState(false)

  const steps = [
    {
      number: '01',
      title: 'Sign Up & Setup',
      description: 'Create your account and customize your workspace in minutes',
      icon: 'fa-user-plus'
    },
    {
      number: '02',
      title: 'Create Tasks & Projects',
      description: 'Add tasks, set deadlines, and organize them into projects',
      icon: 'fa-tasks'
    },
    {
      number: '03',
      title: 'Collaborate with Team',
      description: 'Invite team members, assign tasks, and track progress together',
      icon: 'fa-users'
    },
    {
      number: '04',
      title: 'Analyze & Improve',
      description: 'Use our analytics to optimize your workflow and productivity',
      icon: 'fa-chart-line'
    }
  ]

  const handleVideoShow = () => setShowVideo(true)
  const handleVideoClose = () => setShowVideo(false)

  return (
    <>
      <section className="how-it-works-section" id="how-it-works">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title text-center">How TaskFlow Works</h2>
              <p className="section-subtitle text-center">
                Get started in four simple steps and transform your productivity
              </p>
            </Col>
          </Row>
          
          <Row className="steps-container">
            {steps.map((step, index) => (
              <Col lg={3} md={6} key={index} className="step-item">
                <div 
                  className="step-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          
          <Row>
            <Col lg={12} className="text-center">
              <div className="demo-video" data-aos="zoom-in">
                <div className="video-placeholder" onClick={handleVideoShow}>
                  <div className="play-button">
                    <i className="fas fa-play"></i>
                  </div>
                  <h4>See TaskFlow in Action</h4>
                  <p>Watch our 2-minute demo to see how TaskFlow can transform your workflow</p>
                  <div className="video-features">
                    <span><i className="fas fa-check"></i> Live Demo</span>
                    <span><i className="fas fa-check"></i> No Registration Required</span>
                    <span><i className="fas fa-check"></i> Quick Overview</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Modal */}
      <Modal 
        show={showVideo} 
        onHide={handleVideoClose} 
        size="lg" 
        centered
        className="video-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>TaskFlow Demo Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-container">
            {}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe 
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/9No-FiEInLA?autoplay=1"
                title="TaskFlow Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            
            {/* <video controls width="100%">
              <source src="/videos/taskflow-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
          
          <div className="video-details mt-3">
            <h5>What you'll learn in this demo:</h5>
            <ul>
              <li>How to create and organize tasks efficiently</li>
              <li>Team collaboration features in action</li>
              <li>Advanced analytics and reporting capabilities</li>
              <li>Mobile app synchronization</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleVideoClose}>
            Close
          </Button>
          <Button className="btn-primary-custom" onClick={handleVideoClose}>
            Start Free Trial
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HowItWorks