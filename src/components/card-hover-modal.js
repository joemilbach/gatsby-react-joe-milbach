import React from "react"
import Img from "gatsby-image"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CardHoverModal = (props) => {
  return (
    <Modal size="xl" id="portfolio-details" {...props}>
      <button type="button" className="close-btn" aria-label="Close modal" onClick={props.onHide}>
        <span>
          <strong>Close</strong>
        </span>
      </button>

      <Modal.Body id="portfolio-detail-content">
        <article className="card-hover-item">
          <Row className="card-container">
            <header className="pb-2">
              <h2 className="card-title h3">{props.text.title}</h2>
            </header>

            <Col lg={{ span: 5, order: 1 }} className="card-feature-img col-grid order-2 pr-lg-4">
              {((Object.keys(props.image).length === 0) ? '' :
                <Img
                  fluid={props.image}
                  alt={`${props.text.title} screenshot`}
                  className="img-fluid"
                />
              )}
            </Col>

            <Col lg={{ span: 7, order: 2 }} className="card-content order-1 col-lg-7">
              <p>{props.text.description}</p>
              <ul>
                {((Object.keys(props.text).length === 0) ? '' :
                  props.text.services.map((service, index) => <li key={index}>{service}</li>)
                )}
              </ul>
              <p><a target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary" href={props.text.url}>Visit Site</a></p>
            </Col>
          </Row>
        </article>
      </Modal.Body>
    </Modal>
  )
}

export default CardHoverModal
