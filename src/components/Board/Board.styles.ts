import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: lavender;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
export const StyledBoardScoreIncrement = styled(motion.div)`
  position: absolute;
  top: 0.35rem;
  right: 2rem;
  color: #00fb0b;
  font-weight: 600;
`;
export const StyledBoardInvalidH3 = styled(motion.h3)`
  color: #a52a2a;
  font-weight: 600;
`;
