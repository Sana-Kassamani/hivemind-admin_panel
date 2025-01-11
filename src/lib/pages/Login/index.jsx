import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/auth/thunks/login";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { handleLogin, useForm, useLogin } from "./services";
import CustomButton from "../../components/button";

const Login = () => {
  const { loggedAdmin, isLoading } = useSelector((state) => state.auth);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { handleFormChange, form } = useForm({
    username: "",
    password: "",
  });
  const { handleLogin } = useLogin({
    form,
    setPasswordError,
    setUsernameError,
  });

  return (
    <div className="flex column justify-center align-center full-height">
      <Typography variant="h1" sx={{ marginBottom: "20px" }}>
        Welcome Back
      </Typography>
      <div className="flex column g12">
        <div>
          <TextField
            label="Username"
            variant="outlined"
            color="secondary"
            name="username"
            error={usernameError}
            aria-errormessage={usernameError ? "username-error" : undefined}
            fullWidth
            sx={{
              display: "block",
              "& .MuiInputBase-input": {
                fontSize: "16px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "16px",
              },
            }}
            onChange={handleFormChange}
          />
          {usernameError && (
            <p
              id="username-error"
              style={{ color: "red", marginTop: "4px", fontSize: "12px" }}
            >
              Username is required
            </p>
          )}
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            color="secondary"
            name="password"
            error={passwordError}
            aria-errormessage={passwordError ? "password-error" : undefined}
            fullWidth
            sx={{
              display: "block",
              fontSize: "14px",
              "& .MuiInputBase-input": {
                fontSize: "16px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "16px",
              },
            }}
            onChange={handleFormChange}
          />
          {passwordError && (
            <p
              id="password-error"
              style={{ color: "red", marginTop: "4px", fontSize: "12px" }}
            >
              Password is required
            </p>
          )}
        </div>
        <CustomButton text={"Login"} isDisabled={false} onClick={handleLogin} />
      </div>
    </div>
  );
};
export default Login;
