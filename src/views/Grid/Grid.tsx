import React, { useEffect } from "react";
import {
  StyledGrid,
  StyledGridContainer,
  StyledGridRow,
} from "./Grid.styles.ts";
import Card from "../../components/Card/Card.tsx";
import { calculateScore } from "../../utils/generators.ts";
import { CZECH_VOCABULARY } from "../../vocabularies/cs_vocabulary.ts";
import Board from "../../components/Board/Board.tsx";
import { state$ } from "../../store/store.ts";
import WordsTable from "../../components/TableWord/WordsTable.tsx";
import { getUniqueElementsFromArrays } from "../../utils/helpers.ts";

const cards = state$.ui.cards;
const draggedLetters = state$.words.draggedLetters;
const usedWords = state$.words.usedWords;
const allWords = state$.words.allWords;
const score = state$.score.score;
const lastScoreIncrement = state$.score.lastScoreIncrement;
const seconds = state$.timer.seconds;

const Grid: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the seconds by 1
      if (seconds.get() !== 0) seconds.set((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

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
        .find((word) => word === draggedLetters.peek().join(""));
      if (findUsedWord === undefined) {
        usedWords.set([...usedWords.get(), findWord.toUpperCase()]);
        lastScoreIncrement.set(calculateScore(findWord));
        score.set((prev) => prev + calculateScore(findWord));
      }
    }
    allWords.set([...allWords.get(), draggedLetters.peek().join("")]);
    draggedLetters.set([]);
  };

  const resetDraggedLetters = () => {
    draggedLetters.set([]);
  };

  return (
    <>
      <Board />
      <StyledGridContainer>
        <WordsTable
          title={"Nevalidní slova"}
          words={getUniqueElementsFromArrays(usedWords.get(), allWords.get())}
          wordsColor={"red"}
        />
        <StyledGrid onMouseLeave={resetDraggedLetters}>
          {cards.get().map((row, rowIndex) => (
            <StyledGridRow key={`rowIndex-${rowIndex}`}>
              {row.map((card) => (
                <Card
                  key={`cardIndex-${card.id}`}
                  id={card.id}
                  color={card.color}
                  disable={seconds.get() === 0}
                  letter={card.letter}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDragEnd={handleDragEnd}
                />
              ))}
            </StyledGridRow>
          ))}
        </StyledGrid>
        <WordsTable title={"Validní slova"} words={usedWords.get()} />
      </StyledGridContainer>
    </>
  );
};

export default Grid;
