import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Reviews = () => {
  const reviews = [
    {
      text: "TaskFlow has completely transformed how our team works. We've seen a 40% increase in productivity since we started using it.",
      author: "Sarah Chen",
      position: "Project Manager at TechCorp",
      initials: "SC"
    },
    {
      text: "As a freelancer, staying organized is crucial. TaskFlow makes it effortless to manage multiple clients and deadlines.",
      author: "Marcus Johnson",
      position: "Freelance Designer",
      initials: "MJ"
    },
    {
      text: "The intuitive interface and powerful features make TaskFlow the best task management app I've ever used.",
      author: "Emily Davis",
      position: "Software Engineer",
      initials: "ED"
    }
  ]

  return (
    <section className="reviews-section" id="reviews">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title" data-aos="fade-up">
              What Our Users Say
            </h2>
          </Col>
        </Row>
        <Row className="align-items-stretch">
          {reviews.map((review, index) => (
            <Col lg={4} md={6} key={index} className="d-flex mb-4">
              <div 
                className="review-card w-100 d-flex flex-column"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="review-text flex-grow-1">
                  {review.text}
                </div>
                <div className="review-author mt-auto">
                  <div className="author-avatar">
                    {review.initials}
                  </div>
                  <div className="author-info">
                    <h5 className="author-name">{review.author}</h5>
                    <p className="author-position">{review.position}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Reviews