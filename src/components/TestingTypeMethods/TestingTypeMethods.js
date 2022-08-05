import React, { useState, useEffect } from "react";
import {
  UserInputTestingType,
  BoxWithWordsToTranscribedByUser,
  BoxParagraph,
  StyledTypography,
} from "./TestingType.Methodsstyles";
import axios from "axios";

const TestingTypeMethods = () => {
  const [wordsToTranscription, setWordsToTranscription] = useState([]);
  const [userWordType, setUserWordType] = useState("");
  const [index, setIndex] = useState(0);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(20);
  const [allUserWordsPerMinutes, setAllUserWordsPerMinutes] = useState(0);
  const [correctWordsPerMinutes, setCorrectWordsPerMinutes] = useState(0);
  const [charsPerMinutes, setCharsPerMinutes] = useState(0);
  const [accurace, setAccurace] = useState(0);

  const transformWordsArray = (words) => {
    setWordsToTranscription([]);
    words.map((word, index) => {
      setWordsToTranscription((prev) => {
        return [
          ...prev,
          {
            word: word,
            status: null,
            tracked: index == 0 ? true : false,
            isCorrect: true,
          },
        ];
      });
    });
  };

  useEffect(() => {
    const getWords = async () => {
      const response = await axios.get(
        "https://random-word-api.herokuapp.com/word?number=3000"
      );
      const words = await response.data;
      await transformWordsArray(words);
    };

    return () => {
      getWords();
    };
  }, []);

  useEffect(() => {
    correctWordsPerMinutes &&
      setAccurace((correctWordsPerMinutes / allUserWordsPerMinutes) * 100);
  }, [correctWordsPerMinutes]);

  const compareWordInRealTime = (userInput) => {
    setUserWordType(userInput);
    if (wordsToTranscription[index].word.includes(userInput.trim())) {
      wordsToTranscription[index].isCorrect = true;
    } else {
      wordsToTranscription[index].isCorrect = false;
    }
  };

  const compareWords = () => {
    setIndex((index) => ++index);
    setAllUserWordsPerMinutes((prev) => ++prev);
    wordsToTranscription[index + 1].tracked = true;
    wordsToTranscription[index].isCorrect = true;
    wordsToTranscription[index].tracked = false;

    if (userWordType === wordsToTranscription[index].word) {
      wordsToTranscription[index].status = true;
      setCorrectWordsPerMinutes((prev) => ++prev);
      setCharsPerMinutes(
        (prev) => (prev = prev + wordsToTranscription[index].word.length)
      );
    } else {
      wordsToTranscription[index].status = false;
    }

    if (index != 0 && index % 10 === 0) {
      setMinRange((prev) => (prev += 10));
      setMaxRange((prev) => (prev += 10));
    }
  };

  return (
    <div>
      <BoxWithWordsToTranscribedByUser>
        <BoxParagraph>
          {Object.values(wordsToTranscription).map(
            ({ word, status, tracked, isCorrect }, index) => {
              if (index >= minRange && index <= maxRange)
                return (
                  <StyledTypography
                    key={Math.random()}
                    variant="h5"
                    component="span"
                    status={status}
                    tracked={tracked.toString()}
                    iscorrect={isCorrect.toString()}
                  >
                    {" "}
                    {word}
                  </StyledTypography>
                );
            }
          )}
        </BoxParagraph>
        <BoxParagraph></BoxParagraph>
      </BoxWithWordsToTranscribedByUser>
      <UserInputTestingType
        value={userWordType.trim()}
        onChange={(e) => compareWordInRealTime(e.target.value)}
        onKeyPress={(e) => {
          if (e.code == "Space" || e.keyCode == 32) {
            console.log(`You clicked space ${e.target.value}`);
            compareWords();
            setUserWordType("");
          }
        }}
      />
    </div>
  );
};

export default TestingTypeMethods;
