import { useState, useEffect, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/auth/thunks/login";
export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    console.log(form);
  }, [form]);

  return { handleFormChange, form };
};

export const useLogin = ({ form, setPasswordError, setUsernameError }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (form.username === "") {
      setUsernameError(true);
    }
    if (form.password === "") {
      setPasswordError(true);
    }
    if (form.username && form.password) {
      console.log(form);
      setUsernameError(false);
      setPasswordError(false);
      try {
        const resultAction = await dispatch(login(form));
        if (login.fulfilled.match(resultAction)) {
          console.log("Login done");
          // Navigate to a specific page after successful login
          navigate("/panel"); // Replace '/dashboard' with your desired route
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return { handleLogin };
};
