import { Box } from "@mui/material";
import React from "react";
import OwnersTable from "../../components/ownersTable";
import BeekeepersTable from "../../components/beekeepersTable";

const Users = () => {
  return (
    <Box
      className="flex column g30 p30"
      sx={{ width: "100%", overflowX: "auto" }}
    >
      <OwnersTable />
      <BeekeepersTable />
    </Box>
  );
};

export default Users;
