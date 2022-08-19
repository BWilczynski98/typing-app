import React, { useState, useContext } from "react";
import { GlobalContext } from "../../api/context/GlobalStorage";
import {
  StyledBackdrop,
  Popup,
  Row,
  Column,
  Bar,
  PopupContent,
  Text,
  Image,
  Buttons,
  IconButtonComponent,
  OrangeMarker,
  BoldMarker,
  Blob,
  StyledButton,
} from "./styles/PopupWithPlayerScore.style";
import { Typography, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Turtle from "../../images/Turtle.png";
import Cat from "../../images/Cat.png";
import Owl from "../../images/Owl.png";
import Greyhound from "../../images/Greyhound.png";

const PopupWithPlayerScore = ({
  guestScore,
  status,
  restartGame,
  loginWindowOpen,
  singUpWindowOpen,
}) => {
  const { authenticator, user } = useContext(GlobalContext);
  const { userIsLoggedIn } = authenticator;
  const { setGuestStats } = user;
  const breakPoint = useMediaQuery("(max-width:768px)");
  let header;
  let startMsg;
  let endMsg;
  let animal;
  const [popupOpen, setPopupOpen] = useState(status);
  const handlePopup = () => setPopupOpen((prev) => !prev);

  if (guestScore.WPM <= 20) {
    header = "You're a Turtle";
    startMsg = "Its okey, turtles are cool";
    endMsg = "Don't give up next time will be better";
    animal = Turtle;
  } else if (guestScore.WPM > 20 && guestScore.WPM <= 50) {
    header = "You're an owl";
    startMsg = "Maybe not fast, but exactly, like an owl!";
    endMsg = "You're doing great";
    animal = Owl;
  } else if (guestScore.WPM > 50 && guestScore.WPM <= 90) {
    header = "You're a cat";
    startMsg = "Grace and elegance like a cat!";
    endMsg = "You're doing very well";
    animal = Cat;
  } else {
    header = "You're like a Greyhound!";
    startMsg = "Like the fastest dog in the world";
    endMsg = "Congratulations!";
    animal = Greyhound;
  }

  return (
    <>
      <StyledBackdrop
        open={popupOpen}
        onClick={() => {
          restartGame();
          handlePopup();
        }}
      ></StyledBackdrop>
      {popupOpen && (
        <Popup>
          <Row>
            <Bar>
              <IconButtonComponent onClick={handlePopup}>
                <CloseIcon />
              </IconButtonComponent>
            </Bar>
          </Row>
          <Row>
            <PopupContent>
              <Column>
                <Blob>
                  <Image src={animal} />
                </Blob>
              </Column>
              <Column>
                <Text>
                  <Typography
                    variant={breakPoint ? "h6" : "h5"}
                    component="div"
                  >
                    {header}
                  </Typography>
                  <Typography
                    variant={breakPoint ? "body2" : "body1"}
                    component="div"
                  >
                    {startMsg}. You type with the speed of{" "}
                    <OrangeMarker>{guestScore.WPM} WPM</OrangeMarker> (
                    {guestScore.CPM} CPM). Your accuracy was{" "}
                    <BoldMarker>{guestScore.ACC}%</BoldMarker>. {endMsg}
                  </Typography>
                </Text>
              </Column>
            </PopupContent>
          </Row>
          <Row>
            <Buttons>
              <StyledButton variant="outlined" onClick={() => restartGame()}>
                Try Again
              </StyledButton>
              {!userIsLoggedIn && (
                <>
                  <Typography variant="subtitle2" component="div">
                    If you want to save the result
                  </Typography>
                  <div>
                    <StyledButton
                      variant="contained"
                      onClick={() => {
                        setGuestStats(guestScore);
                        restartGame();
                        loginWindowOpen();
                      }}
                    >
                      Login
                    </StyledButton>
                    <Typography variant="subtitle2" component="div">
                      or
                    </Typography>
                    <StyledButton
                      variant="contained"
                      onClick={() => {
                        setGuestStats(guestScore);
                        restartGame();
                        singUpWindowOpen();
                      }}
                    >
                      Register
                    </StyledButton>
                  </div>
                </>
              )}
            </Buttons>
          </Row>
        </Popup>
      )}
    </>
  );
};

export default PopupWithPlayerScore;
