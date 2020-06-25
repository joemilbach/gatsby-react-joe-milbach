import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceCard from "../components/service-card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ServicesPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container as="section" fluid className="mt-4">
      <h1>Services - Main page title [H1]</h1>

      <Row className="mt-3">
        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>

        <Col md="6" lg="4" xl="3">
          <ServiceCard />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ServicesPage
