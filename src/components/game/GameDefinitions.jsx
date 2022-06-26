import React from 'react'
import { Card } from 'react-bootstrap'
import { ArrowComponent } from './ArrowComponent'


export const GameDefinitions = () => {
    return (
        <div className="row justify-content-center" >
            <Card className='game-card border-color'>
                <Card.Header className="header-bg border-color">
                <br></br>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="title-card" align="left"><strong>Book</strong></Card.Title>
                    <div>
                        <p className='color-definitions'>
                            It is a product used to remove grease, dust, dead skin and other unwanted particles that accumulate in the hair.
                        </p>
                        <p className='color-definitions'>
                            Set of sheets joined to form a volume that is filled with different data to keep 
                            a record.
                        </p>
                        <p className='color-definitions'>
                            Quadrangular utensil made of leather or other flexible material used to carry documents, papers or books; It may have a lid and a handle or straps to carry it.
                        </p>
                    </div>
                    <ArrowComponent/>
                </Card.Body>
            </Card>
        </div>
    )
}
