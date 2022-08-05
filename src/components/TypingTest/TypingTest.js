import React from "react";
import Timer  from "./Timer/Timer";
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

export const TypingTest = () => {
  return (
    <Wrapper>
      <NeonWrapper>
        <Header>TEST YOUR TYPING SKILLS</Header>
      </NeonWrapper>
      <Subtitle>TYPING SPEED TEST</Subtitle>
      <CounterWrapper>
        <Timer></Timer>
        <Counter number={15} text={"words/min"} />
        <Counter number={98} text={"chars/min"} />
        <Counter number={72} text={"% accuracy"} />
      </CounterWrapper>
      <Text>
        <StyledTypography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum
          dolor. Repellat non eos asperiores quam dignissimos, atque quis aut
          maiores quia, quidem corporis, veniam officiis sint necessitatibus
          explicabo
        </StyledTypography>
      </Text>
      <Input></Input>
    </Wrapper>
  );
};
