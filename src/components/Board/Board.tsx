import React from "react";
import { StyledBoard, StyledBoardScoreIncrement } from "./Board.styles.ts";
import { state$ } from "../../store/store.ts";

const Board: React.FC = () => {
  const word = state$.actions.draggedLetters.get().join("");
  const allWords = state$.actions.allWords.peek();
  const lastWord =
    allWords.length > 0 && allWords[allWords.length - 1].toUpperCase();
  const usedWords = state$.actions.usedWords.peek();
  const lastUsedWord =
    usedWords.length > 0 && usedWords[usedWords.length - 1].toUpperCase();
  const isLastWordValid =
    lastUsedWord === lastWord &&
    typeof lastUsedWord === "string" &&
    typeof lastWord === "string";
  const score = state$.actions.score.get();
  const lastScoreIncrement = state$.actions.lastScoreIncrement.peek();
  const isDragging = state$.actions.isDragging.get();

  const renderIncrementIndicator = () => {
    if (lastWord && !isDragging) {
      if (isLastWordValid) {
        return (
          <StyledBoardScoreIncrement
            $isValidWord={isLastWordValid}
          >{`${lastWord} +${lastScoreIncrement}`}</StyledBoardScoreIncrement>
        );
      } else {
        return (
          <StyledBoardScoreIncrement
            $isValidWord={isLastWordValid}
          >{`${lastWord} není validní slovo`}</StyledBoardScoreIncrement>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <StyledBoard>
      <h3>Slovo: </h3>
      <h3>{word}</h3>
      <h3>{`Skóre: ${score}`}</h3>
      {renderIncrementIndicator()}
    </StyledBoard>
  );
};

export default Board;
