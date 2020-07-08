import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Joe Milbach Web Developer/Designer" description="Hello. As a Web Developer / Designer, I work on projects ranging from websites to web applications. I love taking an idea and giving it life on the web. My web designs are user-centric and focus on utilizing the latest technology." bodyClass="home" />

    <Container as="main" fluid="lg" role="main">
      <section className="hero-content">
        <h1>From Paper to Pixels</h1>
        <p><em>I love bringing ideas to life</em></p>
      </section>
    </Container>
  </Layout>
)

export default IndexPage
