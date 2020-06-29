import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
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
          <p>Interested in reaching me? Contact me with the information below.</p>

          <ContactForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
