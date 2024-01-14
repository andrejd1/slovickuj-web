import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem auto;
  padding: 2rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
export const StyledGrid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  margin: 0.5rem;
  gap: 1rem;
`;

export const StyledGridRow = styled.div``;
