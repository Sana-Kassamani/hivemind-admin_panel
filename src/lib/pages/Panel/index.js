import React, { useDebugValue, useEffect } from "react";
import SideBar from "../../components/sidebar";
import DataTable from "../../components/table";
import { Box } from "@mui/material";
import StickyHeadTable from "../../components/muiTable";
import { fetchUsers } from "../../redux/slices/users/thunks/fetchUsers";
import { useDispatch } from "react-redux";
import { fetchApiaries } from "../../redux/slices/apiaries/thunks/fetchApiaries";
import { login } from "../../redux/slices/auth/thunks/login";
import ApiariesTable from "../../components/apiariesTable";

const Panel = () => {
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
    // <div className="flex row">
    //   <div>
    //     <SideBar></SideBar>
    //   </div>
    //   <Box padding="30px">
    //     <StickyHeadTable></StickyHeadTable>
    //   </Box>
    // </div>
    <Box className="flex row">
      <SideBar></SideBar>
      {/* <StickyHeadTable></StickyHeadTable> */}

      <ApiariesTable />
    </Box>
  );
};

export default Panel;
