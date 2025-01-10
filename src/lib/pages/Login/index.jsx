import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/auth/login";
import { fetchUsers } from "../../redux/slices/users/fetchUsers";
import { fetchApiaries } from "../../redux/slices/apiaries/fetchApiaries";

const Login = () => {
  const { loggedAdmin, isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const form = {
    username: "boss",
    password: "B100$b100$",
  };

  useEffect(() => {
    dispatch(login(form));
    console.log("User logged in");
    dispatch(fetchUsers());
    dispatch(fetchApiaries());
  }, []);
  return (
    <div>
      {isLoading ? <p>Loading auth</p> : <p>Logged in</p>}

      {!isLoading && (
        <div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div>
              <p>{loggedAdmin?.username}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
