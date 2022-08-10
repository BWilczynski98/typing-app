import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../api/context/GlobalStorage";
import Timer from "./Timer/Timer";
import { Counter } from "./Counter/Counter";
import {
  Wrapper,
  Header,
  NeonWrapper,
  Subtitle,
  Input,
  Text,
  CounterWrapper,
  StyledTypography,
} from "./TypingTest.style";
import { useTimer } from "react-timer-hook";
import axios from "axios";
import { Button } from "@mui/material";

export const TypingTest = () => {
  const { authenticator, user } = useContext(GlobalContext);
  const { userIsLoggedIn } = authenticator;
  const { savePersonalRecord } = user;
  const [wordsToTranscription, setWordsToTranscription] = useState([]);
  const [userWordType, setUserWordType] = useState("");
  const [index, setIndex] = useState(0);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(15);
  const [allUserWordsPerMinutes, setAllUserWordsPerMinutes] = useState(0);
  const [correctWordsPerMinutes, setCorrectWordsPerMinutes] = useState(0);
  const [charsPerMinutes, setCharsPerMinutes] = useState(0);
  const [accurace, setAccurace] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(false);

  // timer settings
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);
  const { isRunning, seconds, start, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      setGameStatus(true);
      userIsLoggedIn &&
        savePersonalRecord({
          WPM: correctWordsPerMinutes,
          CPM: charsPerMinutes,
          ACC: +accurace.toFixed(2),
        });
    },
  });

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
  }, [downloadStatus]);

  // Calculating the percentage of accuracy
  useEffect(() => {
    correctWordsPerMinutes &&
      setAccurace((correctWordsPerMinutes / allUserWordsPerMinutes) * 100);
  }, [allUserWordsPerMinutes]);

  const compareWordInRealTime = (userInput) => {
    setUserWordType(userInput);
    if (wordsToTranscription[index].word.includes(userInput.trim())) {
      wordsToTranscription[index].isCorrect = true;
    } else {
      wordsToTranscription[index].isCorrect = false;
    }
  };

  const compareApprovedWords = () => {
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

  const clearVariables = async () => {
    await setDownloadStatus((prev) => !prev);
    await setIndex(0);
    await setAllUserWordsPerMinutes(0);
    await setCorrectWordsPerMinutes(0);
    await setCharsPerMinutes(0);
    await setAccurace(0);
    await setUserWordType("");
    await setMinRange(0);
    await setMaxRange(15);
    await setGameStatus(false);
  };

  const restartGame = () => {
    const autoStart = false;
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + 59);
    restart(newTime, autoStart);
    clearVariables();
  };

  return (
    <Wrapper>
      <NeonWrapper>
        <Header>TEST YOUR TYPING SKILLS</Header>
      </NeonWrapper>
      <Subtitle>TYPING SPEED TEST</Subtitle>
      <CounterWrapper>
        <Timer seconds={seconds} isRunning={isRunning}></Timer>
        <Counter number={correctWordsPerMinutes} text={"words/min"} />
        <Counter number={charsPerMinutes} text={"chars/min"} />
        <Counter number={accurace.toFixed(2)} text={"% accuracy"} />
      </CounterWrapper>
      <Text>
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
                  {word}
                </StyledTypography>
              );
          }
        )}
      </Text>
      <Input
        disabled={gameStatus}
        value={userWordType.trim()}
        onChange={(e) => {
          index == 0 && start();
          compareWordInRealTime(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.code == "Space" || e.keyCode == 32) {
            compareApprovedWords();
            setUserWordType("");
          }
        }}
      ></Input>
      {gameStatus && <Button onClick={() => restartGame()}>Restar game</Button>}
    </Wrapper>
  );
};
