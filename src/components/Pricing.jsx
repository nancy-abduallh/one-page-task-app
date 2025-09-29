import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const PLANS = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for individuals getting started",
    features: [
      "Up to 5 projects",
      "Basic task management",
      "1GB storage",
      "Email support",
      "Basic analytics"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: { monthly: 12, annual: 120 },
    description: "Ideal for professionals and small teams",
    features: [
      "Unlimited projects",
      "Advanced task management",
      "10GB storage",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom fields"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Team",
    price: { monthly: 29, annual: 290 },
    description: "Best for growing teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Advanced security",
      "Dedicated manager",
      "Custom workflows",
      "API access",
      "SAML SSO"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [maxFeatures, setMaxFeatures] = useState(0)

  useEffect(() => {
    const max = Math.max(...PLANS.map(plan => plan.features.length))
    setMaxFeatures(max)
  }, [])

  const getPrice = (price) => {
    const amount = isAnnual ? price.annual : price.monthly
    if (amount === 0) return 'Free'
    const displayAmount = isAnnual ? Math.floor(amount / 12) : amount
    return `$${displayAmount}`
  }

  const getFeaturesWithPlaceholders = (features, maxCount) => {
    const placeholdersCount = Math.max(0, maxCount - features.length)
    const placeholders = Array(placeholdersCount).fill(null)
    return [...features, ...placeholders]
  }

  return (
    <section className="pricing-section" id="pricing">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title" data-aos="fade-up">
              Simple, Transparent Pricing
            </h2>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-5">
          <Col lg={6} className="text-center">
            <div 
              className="billing-toggle d-flex align-items-center justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className={!isAnnual ? 'fw-bold text-primary fs-5' : 'text-muted fs-5'}>
                Monthly
              </span>
              <div className="form-check form-switch mx-5 mb-0" style={{transform: 'scale(1.3)'}}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                />
              </div>
              <span className={isAnnual ? 'fw-bold text-primary fs-5' : 'text-muted fs-5'}>
                Annual <span className="badge bg-success ms-1">Save 20%</span>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="align-items-stretch">
          {PLANS.map((plan, index) => (
            <Col lg={4} md={6} key={index} className="d-flex mb-4">
              <div 
                className={`pricing-card w-100 d-flex flex-column ${plan.popular ? 'popular' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="pricing-header">
                  <h4 className="pricing-title">{plan.name}</h4>
                  <div className="pricing-price">
                    {getPrice(plan.price)}
                  </div>
                  {plan.price.monthly > 0 && (
                    <div className="pricing-period">
                      {isAnnual ? 'per month, billed annually' : 'per month'}
                    </div>
                  )}
                  <p className="text-muted mb-0">{plan.description}</p>
                </div>
                
                <ul className="pricing-features flex-grow-1">
                  {getFeaturesWithPlaceholders(plan.features, maxFeatures).map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={feature ? '' : 'placeholder-feature'}
                    >
                      {feature && <i className="fas fa-check me-2"></i>}
                      {feature || 'placeholder'}
                    </li>
                  ))}
                </ul>
                
                <div className="pricing-footer mt-auto">
                  <Button className="btn-pricing">
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Pricing