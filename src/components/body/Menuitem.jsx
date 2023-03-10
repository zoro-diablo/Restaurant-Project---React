import React, { Fragment } from 'react'
import { Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export default function Menuitem(props) {
  return (
    <div>
      <Fragment>
        <Container>
          <Col>
          
      <Card style={{ width: '25rem' }}>
        <Card.Img variant='top' src={props.dish.image} />
        <Card.Body>
          <Card.Title
            style={{ cursor: 'pointer' }}
            onClick={()=>props.DishSelect(props.dish)}
          >
            {props.dish.name}
          </Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <Card.Text>
            <p>
              <b>Price: ${props.dish.price}</b>
            </p>
            <p>
              <b>Label: {props.dish.label}</b>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
          </Col>
        </Container>
      </Fragment>
    </div>
  )
}
