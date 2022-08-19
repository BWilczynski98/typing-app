import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../api/context/GlobalStorage";
import Timer from "./Timer/Timer";
import { Counter } from "./Counter/Counter";
import { PopupWithPlayerScore } from "../PopupWithPlayerScore";
import {
  Wrapper,
  Header,
  Title,
  InputContainer,
  Input,
  Text,
  Row,
  CounterWrapper,
  WortToTranscribe,
  OrangeSpan,
  StartMark,
  StartMarkArrow,
} from "./TypingTest.style";
import { useTimer } from "react-timer-hook";
import axios from "axios";
import { Typography } from "@mui/material";

export const TypingTest = ({ loginWindowOpen, singUpWindowOpen }) => {
  const { authenticator, user } = useContext(GlobalContext);
  const { userIsLoggedIn } = authenticator;
  const { savePersonalRecord } = user;
  const [wordsToTranscription, setWordsToTranscription] = useState([]);
  const [userWordType, setUserWordType] = useState("");
  const [index, setIndex] = useState(0);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(10);
  const [allUserWordsPerMinutes, setAllUserWordsPerMinutes] = useState(0);
  const [correctWordsPerMinutes, setCorrectWordsPerMinutes] = useState(0);
  const [charsPerMinutes, setCharsPerMinutes] = useState(0);
  const [accurace, setAccurace] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [userStartType, setUserStartType] = useState(false);
  const [rawQoutes, setRawQoutes] = useState([]);
  const [guestScore, setGuestScore] = useState({
    WPM: 0,
    CPM: 0,
    ACC: 0,
  });
  // timer settings
  const time = new Date();
  time.setSeconds(time.getSeconds() + 59);
  const { isRunning, seconds, start, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      setGameStatus(true);
      setGuestScore({
        WPM: correctWordsPerMinutes,
        CPM: charsPerMinutes,
        ACC: +accurace.toFixed(2),
      });
      userIsLoggedIn &&
        savePersonalRecord({
          WPM: correctWordsPerMinutes,
          CPM: charsPerMinutes,
          ACC: +accurace.toFixed(2),
        });
    },
  });

  const transformWordsArray = () => {
    const words = rawQoutes
      .sort(() => 0.5 - Math.random())
      .join(" ")
      .split(" ");

    const transformArray = words.map((word, index) => {
      return {
        word: word,
        status: "null",
        tracked: index == 0 ? true : false,
        isCorrect: true,
      };
    });
    setWordsToTranscription(transformArray);
  };

  const getQuotes = async () => {
    const response = await axios.get(
      "https://api.quotable.io/search/quotes?query=every good technology is basically magic"
    );
    const quotes = await Object.values(response.data.results).map(
      (quote) => quote.content
    );
    setRawQoutes(quotes);
  };

  useEffect(() => {
    if (rawQoutes.length) transformWordsArray();
  }, [rawQoutes, downloadStatus]);

  useEffect(() => {
    getQuotes();
  }, []);

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
      wordsToTranscription[index].status = "true";
      setCorrectWordsPerMinutes((prev) => ++prev);
      setCharsPerMinutes(
        (prev) => (prev = prev + wordsToTranscription[index].word.length)
      );
    } else {
      wordsToTranscription[index].status = "false";
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
    await setMaxRange(10);
    await setGameStatus(false);
  };

  const restartGame = () => {
    const autoStart = false;
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + 59);
    restart(newTime, autoStart);
    setUserStartType(false);
    clearVariables();
  };

  return (
    <Wrapper>
      <Header>
        <Title variant="h2">
          Test your <OrangeSpan>typing</OrangeSpan> skills
        </Title>
      </Header>
      <CounterWrapper>
        <Timer seconds={seconds} isRunning={isRunning}></Timer>
        <Counter number={correctWordsPerMinutes} text={"words/min"} />
        <Counter number={charsPerMinutes} text={"chars/min"} />
        <Counter number={accurace.toFixed(2)} text={"% accuracy"} />
      </CounterWrapper>
      <Text>
        <Row>
          {Object.values(wordsToTranscription).map(
            ({ word, status, tracked, isCorrect }, index) => {
              if (index >= minRange && index <= maxRange)
                return (
                  <WortToTranscribe
                    key={Math.random()}
                    variant="h5"
                    component="span"
                    status={status}
                    tracked={tracked.toString()}
                    iscorrect={isCorrect.toString()}
                  >
                    {word}
                  </WortToTranscribe>
                );
            }
          )}
        </Row>
        <Row>
          {Object.values(wordsToTranscription).map(
            ({ word, status, tracked, isCorrect }, index) => {
              if (index >= minRange + 11 && index <= maxRange + 9)
                return (
                  <WortToTranscribe
                    key={Math.random()}
                    variant="h5"
                    component="span"
                    status={status.toString()}
                    tracked={tracked.toString()}
                    iscorrect={isCorrect.toString()}
                  >
                    {word}
                  </WortToTranscribe>
                );
            }
          )}
        </Row>
      </Text>

      <InputContainer>
        <StartMark view={userStartType}>
          <Typography variant="subtitle1">Start typing</Typography>
          <StartMarkArrow />
        </StartMark>

        <Input
          autoComplete="off"
          disabled={gameStatus}
          value={userWordType.trim()}
          onChange={(e) => {
            if (index == 0) {
              start();
              setUserStartType(true);
            }
            compareWordInRealTime(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.code == "Space" || e.keyCode == 32) {
              index == 0 && start();
              compareApprovedWords();
              setUserWordType("");
            }
          }}
        ></Input>
      </InputContainer>
      {gameStatus && (
        <PopupWithPlayerScore
          guestScore={guestScore}
          status={gameStatus}
          restartGame={restartGame}
          loginWindowOpen={loginWindowOpen}
          singUpWindowOpen={singUpWindowOpen}
        />
      )}
    </Wrapper>
  );
};
