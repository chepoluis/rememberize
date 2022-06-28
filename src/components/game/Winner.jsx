import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { gameImages } from '../../helpers/gameImages'

export const Winner = () => {
  return (
    <div className="row justify-content-center" >
            <Card className='game-card border-color'>
                <Card.Header className="header-bg border-color">
                <br/>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="title-winner" align="center"><strong>Good Job!</strong></Card.Title>
                    <div className="col-12 text-center">
                        <Card.Img className='trophy'  variant="bottom" src={gameImages(`./trophy.png`)}  />
                    </div>
                    <br/>
                    <div align="center">
                        <h4><strong>Do you want to continue?</strong></h4> 
                    </div>
                    <Button className='button-yes' variant="success">Yes</Button>
                    <Button className='button-no' variant="danger">No</Button>
                    
                </Card.Body>
            </Card>
        </div>
  )
}
