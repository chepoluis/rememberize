import React from 'react';
import { useSelector } from "react-redux";

export const ShowScore = () => {
    const state = useSelector(state => state);
    const { points: myPoints = 0 } = state.points;
    const { words: totalPoints = 0 } = state.words;

    return (
        <div align="center" >
            <h3> <strong>Your score: { myPoints } - { totalPoints.length } </strong></h3>
        </div>
    )
}
