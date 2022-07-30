import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementIndex } from '../../store/slices/words/wordsSlice';
import { ArrowComponent } from "./ArrowComponent";

export const GameDefinitions = () => {
  const {words: options = [], currentIndex } = useSelector(state => state.words);
  const dispatch = useDispatch();

  const [selectedOption, setselectedOption] = useState(false)

  const checkCorrectAnswer = () => {
    if (!selectedOption) {
      setselectedOption(true);
    }
  }

  const changeColor = (answer) => {
    return answer ? 'correct-answer' : 'wrong-answer';
  }

  const incrementIndexByOne = () => {
    dispatch(incrementIndex())
  }

  const listOptions = options[currentIndex].map((word) => (
    <p
      onClick={ () => checkCorrectAnswer() }
      className={`color-definitions ${ selectedOption || 'pointer' } 
        ${ selectedOption && changeColor(word.answer) || 'base-color-answer' }`}
      key={word.id}
    >
      {word.definition}
    </p>
  ));
  return (
    <div className="row justify-content-center">
      <Card className="game-card border-color">
        <Card.Header className="header-bg border-color">
          <br></br>
        </Card.Header>
        <Card.Body>
          <Card.Title className="title-card" align="left">
            <strong>Book</strong>
          </Card.Title>
          <div>{listOptions}</div>
          <ArrowComponent actionArrow={ incrementIndexByOne }/>
        </Card.Body>
      </Card>
    </div>
  );
};
