import React from "react";
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Register data:", values);
  };

  return (
    <div>
      <Typography variant="h5" align="center">
        Register
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          {/* Name Field  */}
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          {/* Email Field */}
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          {/* Password Field */}
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          {/* Role Field */}
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Role</InputLabel>

            <Field as={Select} name="role" labelId="role-label" label="Role">
              <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
              <MenuItem value="ROLE_RESTURANT_OWNER">Restaurant Owner</MenuItem>
            </Field>
          </FormControl>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, py: 1.5 }}
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login here
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
