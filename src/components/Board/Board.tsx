import React from "react";
import {
  StyledBoard,
  StyledBoardInvalidH3,
  StyledBoardScoreIncrement,
  StyledBoardScoreProgressBar,
  StyledBoardTimerH3,
} from "./Board.styles.ts";
import { state$ } from "../../store/store.ts";
import { motion } from "framer-motion";

const seconds = state$.timer.seconds;
const limit = state$.timer.limit;

const Board: React.FC = () => {
  const isLastTenSeconds = seconds.get() <= 10;
  const word = state$.words.draggedLetters.get().join("");
  const allWords = state$.words.allWords.peek();
  const lastWord = allWords.length > 0 && allWords[allWords.length - 1];
  const usedWords = state$.words.usedWords.peek();
  const lastUsedWord = usedWords.length > 0 && usedWords[usedWords.length - 1];
  const isLastWordValid =
    lastUsedWord === lastWord &&
    typeof lastUsedWord === "string" &&
    typeof lastWord === "string";
  const score = state$.score.score.get();
  const lastScoreIncrement = state$.score.lastScoreIncrement.peek();
  const isDragging = state$.actions.isDragging.get();

  const breathingVariants = {
    breatheIn: { scale: isLastTenSeconds ? 1.5 : 1 },
    breatheOut: { scale: 1 },
  };

  const breathingTransition = {
    duration: 0.5,
    repeat: 20,
    repeatType: "reverse" as "loop",
  };

  const renderIncrementIndicator = () => {
    if (lastWord && !isDragging && isLastWordValid) {
      return (
        <StyledBoardScoreIncrement
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >{`${lastWord} +${lastScoreIncrement}`}</StyledBoardScoreIncrement>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledBoard>
      <StyledBoardScoreProgressBar
        $percent={(seconds.get() / limit.get()) * 100}
      />
      <StyledBoardTimerH3
        variants={breathingVariants}
        initial="breatheOut"
        animate="breatheIn"
        exit="breatheOut"
        transition={breathingTransition}
        $color={isLastTenSeconds ? "red" : "black"}
      >{`Čas: ${seconds.get()}`}</StyledBoardTimerH3>
      {lastWord && !isLastWordValid && !isDragging ? (
        <StyledBoardInvalidH3
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >{`${lastWord} není validní`}</StyledBoardInvalidH3>
      ) : (
        <h3>{word.length > 0 ? word : "Tahej písmena"}</h3>
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
