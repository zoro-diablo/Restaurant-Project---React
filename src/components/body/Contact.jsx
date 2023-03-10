import React, { Component, Fragment } from 'react'
import { Container ,Row,Form,Button,Col,FloatingLabel} from 'react-bootstrap'
export class Contact extends Component {
  constructor(){
    super();
    this.state={
        firstname:"",
        lastname:"",
        mobile:"",
        email:"",
        agree:false,
        message:"",
      }
    
      
    }
    handleInputChange=event=>{
      const value=event.target==='checkbox' ? event.target.checked:event.target.value
      const name=event.target.name
      this.setState(
        {[name]:value}
      )
    }
    handleSubmit=event=>{
      console.log(this.state)
      event.preventDefault()
    }
    render() {
      document.title = 'Contact Page'
    return (
      <div>
        <Fragment>
          <Container>
            <h1>Send us your Feedback</h1>
            <Form onSubmit={this.handleSubmit}>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='firstname'
                    placeholder='First Name'
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastname'
                    placeholder='Last Name'
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    name='mobile'
                    type='number'
                    placeholder='Mobile No'
                    value={this.state.mobile}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Row>

              <FloatingLabel
                controlId='floatingTextarea'
                label=''
                className='mb-3'
              ></FloatingLabel>
              <Form.Label>Message</Form.Label>
              <FloatingLabel
                controlId='floatingTextarea2'
                label='Please write here...'
              >
                <Form.Control
                  as='textarea'
                  placeholder='Leave a comment here'
                  name='message'
                  style={{ height: '100px' }}
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </FloatingLabel>
              <Form.Group className='mb-3' id='formGridCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='May we contact you?'
                  name='agree'
                  checked={this.state.agree}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Container>
        </Fragment>
      </div>
    )
  }
}

export default Contact