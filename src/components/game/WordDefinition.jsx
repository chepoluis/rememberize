import React from 'react'
import { Card } from 'react-bootstrap'
import { gameImages } from '../../helpers/gameImages'

export const WordDefinition = () => {
    return (
        <div className="row justify-content-center" >
            <Card className='game-card border-color'>
                <Card.Header className="header-bg border-color">
                <br></br>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="title-card" align="left"><strong>Book</strong></Card.Title>
                    <Card.Text>
                        Set of sheets joined to form a volume that is filled with different data to keep 
                        a record.
                    </Card.Text>
                    <div className="col-12 text-center">
                        <Card.Img className="image-definition"  variant="bottom" src={gameImages(`./book.jpg`)}  />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='arrow-right'>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
