import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWordsTable = styled.aside`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  min-width: 5rem;
  max-height: 39rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
`;
export const StyledWordsTableTitle = styled(motion.h3)`
  padding: 0.5rem;
  font-weight: 600;
`;
export const StyledWordsTableWordContainer = styled.div`
  overflow-y: auto;
`;
export const StyledWordsTableWord = styled(motion.div)<{ $color?: string }>`
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.$color ?? "green"};
  word-wrap: break-word;
  max-width: 8rem;
`;
