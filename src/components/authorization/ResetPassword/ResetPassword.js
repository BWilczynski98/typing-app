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

const ResetPassword = () => {
  const validationSchema = yup.object().shape({
    userEmail: yup.string().email().required("Entered a vaild email"),
  });

  const formik = useFormik({
    initialValues: {
      userEmail: "",
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
            Enter your <Span>email</Span> address
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
          <RegisterButton variant="contained" type="submit">
            Reset
          </RegisterButton>
          <StyledTypography variant="subtitle1">
            Do you not have an account?<Span clicked> Register</Span>
          </StyledTypography>
          <StyledTypography variant="subtitle2">
            <AnimationSpan>Back to login</AnimationSpan>
          </StyledTypography>
        </FormBox>
      </Container>
    </Wrapper>
  );
};

export default ResetPassword;
