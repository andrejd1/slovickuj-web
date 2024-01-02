import { OverlayLineProps } from "./OverlayLine.types.ts";
import React from "react";
import { StyledOverlayLine } from "./OverlayLine.styles.ts";

const OverlayLine: React.FC<OverlayLineProps> = ({
  startX,
  startY,
  endX,
  endY,
}) => {
  const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  const startCenterX = startX + length / 2;
  return (
    <StyledOverlayLine
      style={{
        width: `${length}px`,
        transform: `translate(${startCenterX}px, ${startY}px) rotate(${angle}deg)`,
      }}
    />
  );
};

export default OverlayLine;
