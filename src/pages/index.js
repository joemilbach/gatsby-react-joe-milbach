import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" bodyClass="home" />

    <Container as="main" fluid="lg" role="main">
      <section className="hero-content">
        <h1>From Paper to Pixels</h1>
        <p><em>I love bringing ideas to life</em></p>
      </section>
    </Container>
  </Layout>
)

export default IndexPage
