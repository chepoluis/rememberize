import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gameImages } from "../../helpers/gameImages";
import { incrementIndex } from "../../store/slices/words/wordsSlice";
import { ArrowComponent } from "./ArrowComponent";

export const WordDefinition = () => {
  const navigate = useNavigate();

  const { words: options = [], currentIndex } = useSelector(
    (state) => state.words
  );
  const dispatch = useDispatch();

  const incrementIndexByOne = () => {
    
    navigate('/definitions');
  };

  const titleList = options[currentIndex].map((x, index) => (
    <p key={index}>{x.word}</p>
  ));

  const wordList = options[currentIndex].map((x, index) => (
    <p key={index}>{x.correctDefinition}</p>
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
          <div>{wordList}</div>
          <div className="col-12 text-center">
            <Card.Img
              className="image-definition"
              variant="bottom"
              src={gameImages(`./book.jpg`)}
            />
          </div>
          <ArrowComponent actionArrow={incrementIndexByOne} />
        </Card.Body>
      </Card>
    </div>
  );
};
