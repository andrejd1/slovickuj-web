import { StyledCard } from "./Card.styles.ts";
import { CardProps } from "./Card.types.ts";

const Card = ({ letter, color }: CardProps) => (
  <StyledCard color={color}>{letter}</StyledCard>
);

export default Card;
