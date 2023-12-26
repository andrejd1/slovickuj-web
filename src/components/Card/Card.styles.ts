import styled from "styled-components";

type StyledCardType = {
  color: string;
};

export const StyledCard = styled.div<StyledCardType>`
  background-color: ${(props) => props.color};
  font-size: 3rem;
  padding: 0 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.35);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
