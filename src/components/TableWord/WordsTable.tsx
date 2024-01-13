import {
  StyledWordsTable,
  StyledWordsTableTitle,
  StyledWordsTableWord,
  StyledWordsTableWordContainer,
} from "./WordsTable.styles.ts";
import { WordsTableProps } from "./WordsTable.types.ts";

const WordsTable = ({ title, words, wordsColor }: WordsTableProps) => {
  return (
    <StyledWordsTable>
      <StyledWordsTableTitle>{title}</StyledWordsTableTitle>
      <StyledWordsTableWordContainer>
        {words.map((word) => (
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
