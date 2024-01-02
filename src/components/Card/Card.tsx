import { StyledCard } from "./Card.styles.ts";
import { CardProps } from "./Card.types.ts";

const Card = ({
  letter,
  color,
  onDragStart,
  onDragOver,
  onDragEnd,
}: CardProps) => {
  const handleMouseDown = () => {
    onDragStart(letter);
  };

  const handleMouseOver = () => {
    onDragOver(letter);
  };

  const handleMouseUp = () => {
    onDragEnd();
  };

  return (
    <StyledCard
      color={color}
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
      onMouseUp={handleMouseUp}
    >
      {letter}
    </StyledCard>
  );
};

export default Card;
