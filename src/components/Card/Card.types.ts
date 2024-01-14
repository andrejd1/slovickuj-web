export type CardProps = {
  id: number;
  letter: string;
  color: string;
  disable: boolean;
  onDragStart?: (letter: string) => void;
  onDragOver?: (letter: string) => void;
  onDragEnd?: () => void;
};
