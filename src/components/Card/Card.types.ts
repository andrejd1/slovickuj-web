export type CardProps = {
  id: number;
  letter: string;
  color: string;
  onDragStart?: (letter: string) => void;
  onDragOver?: (letter: string) => void;
  onDragEnd?: () => void;
};
