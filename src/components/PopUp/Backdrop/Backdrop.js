import React from "react";
import {PopUpBox, PopUpWrapp, Animal, TryAgain, StyledText, BtnWrapper} from "./PopUp.style"
import { Text } from "../Text/Text";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";


function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <PopUpWrapp>
          <PopUpBox>
            <Animal></Animal>
            <Text name={"an Octopus"} wpm={65} cpm={288} accuracy={88}></Text>
            <TryAgain>
              <BtnWrapper>
                <Button variant="contained">TRY AGAIN</Button>
                <Button variant="contained">
                  Sign Up now & get your discount
                </Button>
              </BtnWrapper>
              <StyledText variant="body2">
                <span style={{ fontWeight: "bold" }}>
                  Since you type like a pro, we've got a deal for you!
                </span>{" "}
                Get a{" "}
                <span style={{ fontWeight: "bold" }}>40% discount off</span> on
                purchases in our store.
              </StyledText>
            </TryAgain>
          </PopUpBox>
        </PopUpWrapp>
      </Backdrop>
    </div>
  );
}
export default SimpleBackdrop;
