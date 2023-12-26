import { CardProps } from "../components/Card/Card.types.ts";
import { CZECH_ALPHABET } from "../alphabet/cs_alphabet.ts";
import { CARD_COLOURS } from "./colors.ts";

export const generateRandomLetter = (alphabet: string) => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const generateColorMap = () => {
  const colorMap: { [key: string]: string } = {};

  for (let i = 0; i < CZECH_ALPHABET.length; i++) {
    const letter = CZECH_ALPHABET[i];
    colorMap[letter] = CARD_COLOURS[i % CARD_COLOURS.length];
  }

  return colorMap;
};

export const generateGrid = (colorMap: {
  [key: string]: string;
}): CardProps[][] => {
  const grid: CardProps[][] = [];

  for (let i = 0; i < 7; i++) {
    const row: CardProps[] = [];
    for (let j = 0; j < 7; j++) {
      const letter = generateRandomLetter(CZECH_ALPHABET);
      const color = colorMap[letter];
      row.push({ id: i * 7 + j, letter, color });
    }
    grid.push(row);
  }

  // Ensure no more than 4 occurrences of each letter
  const letterCounts: { [key: string]: number } = {};
  grid.flat().forEach((card) => {
    letterCounts[card.letter] = (letterCounts[card.letter] || 0) + 1;
    if (letterCounts[card.letter] > 4) {
      const availableLetters = CZECH_ALPHABET.replace(
        new RegExp(card.letter, "g"),
        "",
      );
      card.letter =
        availableLetters[Math.floor(Math.random() * availableLetters.length)];
      letterCounts[card.letter] = (letterCounts[card.letter] || 0) + 1;
    }
  });

  return grid;
};
