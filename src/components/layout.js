/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../css/styles.scss"
import Container from "react-bootstrap/Container"

const Layout = ({ children, page }) => {
  return (
    <>
      <Header currentPage={page} />

      <>{children}</>

      <Container as="footer" id="site-footer" role="contentinfo">
        <p className="copyright">© {new Date().getFullYear()} Joe Milbach. All rights reserved.</p>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
