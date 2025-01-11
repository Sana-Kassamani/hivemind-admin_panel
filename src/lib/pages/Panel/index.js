import React, { useDebugValue, useEffect } from "react";
import DataTable from "../../components/table";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StickyHeadTable from "../../components/muiTable";
import { fetchUsers } from "../../redux/slices/users/thunks/fetchUsers";
import { useDispatch } from "react-redux";
import { fetchApiaries } from "../../redux/slices/apiaries/thunks/fetchApiaries";
import { login } from "../../redux/slices/auth/thunks/login";
import ApiariesTable from "../../components/apiariesTable";
import OwnersTable from "../../components/ownersTable";
import BeekeepersTable from "../../components/beekeepersTable";
import HivesTable from "../../components/hivesTable";
import SideBar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const Panel = ({ children }) => {
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
