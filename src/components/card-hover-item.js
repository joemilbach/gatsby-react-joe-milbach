import React from "react"
import Img from "gatsby-image"
import { Eye } from 'react-bootstrap-icons'
import Col from "react-bootstrap/Col"

const CardHoverItem = (props) => {
  return (
    <Col as="article" md="6" xl="4" className="card-hover-item pt-4 mb-4" data-card={props.card} onClick={props.show}>
      <div className="card-container">
        <header className="pb-2">
          <h2 className="card-title h3">{props.title}</h2>
        </header>

        <div className="card-feature-img">
          <Eye />
          <Img
            fluid={props.src}
            alt={props.title}
            className="img-fluid"
          />
        </div>
      </div>
    </Col>
  )
}

export default CardHoverItem
