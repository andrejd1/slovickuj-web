import {
  StyledWordsTable,
  StyledWordsTableTitle,
  StyledWordsTableWord,
  StyledWordsTableWordContainer,
} from "./WordsTable.styles.ts";
import { WordsTableProps } from "./WordsTable.types.ts";
import { useEffect, useState } from "react";

const WordsTable = ({ title, words, wordsColor }: WordsTableProps) => {
  const [reverseWordsArray, setReverseWordsArray] = useState<string[]>([]);

  useEffect(() => {
    setReverseWordsArray([...words].reverse());
  }, [words]);

  return (
    <StyledWordsTable>
      <StyledWordsTableTitle>{title}</StyledWordsTableTitle>
      <StyledWordsTableWordContainer>
        {reverseWordsArray.map((word) => (
          <StyledWordsTableWord
            key={word}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            $color={wordsColor}
          >
            {word}
          </StyledWordsTableWord>
        ))}
      </StyledWordsTableWordContainer>
    </StyledWordsTable>
  );
};

export default WordsTable;
