import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const AboutPage = () => (
  <Layout page="about">
    <SEO title="About" bodyClass="sub about" />

    <Container id="site-main" as="main" fluid="lg" role="main">
      <Row>
        <Col sm="7" md="10" lg={{ span: 6, offset: 6 }} className="main-content mt-lg-5">
          <h1>Little About Me</h1>
          <p>I am a web designer and developer from Cedar Rapids, IA. I am experienced with websites, web apps and mobile apps. I keep my code neat and love finding ways to optimize my projects. I work best with a team but am self motivated if I need to go it alone. I am always willing to jump in and learn new things.</p>
          <h2>What I know</h2>
          <p>I have worked with many different CMS's from Wordpress and Hubspot to ones that are home grown. My current toolset I use are PHP, JavaScript, jQuery, SCSS / SASS and many others I use to bring ideas to life.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
