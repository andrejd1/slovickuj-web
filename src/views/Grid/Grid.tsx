import React, { useEffect, useState } from "react";
import { StyledGrid, StyledGridRow } from "./Grid.styles.ts";
import Card from "../../components/Card/Card.tsx";
import { generateColorMap, generateGrid } from "../../utils/generators.ts";

const colorMap = generateColorMap();

const Grid: React.FC = () => {
  const [cards, setCards] = useState(generateGrid(colorMap));

  useEffect(() => {
    setCards(generateGrid(colorMap));
  }, []);

  return (
    <StyledGrid>
      {cards.map((row, rowIndex) => (
        <StyledGridRow key={`rowIndex-${rowIndex}`}>
          {row.map((card) => (
            <Card
              key={`cardIndex-${card.id}`}
              id={card.id}
              color={card.color}
              letter={card.letter}
            />
          ))}
        </StyledGridRow>
      ))}
    </StyledGrid>
  );
};

export default Grid;
