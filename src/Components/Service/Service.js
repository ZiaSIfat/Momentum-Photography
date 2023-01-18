import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description1, description2, description3, description4 } = service;
    return (
        <div>
            <Card className='card-body'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price} tk
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{description1}</ListGroup.Item>
                    <ListGroup.Item>{description2}</ListGroup.Item>
                    <ListGroup.Item>{description3}</ListGroup.Item>
                    <ListGroup.Item>{description4}</ListGroup.Item>
                </ListGroup>
                <button className='mt-2 checkout-btn'>Checkout</button>
            </Card>

        </div>
    );
};

export default Service;