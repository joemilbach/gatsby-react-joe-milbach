import React, {Component} from "react"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

class ContactForm  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      name: '',
      email: '',
      message: '',
      emailSent: null,
      emailError: null
    }
  }

  handleCHange = input => e => {
    this.setState({
      [input]: e.target.value,
      emailSent: null
    })
	}

  handleSubmit = (event) => {
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()

      const apiBase = 'http://joemilbach.com/api.php'
      let apiQuery = `${apiBase}?email=${this.state.email}&message=${this.state.message}&name=${this.state.name}`

      fetch(apiQuery)
      .then(response => response.json())
      .then(results => {
        if(results.sent) {
          this.setState({
            validated: false,
            name: '',
            email: '',
            message: '',
            emailSent: results.sent,
            emailError: null
          })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({ emailError: error.message })
      })
    }

    this.setState({validated: true})
  }

  render() {
    const {validated, name, email, message, emailSent, emailError} = this.state;
	  return(
      <>
      {emailSent &&
        <Alert variant="success">
          Thank you for dropping me a message
        </Alert>
      }
      {emailError &&
        <Alert variant="danger">
          {emailError}
        </Alert>
      }
      <Form className="form row" noValidate validated={validated} onSubmit={this.handleSubmit}>
        <Form.Group as={Col} lg="6" controlId="formName" className="mb-4">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" value={name} onChange={this.handleCHange('name')} placeholder="John Doe" />
        </Form.Group>

        <Form.Group as={Col} lg="6" controlId="formEmail" className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={this.handleCHange('email')} required placeholder="name@domain.com" />
          <Form.Control.Feedback type="invalid">
            Please add your email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} lg="6" controlId="formSubject" className="col-12 visible d-none">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="col-12 mb-4">
          <Form.Label>Comment/Message</Form.Label>
          <Form.Control as="textarea" value={message} onChange={this.handleCHange('message')} required rows="5" placeholder="What would you like to say?" />
          <Form.Control.Feedback type="invalid">
            Please type a short message
          </Form.Control.Feedback>
        </Form.Group>

        <Col>
          <Button variant="outline-primary" className="px-5" type="submit">Submit</Button>
        </Col>
      </Form>
      </>
    )
  }
}

export default ContactForm
