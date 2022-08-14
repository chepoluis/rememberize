import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { gameImages } from '../../helpers/gameImages';
import { ShowScore } from './ShowScore';
import { resetIndex } from '../../store/slices/words/wordsSlice';
import { resetPoints } from '../../store/slices/points/pointsSile';

export const Winner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Resetear index
    const resetIndexAndPlay = () => {
        dispatch(resetIndex());
        dispatch(resetPoints());
        navigate('/game');
    }

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

                    <ShowScore />

                    <br/>
                    <div align="center">
                        <h4><strong>Do you want to play again?</strong></h4> 
                    </div>
                    <Button 
                        className='button-yes' 
                        variant="success"
                        onClick={ () => resetIndexAndPlay() }
                    >
                        Yes
                    </Button>

                    <Button 
                        className='button-no' 
                        variant="danger"
                        onClick={ () => navigate('/') }
                    >
                        No
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
