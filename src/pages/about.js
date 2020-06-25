import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"


const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container as="section" fluid className="mt-4">
      <h1>About - Main page title [H1]</h1>
      <h2>Subheading [h2]</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum.  {<Link to="/services/">Vestibulum sed arcu non odio</Link>} euismod lacinia at quis risus. Malesuada proin libero nunc consequat.</p>
      <p>Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Amet volutpat consequat mauris nunc congue nisi. Eu ultrices vitae auctor eu augue ut. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Enim nec dui nunc mattis enim ut tellus elementum. Id venenatis a condimentum vitae sapien.</p>
      <h3>Tertiary Heading [H3]</h3>
      <ul>
        <li>Nisi vitae suscipit tellus mauris.</li>
        <li>Feugiat in fermentum posuere urna nec.</li>
        <li>Purus viverra accumsan in nisl nisi scelerisque eu ultrices.</li>
      </ul>
    </Container>
  </Layout>
)

export default AboutPage
