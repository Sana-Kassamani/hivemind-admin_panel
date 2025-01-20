import React from "react";
import ApiariesTable from "../../components/apiariesTable";
import { Box } from "@mui/material";

const Apiaries = () => {
  return (
    <Box
      className="flex column g30 p30"
      sx={{ width: "100%", overflowX: "auto" }}
    >
      <ApiariesTable />
    </Box>
  );
};

export default Apiaries;
