import React from 'react'
import { Carousel } from 'react-bootstrap'

import { gameImages } from '../../helpers/gameImages';

export const InstructionsScreen = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <Carousel className='instructions-carousel' variant="dark" >
                    <Carousel.Item interval={7000}>
                        <img
                            className="d-block w-100"
                            src={gameImages(`./instruction1.png`)}
                            alt="instruction1"
                        />
                
                    </Carousel.Item>
                    <Carousel.Item interval={9000}>
                        <img
                            className="d-block w-100"
                            src={gameImages(`./instruction2.png`)}
                            alt="instruction2"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block w-100"
                            src={gameImages(`./instruction3.png`)}
                            alt="instruction3"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
