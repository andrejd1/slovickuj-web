import { CardProps } from "../components/Card/Card.types.ts";
import { CZECH_ALPHABET } from "../alphabet/cs_alphabet.ts";
import { CARD_COLOURS } from "./colors.ts";
import { czechLetterScores } from "../alphabet/cs_alphabet_score.ts";
import { COLUMNS, ROWS } from "./const.ts";
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
  const letterScores = Object.entries(czechLetterScores);

  // Calculate total score for probability distribution
  const totalScore = letterScores.reduce(
    (sum, [, score]) => sum + 1 / score,
    0,
  );

  for (let i = 0; i < COLUMNS; i++) {
    const row: CardProps[] = [];
    for (let j = 0; j < ROWS; j++) {
      // Generate a random number to determine the letter based on probability
      const randomScore = Math.random() * totalScore;

      // Find the letter with a cumulative inverted score that exceeds the random number
      let cumulativeInverseScore = 0;
      let selectedLetter = "";
      for (const [letter, score] of letterScores) {
        cumulativeInverseScore += 1 / score;
        if (cumulativeInverseScore >= randomScore) {
          selectedLetter = letter;
          break;
        }
      }

      const color = colorMap[selectedLetter];
      row.push({
        id: i * ROWS + j,
        letter: selectedLetter,
        color,
        disable: false,
      });
    }
    grid.push(row);
  }

  return grid;
};

export const calculateScore = (word: string): number => {
  return word
    .toUpperCase()
    .split("")
    .reduce((score, letter) => score + (czechLetterScores[letter] || 0), 0);
};
