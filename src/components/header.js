import React, { Component } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      shrink: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.fixedHeader)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.fixedHeader)
  }

  fixedHeader = () => {
    const scrollTop = window.pageYOffset;
    const affixHeader = document.getElementById('site-header')
    let affixTop = affixHeader.offsetTop;

    // Firefox bug when at bottom of page
    if(affixTop < 0) {
      affixTop = 0;
    }

    if(scrollTop > affixTop + 10) {
      affixHeader.classList.add('shrink');

    } else {
      affixHeader.classList.remove('shrink');
    }
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state
    const currentScrollPos = window.pageYOffset
    const shrink = prevScrollpos < currentScrollPos + 10

    this.setState({
      prevScrollpos: currentScrollPos,
      shrink
    })
  }

  mobileNavOpen = () => {
    document.getElementById('site-nav').classList.add('open')
    document.body.classList.add('nav-open')
  }

  mobileNavClose = () => {
    document.getElementById('site-nav').classList.remove('open')
    document.body.classList.remove('nav-open')
  }

  render() {
    return (
      <Container as="header" fluid id="site-header" className={((this.state.shrink) ? `shrink` : '')} role="banner">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" id="site-logo">
            <strong className="d-lg-block">J<span className="d-none d-md-inline">oe </span>M<span className="d-none d-md-inline">ilbach</span></strong>
            <small className="d-none d-md-inline d-lg-block">Web Developer</small>
            <i></i><i></i>
          </Link>

          <button id="xs-nav-control" className="d-md-none" type="button" onClick={this.mobileNavOpen} aria-label="Toggle navigation">M<span className="icn-menu"><i></i><i></i><i></i></span>NU</button>

          <div id="site-nav">
            <Nav as="nav" activeKey="" role="navigation">
              <button type="button" id="xs-nav-close" className="close-btn" onClick={this.mobileNavClose} aria-label="Close navigation">
                <span>
                  <strong>Close</strong>
                </span>
              </button>
              <Nav.Link href="/about/" eventKey="about">About</Nav.Link>
              <Nav.Link href="/work/" eventKey="work">Work</Nav.Link>
              <Nav.Link href="/contact/" eventKey="contact">Contact</Nav.Link>
            </Nav>
          </div>
        </div>
      </Container>
    )
  }
}
