import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ModalContent from "./card-hover-modal-content"
import CardHoverModal from "./card-hover-modal"
import CardHoverItem from "./card-hover-item"
import Row from "react-bootstrap/Row"

const CardHover = () => {
  const [modalShow, setModalShow] = useState(false)
  const [modalImage, setModalImage] = useState({})
  const [modalText, setModalText] = useState({})
  const imageData = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)/" }
            relativeDirectory: { eq: "screenshots" }
          }
        ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 708, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  let cardImages = []

  ModalContent.cards.map((card, cardIndex, cards) => (
    imageData.allFile.edges.map((image, imageIndex, images) => (
      (card.imgSrc === image.node.base) ? cardImages[cardIndex] = image.node : '')
    )
  ))

  const modalDetails = (text, image) => {
    setModalShow(true)
    setModalImage({...image})
    setModalText({...text})
  }

  return (
    <>
    <Row id="portfolio-grid" className="card-hover">
      {cardImages.map((data, index) => (
        <CardHoverItem key={index} card={data.base} title={data.base.split('.')[0]} src={data.childImageSharp.fluid} show={() => modalDetails(ModalContent.cards[index], data.childImageSharp.fluid)} />
      ))}
    </Row>
    <CardHoverModal show={modalShow} image={modalImage} text={modalText} onHide={() => setModalShow(false)} />
    </>
  )
}

export default CardHover
