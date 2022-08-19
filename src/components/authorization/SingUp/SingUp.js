import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../api/context/GlobalStorage";
import { Backdrop, IconButton, InputAdornment } from "@mui/material";
import {
  Container,
  Box,
  FormBox,
  StyledTypography,
  Span,
  StyledInput,
  RegisterButton,
  ExitButton,
} from "../Styles/Authorization.Styles";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { ErrorMessage } from "../ErrorMessage";
import { Spinner } from "../Spinner";

const SingUp = ({ singUpWindow, setSingUpWindow, loginWindowOpen }) => {
  const { authenticator, status, user } = useContext(GlobalContext);
  const { singUp, errorMessage } = authenticator;
  const { loading, clearErrorAlert } = status;
  const { guestStats } = user;
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const closeWindow = () => setSingUpWindow(false);
  const passwordVisibilityHandle = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const validationSchema = yup.object().shape({
    userName: yup.string().required("Entered a vaild name"),
    userEmail: yup.string().email().required("Entered a vaild email"),
    userPassword: yup
      .string()
      .required("Entered a vaild password")
      .min(6, "Password is to short - should be 6 chars minimum"),
    userConfirmPassword: yup
      .string()
      .required("Entered a valid password")
      .oneOf([yup.ref("userPassword"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      userPassword: "",
      userConfirmPassword: "",
    },
    onSubmit: (values) => {
      singUp(
        values.userEmail,
        values.userPassword,
        values.userName,
        closeWindow,
        guestStats
      );
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <Backdrop
        open={singUpWindow}
        onClick={() => {
          closeWindow();
          clearErrorAlert();
        }}
      ></Backdrop>
      {singUpWindow && (
        <Container>
          <Box exit>
            <ExitButton
              onClick={() => {
                closeWindow();
                clearErrorAlert();
              }}
            >
              <CloseIcon />
            </ExitButton>
          </Box>
          <Box>
            <StyledTypography variant="h5">
              Create your <Span>free</Span> account
            </StyledTypography>
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          </Box>
          <FormBox onSubmit={formik.handleSubmit}>
            <StyledInput
              variant="outlined"
              label="name"
              name="userName"
              type="text"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
            <StyledInput
              variant="outlined"
              label="email"
              name="userEmail"
              type="email"
              value={formik.values.userEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.userEmail && Boolean(formik.errors.userEmail)
              }
              helperText={formik.touched.userEmail && formik.errors.userEmail}
            />
            <StyledInput
              variant="outlined"
              label="password"
              name="userPassword"
              type={passwordVisibility ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={passwordVisibilityHandle}>
                      {passwordVisibility ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={formik.values.userPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.userPassword &&
                Boolean(formik.errors.userPassword)
              }
              helperText={
                formik.touched.userPassword && formik.errors.userPassword
              }
            />
            <StyledInput
              variant="outlined"
              label="confirm password"
              name="userConfirmPassword"
              type={passwordVisibility ? "text" : "password"}
              value={formik.values.userConfirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.userConfirmPassword &&
                Boolean(formik.errors.userConfirmPassword)
              }
              helperText={
                formik.touched.userConfirmPassword &&
                formik.errors.userConfirmPassword
              }
            />
            <RegisterButton variant="contained" type="submit">
              {!loading ? "Create account" : <Spinner />}
            </RegisterButton>
            <StyledTypography variant="subtitle1">
              Already have account?{" "}
              <Span
                onClick={() => {
                  closeWindow();
                  clearErrorAlert();
                  loginWindowOpen();
                }}
                clicked
              >
                Login
              </Span>
            </StyledTypography>
          </FormBox>
        </Container>
      )}
    </div>
  );
};

export default SingUp;
