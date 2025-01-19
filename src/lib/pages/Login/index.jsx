import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/auth/thunks/login";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { handleLogin, useForm, useLogin } from "./services";
import CustomButton from "../../components/button";
import bee from "./../../../assets/images/amico.png";
import logo from "./../../../assets/images/logo.png";

const Login = () => {
  const { loggedAdmin, isLoading, error } = useSelector((state) => state.auth);
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
    <div className="flex align-center full-height">
      <div className="flex align-center justify-center w60 yellowbg full-height">
        <img src={bee} alt="" />
      </div>
      <div className="flex column justify-center align-center w40 g30">
        <div className="logoDiv flex justify-center align-center">
          <img src={logo} alt="" />
        </div>

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
          {error && (
            <Typography variant="h5" color="red">
              {error}
            </Typography>
          )}
          <CustomButton
            text={"Login"}
            isDisabled={false}
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
