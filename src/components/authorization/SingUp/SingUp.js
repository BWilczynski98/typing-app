import React, { useContext } from "react";
import { GlobalContext } from "../../../api/context/GlobalStorage";
import {
  Wrapper,
  Container,
  Box,
  FormBox,
  StyledTypography,
  Span,
  InputForSingUp,
  RegisterButton,
} from "../Styles/Authorization.Styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { ErrorMessage } from "../ErrorMessage";

const SingUp = () => {
  const { authenticator } = useContext(GlobalContext);
  const { singUp, errorMessage } = authenticator;

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
      singUp(values.userEmail, values.userPassword, values.userName);
    },
    validationSchema: validationSchema,
  });

  return (
    <Wrapper>
      <Container>
        <Box>
          <StyledTypography variant="h5">
            Create your <Span>free</Span> account
          </StyledTypography>
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </Box>
        <FormBox onSubmit={formik.handleSubmit}>
          <InputForSingUp
            variant="outlined"
            label="name"
            name="userName"
            type="text"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <InputForSingUp
            variant="outlined"
            label="email"
            name="userEmail"
            type="email"
            value={formik.values.userEmail}
            onChange={formik.handleChange}
            error={formik.touched.userEmail && Boolean(formik.errors.userEmail)}
            helperText={formik.touched.userEmail && formik.errors.userEmail}
          />
          <InputForSingUp
            variant="outlined"
            label="password"
            name="userPassword"
            type="password"
            value={formik.values.userPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.userPassword && Boolean(formik.errors.userPassword)
            }
            helperText={
              formik.touched.userPassword && formik.errors.userPassword
            }
          />
          <InputForSingUp
            variant="outlined"
            label="confirm password"
            name="userConfirmPassword"
            type="password"
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
            Create account
          </RegisterButton>
          <StyledTypography variant="subtitle1">
            Already have account? <Span clicked>Login</Span>
          </StyledTypography>
        </FormBox>
      </Container>
    </Wrapper>
  );
};

export default SingUp;
