import React from "react";
import { BoardProps } from "./Board.types.ts";
import { StyledBoard } from "./Board.styles.ts";

const Board: React.FC<BoardProps> = ({ word, score }) => {
  return (
    <StyledBoard>
      <h3>Slovo: </h3>
      <h3>{word}</h3>
      <h3>{`Skóre: ${score}`}</h3>
    </StyledBoard>
  );
};

export default Board;
