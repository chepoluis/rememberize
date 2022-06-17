import React from 'react'
import { Carousel } from 'react-bootstrap'

import img1 from '../../assets/img/instruction1.png';
import img2 from '../../assets/img/instruction2.png';
import img3 from '../../assets/img/instruction3.png';

export const InstructionsScreen = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <Carousel className='instructions-carousel' variant="dark" >
                    <Carousel.Item interval={7000}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="instruction1"
                        />
                
                    </Carousel.Item>
                    <Carousel.Item interval={9000}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="instruction2"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="instruction3"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
