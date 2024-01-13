import React, {useEffect, useState} from "react";
import {StyledGrid, StyledGridRow} from "./Grid.styles.ts";
import Card from "../../components/Card/Card.tsx";
import {calculateScore, generateColorMap, generateGrid} from "../../utils/generators.ts";
import {CZECH_VOCABULARY} from "../../vocabularies/cs_vocabulary.ts";
import Board from "../../components/Board/Board.tsx";

const colorMap = generateColorMap();

const Grid: React.FC = () => {
  const [cards, setCards] = useState(generateGrid(colorMap));
  const [draggedLetters, setDraggedLetters] = useState<string[]>([]);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  const handleDragStart = (letter: string) => {
    setDraggedLetters([letter]);
  };

  const handleDragOver = (letter: string) => {
    if (draggedLetters.length > 0) {
      setDraggedLetters([...draggedLetters, letter]);
    }
  };

  const handleDragEnd = () => {
    const findWord = CZECH_VOCABULARY.find(
      (word) => word.toUpperCase() === draggedLetters.join(""),
    );
    if (findWord) {
      setUsedWords([...usedWords, findWord]);
      const findUsedWord = usedWords.find((word) => word === findWord);
      if (!findUsedWord) {
        setScore((prev) => prev + calculateScore(findWord));
      }
    } else {
      console.log(draggedLetters.join());
    }
    setDraggedLetters([]);
  };
  
  const resetDraggedLetters = () => {
    setDraggedLetters([])
  }

  useEffect(() => {
    setCards(generateGrid(colorMap));
  }, []);

  return (
    <>
      <Board word={draggedLetters.join("")} score={score} />
      <StyledGrid onMouseLeave={resetDraggedLetters}>
        {cards.map((row, rowIndex) => (
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
              />
            ))}
          </StyledGridRow>
        ))}
      </StyledGrid>
    </>
  );
};

export default Grid;
