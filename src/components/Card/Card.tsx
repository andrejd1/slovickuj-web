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
    if (onDragStart) {
      onDragStart(letter);
    }
  };

  const handleMouseOver = () => {
    if (onDragOver) {
      onDragOver(letter);
    }
  };

  const handleMouseUp = () => {
    if (onDragEnd) {
      onDragEnd();
    }
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
