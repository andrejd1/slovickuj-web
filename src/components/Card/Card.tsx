import { StyledCard } from "./Card.styles.ts";
import { CardProps } from "./Card.types.ts";
import { state$ } from "../../store/store.ts";

const setDragging = state$.actions.isDragging.set;
const Card = ({
  letter,
  color,
  disable,
  onDragStart,
  onDragOver,
  onDragEnd,
}: CardProps) => {
  const handleMouseDown = () => {
    if (onDragStart && !disable) {
      onDragStart(letter);
      setDragging(true);
    }
  };

  const handleMouseOver = () => {
    if (onDragOver && !disable) {
      onDragOver(letter);
    }
  };

  const handleMouseUp = () => {
    if (onDragEnd && !disable) {
      onDragEnd();
      setDragging(false);
    }
  };

  return (
    <StyledCard
      $color={disable ? "gray" : color}
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
      onMouseUp={handleMouseUp}
      whileHover={{ scale: disable ? 1 : 1.2 }}
    >
      {letter}
    </StyledCard>
  );
};

export default Card;
