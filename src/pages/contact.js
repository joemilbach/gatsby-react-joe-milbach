import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import { TelephoneFill, EnvelopeFill  } from 'react-bootstrap-icons'
import Facebook from '../images/icn/facebook-square-brands.svg'
import LinkedIn from '../images/icn/linkedin-brands.svg'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ContactPage = () => (
  <Layout page="contact">
    <SEO title="Contact" bodyClass="sub contact" />

    <Container id="site-main" as="main" fluid="lg" role="main">
      <Row>
        <Col lg="6" xl={{ span: 5, offset: 1}} className="main-content pt-sm-2 pt-lg-4 pt-xl-5">
          <h1>Get ahold of Me</h1>
          <p className="mb-2">Interested in reaching me? Fill out the form or use the links below.</p>
          <ul className="list-inline">
            <li className="list-inline-item mr-4"><a href="mailto:joemilbach@gmail.com"><EnvelopeFill className="h2" /><span className="sr-only">Email me</span></a></li>
            <li className="list-inline-item mr-4"><a href="tel:15073164658"><TelephoneFill className="h2" /><span className="sr-only">Call me</span></a></li>
            <li className="list-inline-item mr-4"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/joemilbach"><Facebook  className="h2" /><span className="sr-only">Find me on Facebook</span></a></li>
            <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/joemilbach"><LinkedIn className="h2" /><span className="sr-only">Connect with me on LinkedIn</span></a></li>
          </ul>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
