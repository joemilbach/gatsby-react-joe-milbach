import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ContactForm from "../components/contact-form"

library.add(faMapMarkerAlt,faPhone,faEnvelope)

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container as="section" fluid className="mt-4">
      <h1>Contact - Main page title [H1]</h1>

      <Row>
        <Col lg="9" className="mb-4 mb-lg-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero.</p>

          <ContactForm />
        </Col>

        <Col lg="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <FontAwesomeIcon icon="map-marker-alt" size="2x" className="mt-4" />
              <p>City, ST 12345, USA</p>
            </li>
            <li>
              <FontAwesomeIcon icon="phone" size="2x" className="mt-4" />
              <p>(123) 456-7890</p>
            </li>
            <li>
              <FontAwesomeIcon icon="envelope" size="2x" className="mt-4" />
              <p>name@domain.com</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
