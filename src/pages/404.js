import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TelephoneFill, EnvelopeFill  } from 'react-bootstrap-icons'
import Facebook from '../images/icn/facebook-square-brands.svg'
import LinkedIn from '../images/icn/linkedin-brands.svg'
import Container from "react-bootstrap/Container"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oh No Page Not Found" bodyClass="sub contact" />
    <Container as="section" fluid className="mt-4">
      <h1>Page Not Found</h1>
      <p>Looks like the page you are looking for is not here anymore or you typed in the wrong URL. Use the navigation or the information below to get a hold of me.</p>
      <ul className="list-inline">
        <li className="list-inline-item mr-4"><a href="mailto:joemilbach@gmail.com"><EnvelopeFill className="h2" /><span className="sr-only">Email me</span></a></li>
        <li className="list-inline-item mr-4"><a href="tel:15073164658"><TelephoneFill className="h2" /><span className="sr-only">Call me</span></a></li>
        <li className="list-inline-item mr-4"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/joemilbach"><Facebook  className="h2" /><span className="sr-only">Find me on Facebook</span></a></li>
        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/joemilbach"><LinkedIn className="h2" /><span className="sr-only">Connect with me on LinkedIn</span></a></li>
      </ul>
    </Container>
  </Layout>
)

export default NotFoundPage
