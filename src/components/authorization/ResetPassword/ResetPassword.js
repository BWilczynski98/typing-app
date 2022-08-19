import React, { useContext } from "react";
import { GlobalContext } from "../../../api/context/GlobalStorage";
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
import * as yup from "yup";
import { useFormik } from "formik";
import { ErrorMessage } from "../ErrorMessage";
import { Backdrop } from "@mui/material";
import { Spinner } from "../Spinner";

const ResetPassword = ({
  resetPasswordWindow,
  setResetPasswordWindow,
  loginWindowOpen,
  singUpWindowOpen,
}) => {
  const { authenticator, status } = useContext(GlobalContext);
  const { resetPassword, errorMessage } = authenticator;
  const { loading, clearErrorAlert } = status;

  const closeWindow = () => setResetPasswordWindow(false);

  const validationSchema = yup.object().shape({
    userEmail: yup.string().email().required("Entered a vaild email"),
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      resetPassword(values.userEmail, closeWindow);
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <Backdrop
        open={resetPasswordWindow}
        onClick={() => {
          closeWindow();
          clearErrorAlert();
        }}
      ></Backdrop>
      {resetPasswordWindow && (
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
              Enter your <Span>email</Span> address
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
            <RegisterButton variant="contained" type="submit">
              {!loading ? "send email" : <Spinner />}
            </RegisterButton>
            <StyledTypography variant="subtitle1">
              Do you not have an account?
              <Span
                onClick={() => {
                  setResetPasswordWindow(false);
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
                loginWindowOpen();
              }}
            >
              <AnimationSpan>Back to login</AnimationSpan>
            </StyledTypography>
          </FormBox>
        </Container>
      )}
    </div>
  );
};

export default ResetPassword;
