import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container as="section" fluid className="mt-4">
      <h1>Home - Main page title [H1]</h1>

      <Row className="align-items-center mt-4">
        <Col lg="4">
          <img className="img-fluid" src="https://via.placeholder.com/640x480/ccc/fff.png?text=Image" alt="placeholder" />
        </Col>

        <Col lg="8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum.  {<Link to="/about/">Vestibulum sed arcu non odio</Link>} euismod lacinia at quis risus. Malesuada proin libero nunc consequat.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
