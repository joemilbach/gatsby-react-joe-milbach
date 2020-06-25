import React from 'react'
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

const ServiceCard = (props) => {
  return (
    <Card className="mt-1 mb-4">
      <Link to="/contact/">
        <Card.Img variant="top" src="https://via.placeholder.com/360x165/ccc/fff.png?text=Image" />
      </Link>

      <Card.Body>
        <Card.Title as="h2" className="h3">
          <Link to="/contact/">Service Name</Link>
        </Card.Title>

        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard
