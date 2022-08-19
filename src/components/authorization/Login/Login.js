import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../api/context/GlobalStorage";
import { Backdrop, IconButton, InputAdornment } from "@mui/material";
import {
  Container,
  FormBox,
  Box,
  StyledTypography,
  Span,
  AnimationSpan,
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

const Login = ({
  loginWindow,
  setLoginWindow,
  singUpWindowOpen,
  resetPasswordOpen,
}) => {
  const { authenticator, status } = useContext(GlobalContext);
  const { singIn, errorMessage } = authenticator;
  const { loading, clearErrorAlert } = status;
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const closeWindow = () => setLoginWindow(false);
  const passwordVisibilityHandle = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const validationSchema = yup.object().shape({
    userEmail: yup.string().email().required("Entered a vaild email"),
    userPassword: yup
      .string()
      .required("Entered a vaild password")
      .min(6, "Password is to short - should be 6 chars minimum"),
  });

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    onSubmit: (values) => {
      singIn(values.userEmail, values.userPassword, closeWindow);
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <Backdrop
        open={loginWindow}
        onClick={() => {
          closeWindow();
          clearErrorAlert();
        }}
      ></Backdrop>
      {loginWindow && (
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
              Login to your <Span>account</Span>
            </StyledTypography>
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          </Box>
          <FormBox onSubmit={formik.handleSubmit}>
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
            <RegisterButton variant="contained" type="submit">
              {!loading ? "Login" : <Spinner />}
            </RegisterButton>
            <StyledTypography variant="subtitle1">
              Do you not have an account?
              <Span
                onClick={() => {
                  closeWindow();
                  clearErrorAlert();
                  singUpWindowOpen();
                }}
                clicked
              >
                {" "}
                Register
              </Span>
            </StyledTypography>
            <StyledTypography
              variant="subtitle2"
              onClick={() => {
                closeWindow();
                clearErrorAlert();
                resetPasswordOpen();
              }}
            >
              <AnimationSpan>Forgot the password</AnimationSpan>
            </StyledTypography>
          </FormBox>
        </Container>
      )}
    </div>
  );
};

export default Login;
