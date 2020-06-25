import React, { useState } from 'react'
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const ContactForm = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Form className="form row" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} lg="6" controlId="formName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" />
      </Form.Group>

      <Form.Group as={Col} lg="6" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required placeholder="name@domain.com" />
      </Form.Group>

      <Form.Group as={Col} lg="6" controlId="formSubject" className="col-12 visible d-none">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formMessage" className="col-12">
        <Form.Label>Comment/Message</Form.Label>
        <Form.Control as="textarea" required rows="5" placeholder="Your message here..." />
      </Form.Group>

      <Col>
        <Button variant="primary" type="submit">Submit</Button>
      </Col>
    </Form>
  )
}

export default ContactForm
