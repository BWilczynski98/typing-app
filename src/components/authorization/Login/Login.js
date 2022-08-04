import React from "react";
import {
  Wrapper,
  Container,
  FormBox,
  Box,
  StyledTypography,
  Span,
  AnimationSpan,
  InputForSingUp,
  RegisterButton,
} from "../Styles/Authorization.Styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { ErrorMessage } from "../ErrorMessage";

const Login = () => {
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
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <Wrapper>
      <Container>
        <Box>
          <StyledTypography variant="h5">
            Login to your <Span>account</Span>
          </StyledTypography>
          <ErrorMessage />
        </Box>
        <FormBox onSubmit={formik.handleSubmit}>
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
          <RegisterButton variant="contained" type="submit">
            Login
          </RegisterButton>
          <StyledTypography variant="subtitle1">
            Do you not have an account?<Span clicked> Register</Span>
          </StyledTypography>
          <StyledTypography variant="subtitle2">
            <AnimationSpan>Forgot the password</AnimationSpan>
          </StyledTypography>
        </FormBox>
      </Container>
    </Wrapper>
  );
};

export default Login;
