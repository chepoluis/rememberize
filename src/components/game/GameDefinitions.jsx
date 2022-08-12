import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementIndex } from '../../store/slices/words/wordsSlice';
import { ArrowComponent } from "./ArrowComponent";

export const GameDefinitions = () => {
  const navigate = useNavigate();
  const {words: options = [], currentIndex } = useSelector(state => state.words);
  const dispatch = useDispatch();
  console.log(options )

  const [selectedOption, setselectedOption] = useState(false);

  const checkCorrectAnswer = () => {
    if (!selectedOption) {
      setselectedOption(true);
    }
  }

  const changeColor = (answer) => {
    return answer ? 'correct-answer' : 'wrong-answer';
  }

  const incrementIndexByOne = () => {
    if (selectedOption ) {
      dispatch(incrementIndex());
      setselectedOption(false);
      navigate('/game');
    }

  }

  const listOptions = options[currentIndex][0].definitions.map((word) => (
    <p
      onClick={ () => checkCorrectAnswer() }
      className={`color-definitions ${ selectedOption || 'pointer' } 
        ${ selectedOption && changeColor(word.answer) || 'base-color-answer' }`}
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
