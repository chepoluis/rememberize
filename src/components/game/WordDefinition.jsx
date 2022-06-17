import React from 'react'
import { Card, Button } from 'react-bootstrap'
import img4 from '../../assets/img/book.jpg';

export const WordDefinition = () => {
    return (
        <div className="row justify-content-center">
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Book</Card.Title>
                    <Card.Text>
                        Set of sheets joined to form a volume that is filled with different data to keep 
                        a record.
                    </Card.Text>
                    
                    <Card.Img className="image-definition" variant="bottom" src= {img4}  />
                    <br></br>

                    <Button variant="primary">Next</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
