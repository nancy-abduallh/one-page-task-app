import React, { useState, useEffect } from 'react'
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <BSNavbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand href="#home" className="d-flex align-items-center">
          <i className="fas fa-tasks me-2"></i>
          <span className="fw-bold">TaskFlow</span>
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('features')}>Features</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('how-it-works')}>How It Works</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('integrations')}>Integrations</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('pricing')}>Pricing</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('faq')}>FAQ</Nav.Link>
          </Nav>
          
          <div className="d-flex ms-lg-3">
            <Button 
              variant="outline-light" 
              className="btn-primary-custom me-3"
              onClick={() => scrollToSection('pricing')}
            >
              Sign In
            </Button>
            <Button 
              className="btn-primary-custom"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started Free
            </Button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar