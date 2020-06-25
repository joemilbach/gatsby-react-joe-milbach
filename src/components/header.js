import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <Container as="header" fluid id="site-nav" role="banner">
    <div className="d-flex align-items-center">
      <Link to="/" className="d-flex flex-shrink-1 flex-grow-0">
        <img className="img-fluid" src="https://via.placeholder.com/145x75/007bff/fff.png?text=Logo" alt="logo" />
      </Link>

      <Nav as="nav" className="flex-grow-1" role="navigation">
        <Link to="/" className="home nav-link">Home</Link>
        <Link to="/about/" className="about nav-link">About</Link>
        <Link to="/services/" className="services nav-link">Services</Link>
        <Link to="/contact/" className="contact nav-link">Contact</Link>
      </Nav>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
