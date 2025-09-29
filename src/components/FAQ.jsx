import React, { useState } from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const FAQ = () => {
  const [activeKey, setActiveKey] = useState('0')

  const faqs = [
    {
      question: "How secure is my data with TaskFlow?",
      answer: "We take security seriously. Your data is encrypted with AES-256 encryption, and we're compliant with GDPR, SOC 2, and ISO 27001 standards. Regular security audits ensure your information stays protected."
    },
    {
      question: "Can I use TaskFlow with my team?",
      answer: "Absolutely! TaskFlow offers robust team collaboration features including task assignment, real-time updates, team analytics, and role-based permissions. You can invite unlimited team members depending on your plan."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! TaskFlow is available on both iOS and Android. You can download it from the App Store or Google Play. All your data syncs seamlessly across all devices."
    },
    {
      question: "What happens if I need to cancel my subscription?",
      answer: "You can cancel anytime from your account settings. If you cancel, you'll continue to have access to your paid features until the end of your billing period. After that, your account will revert to the Free plan."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer a 50% discount for registered nonprofits and educational institutions. Contact our sales team with your documentation to get set up with a discounted plan."
    },
    {
      question: "How does the AI task prioritization work?",
      answer: "Our AI analyzes factors like deadlines, task dependencies, your work patterns, and historical completion data to automatically prioritize tasks. It learns from your behavior to provide increasingly accurate suggestions over time."
    }
  ]

  return (
    <section className="faq-section" id="faq">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <p className="section-subtitle text-center">
              Everything you need to know about TaskFlow
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  key={index} 
                  eventKey={index.toString()}
                  className="faq-item"
                >
                  <Accordion.Header>
                    <span className="faq-question">{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-answer">{faq.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12} className="text-center">
            <div className="faq-cta" data-aos="fade-up">
              <p>Still have questions?</p>
              <button className="btn btn-primary-custom">
                Contact Our Support Team
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ