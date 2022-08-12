import styled from "styled-components";
import { colors } from "../../../styles/GlobalColors.styles";

export const CustomTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  border: 4px solid ${colors.orange};
  border-radius: 100%;

  @media screen and (max-width: 768px) {
    padding: 10px 10px;
  }
`;

