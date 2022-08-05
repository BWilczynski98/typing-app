import styled from "styled-components";
import { colors } from "../../../styles/GlobalColors.styles";

export const CustomTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid ${colors.orange};
  background-color: #fff;
`;