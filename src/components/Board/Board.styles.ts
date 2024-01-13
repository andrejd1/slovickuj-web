import styled from "styled-components";

export const StyledBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
export const StyledBoardScoreIncrement = styled.div<{ $isValidWord: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  color: ${(props) => (props.$isValidWord ? "#00FB0B" : "#A52A2A")};
  font-weight: 600;
`;
