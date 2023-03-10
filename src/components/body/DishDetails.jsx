import React from 'react'
import Card from 'react-bootstrap/Card'
import DishComment from './DishComment'

export default function DishDetails(props) {
  return (
    <div>
      <Card style={{ width: '48rem' }}>
        <Card.Img variant='top' src={props.dish.image} />
        <Card.Body>
          <Card.Title>{props.dish.name}</Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <Card.Text>
            <p>
              <b>Price: ${props.dish.price}</b>
            </p>
            <p>
              <b>Label: {props.dish.label}</b>
            </p>
            <p>
              <b>category: {props.dish.category}</b>
            </p>
            <hr />
            <DishComment comments={props.comments}/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
