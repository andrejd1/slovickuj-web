import { observable } from "@legendapp/state";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { generateColorMap, generateGrid } from "../utils/generators.ts";
import { CardProps } from "../components/Card/Card.types.ts";

enableReactTracking({ auto: true });

export const state$ = observable({
  actions: {
    isDragging: false as boolean,
  },
  score: {
    score: 0 as number,
    lastScoreIncrement: 0 as number,
  },
  words: {
    draggedLetters: [] as string[],
    usedWords: [] as string[],
    allWords: [] as string[],
  },
  ui: {
    cards: generateGrid(generateColorMap()) as CardProps[][],
  },
  timer: {
    limit: 120 as number,
    seconds: 120 as number,
  },
});
