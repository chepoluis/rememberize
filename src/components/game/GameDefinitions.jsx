import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementIndex } from '../../store/slices/words/wordsSlice';
import { incrementPoints } from '../../store/slices/points/pointsSile';
import { ArrowComponent } from "./ArrowComponent";
import { AlertMessage } from "../alert/AlertMessage";

export const GameDefinitions = () => {
  const navigate = useNavigate();
  const { words: options = [], currentIndex } = useSelector(state => state.words);
  const { points } = useSelector(state => state.points);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  const checkCorrectAnswer = (word) => {
    if (!selectedOption) {
      setSelectedOption(true);
      setAlertMessage(false);

      // Increment points by one if the answer is correct :)
      if (word.answer)
        dispatch(incrementPoints());
    }
  }

  const changeColor = (answer) => {
    return answer ? 'correct-answer' : 'wrong-answer';
  }

  const incrementIndexByOne = () => {
    if (selectedOption) {
      dispatch(incrementIndex());
      setSelectedOption(false);
      navigate('/game');
      
      if(points === options.length){
        navigate('/winner');
      }
  
      if( currentIndex === options.length - 1 && points < options.length ){
        navigate('/nicetry');
      }
    } else {
      setAlertMessage(true);
    }
  }

  const listOptions = options[currentIndex][0].definitions.map((word) => (
    <p
      onClick={ () => checkCorrectAnswer(word) }
      className={`color-definitions ${ selectedOption || 'pointer' } 
        ${ (selectedOption && changeColor(word.answer)) || 'base-color-answer' }`}
      key={word.id}
    >
      {word.definition}
    </p>
  ));

  const titleList = options[currentIndex].map((x, index) => (
    <p key={index}>{x.word}</p>
  ));

  return (
    <div className="row justify-content-center">
      {
        alertMessage && <AlertMessage text={'Please select an option :)'} />
      }

      <Card className="game-card border-color">
        <Card.Header className="header-bg border-color">
          <br></br>
        </Card.Header>
        <Card.Body>
          <Card.Title className="title-card" align="left">
            <strong>{titleList}</strong>
          </Card.Title>
          <div>{listOptions}</div>
          <ArrowComponent actionArrow={ incrementIndexByOne }/>
        </Card.Body>
      </Card>
    </div>
  );
};
