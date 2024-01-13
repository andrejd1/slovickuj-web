import { StyledCard } from "./Card.styles.ts";
import { CardProps } from "./Card.types.ts";
import { state$ } from "../../store/store.ts";

const Card = ({
  letter,
  color,
  onDragStart,
  onDragOver,
  onDragEnd,
  onCardDragStart,
}: CardProps) => {
  const setDragging = state$.actions.isDragging.set;

  const handleMouseDown = () => {
    if (onDragStart && onCardDragStart) {
      onCardDragStart();
      onDragStart(letter);
      setDragging(true);
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
      setDragging(false);
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
