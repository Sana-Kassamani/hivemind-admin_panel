import React from "react";
import HivesTable from "../../components/hivesTable";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import TasksTable from "../../components/tasksTable";
import { useSelector } from "react-redux";

const Details = () => {
  const { apiaries } = useSelector((state) => state.apiaries);
  const { id } = useParams();
  const label = apiaries[id].label;
  console.log(id);
  return (
    <Box
      className="flex column g30 p30"
      sx={{ width: "100%", overflowX: "auto" }}
    >
      <Typography variant="h1">{label}</Typography>
      <HivesTable apiaryId={id} />
      <TasksTable apiaryId={id} />
    </Box>
  );
};

export default Details;
