import React from "react";
import {
  StyledBoard,
  StyledBoardInvalidH3,
  StyledBoardScoreIncrement,
} from "./Board.styles.ts";
import { state$ } from "../../store/store.ts";
import { motion } from "framer-motion";

const Board: React.FC = () => {
  const word = state$.actions.draggedLetters.get().join("");
  const allWords = state$.actions.allWords.peek();
  const lastWord = allWords.length > 0 && allWords[allWords.length - 1];
  const usedWords = state$.actions.usedWords.peek();
  const lastUsedWord = usedWords.length > 0 && usedWords[usedWords.length - 1];
  const isLastWordValid =
    lastUsedWord === lastWord &&
    typeof lastUsedWord === "string" &&
    typeof lastWord === "string";
  const score = state$.actions.score.get();
  const lastScoreIncrement = state$.actions.lastScoreIncrement.peek();
  const isDragging = state$.actions.isDragging.get();

  const renderIncrementIndicator = () => {
    if (lastWord && !isDragging && isLastWordValid) {
      return (
        <StyledBoardScoreIncrement
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >{`+${lastScoreIncrement}`}</StyledBoardScoreIncrement>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledBoard>
      <h3>Slovo: </h3>
      {lastWord && !isLastWordValid && !isDragging ? (
        <StyledBoardInvalidH3
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >{`${lastWord} není validní`}</StyledBoardInvalidH3>
      ) : (
        <h3>{word}</h3>
      )}
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >{`Skóre: ${score}`}</motion.h3>
      {renderIncrementIndicator()}
    </StyledBoard>
  );
};

export default Board;
