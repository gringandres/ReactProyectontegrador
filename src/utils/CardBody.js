import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function CardBody({title, img}) {

  return (
    <div>
      <Card style={{ width: '18rem', paddingRight:"10px" }}>
        <Card.Img variant="top" src={img} />
        <ListGroup className="list-group-flush">
          <ListGroupItem>{title}</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  )
}

export default CardBody
