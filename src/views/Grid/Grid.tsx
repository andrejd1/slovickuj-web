import React from "react";
import { StyledGrid, StyledGridRow } from "./Grid.styles.ts";
import Card from "../../components/Card/Card.tsx";
import { calculateScore } from "../../utils/generators.ts";
import { CZECH_VOCABULARY } from "../../vocabularies/cs_vocabulary.ts";
import Board from "../../components/Board/Board.tsx";
import { state$ } from "../../store/store.ts";

const Grid: React.FC = () => {
  const cards = state$.actions.cards;
  const draggedLetters = state$.actions.draggedLetters;
  const usedWords = state$.actions.usedWords;
  const allWords = state$.actions.allWords;
  const score = state$.actions.score;
  const lastScoreIncrement = state$.actions.lastScoreIncrement;

  const handleDragStart = (letter: string) => {
    draggedLetters.set([letter]);
  };

  const handleDragOver = (letter: string) => {
    if (draggedLetters.get().length > 0) {
      draggedLetters.set([...draggedLetters.get(), letter]);
    }
  };

  const handleDragEnd = () => {
    const findWord = CZECH_VOCABULARY.find(
      (word) => word.toUpperCase() === draggedLetters.peek().join(""),
    );
    if (findWord) {
      const findUsedWord = usedWords
        .peek()
        .find((word) => word.toUpperCase() === draggedLetters.peek().join(""));
      if (findUsedWord === undefined) {
        usedWords.set([...usedWords.get(), findWord]);
        lastScoreIncrement.set(calculateScore(findWord));
        score.set((prev) => prev + calculateScore(findWord));
      }
    }
    allWords.set([...allWords.get(), draggedLetters.peek().join("")]);
    draggedLetters.set([]);
  };

  const handleCardDragStart = (letter: string) => {
    const indexOfLetter = draggedLetters.get().indexOf(letter);
    if (indexOfLetter !== -1) {
      // If the letter is found in the current dragged path,
      // remove the letters after this letter in the path
      draggedLetters.set(draggedLetters.get().slice(0, indexOfLetter + 1));
    } else {
      // If the letter is not found, start a new dragged path
      draggedLetters.set([letter]);
    }
  };

  const resetDraggedLetters = () => {
    draggedLetters.set([]);
  };

  return (
    <>
      <Board />
      <StyledGrid onMouseLeave={resetDraggedLetters}>
        {cards.get().map((row, rowIndex) => (
          <StyledGridRow key={`rowIndex-${rowIndex}`}>
            {row.map((card) => (
              <Card
                key={`cardIndex-${card.id}`}
                id={card.id}
                color={card.color}
                letter={card.letter}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                onCardDragStart={() => handleCardDragStart(card.letter)}
              />
            ))}
          </StyledGridRow>
        ))}
      </StyledGrid>
    </>
  );
};

export default Grid;
