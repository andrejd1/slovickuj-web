import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../ui/breakpoints.ts";

type StyledCardType = {
  $color: string;
};

export const StyledCard = styled(motion.div)<StyledCardType>`
  background-color: ${(props) => props.$color};
  font-size: 3rem;
  padding: 0 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.35);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and ${device.mobile} {
    padding: 0 0.75rem;
    font-size: 2rem;
  }
`;
