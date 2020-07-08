import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardHover from "../components/card-hover"
import Container from "react-bootstrap/Container"

const WorkPage = () => (
  <>
    <Layout>
      <SEO title="Joe Milbach's Work" description="See some of the work that I have done." bodyClass="sub work" />

      <Container as="main" id="site-main" fluid role="main">
        <section className="main-content pt-ms-2 pt-lg-4">
          <h1 className="m-0">See My Work</h1>

          <CardHover />
        </section>
      </Container>
    </Layout>
  </>
)

export default WorkPage
