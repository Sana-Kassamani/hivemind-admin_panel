import React, { useDebugValue, useEffect } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fetchUsers } from "../../redux/slices/users/thunks/fetchUsers";
import { useDispatch } from "react-redux";
import { fetchApiaries } from "../../redux/slices/apiaries/thunks/fetchApiaries";
import SideBar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const Panel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("User logged in");
    dispatch(fetchUsers());
    dispatch(fetchApiaries());
  }, []);
  return (
    <Box className={classes.root}>
      <SideBar />
      <Outlet />
    </Box>
  );
};

export default Panel;
