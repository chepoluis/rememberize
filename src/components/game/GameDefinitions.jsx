import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { ArrowComponent } from "./ArrowComponent";

export const GameDefinitions = () => {

  const [options, setOptions] = useState(
    [
      {
        id: 1,
        option:
          "It is a product used to remove grease, dust, dead skin and other unwanted particles that accumulate in the hair.",
        answer: false,
      },
      {
        id: 2,
        option:
          "Set of sheets joined to form a volume that is filled with different data to keep a record.",
        answer: true,
      },
      {
        id: 3,
        option:
          " Quadrangular utensil made of leather or other flexible material used to carry documents, papers or books; It may have a lid and a handle or straps to carry it.",
        answer: false,
      }
    ]
  )

  const [selectedOption, setselectedOption] = useState(false)

  const checkCorrectAnswer = () => {
    if (!selectedOption) {
      setselectedOption(true);
    }
  }

  const changeColor = (answer) => {
    return answer ? 'correct-answer' : 'wrong-answer';
  }

  const listOptions = options.map((word) => (
    <p
      onClick={ () => checkCorrectAnswer() }
      className={`color-definitions ${ selectedOption || 'pointer' } 
        ${ selectedOption && changeColor(word.answer) || 'base-color-answer' }`}
      key={word.id}
    >
      {word.option}
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
          <ArrowComponent />
        </Card.Body>
      </Card>
    </div>
  );
};
