import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../ui/breakpoints.ts";

export const StyledBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: lavender;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media only screen and ${device.mobile} {
    flex-direction: column;
    h3 {
      margin: 0.25rem 0;
    }
  }
`;
export const StyledBoardScoreProgressBar = styled(motion.div)<{
  $percent: number;
}>`
  position: absolute;
  top: 0;
  height: 3px;
  left: 0;
  font-weight: 600;
  width: ${(props) => props.$percent}%;
  ${(props) => {
    if (props.$percent > 50) return `background-color: green;`;
    if (props.$percent > 10) return `background-color: gold;`;
    return `background-color: red;`;
  }};
`;
export const StyledBoardScoreIncrement = styled(motion.div)`
  position: absolute;
  top: -2rem;
  right: 2rem;
  color: green;
  font-weight: 600;
`;
export const StyledBoardInvalidH3 = styled(motion.h3)`
  color: #a52a2a;
  font-weight: 600;
`;

export const StyledBoardTimerH3 = styled(motion.h3)<{ $color: string }>`
  color: ${(props) => props.$color ?? "#000000"};
  font-weight: 600;
`;
