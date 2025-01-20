import React from "react";
import HivesTable from "../../components/hivesTable";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Icon, Typography } from "@mui/material";
import TasksTable from "../../components/tasksTable";
import { useSelector } from "react-redux";
import { ArrowBackRounded, ChevronLeft } from "@mui/icons-material";

const Details = () => {
  const navigate = useNavigate();
  const { apiaries } = useSelector((state) => state.apiaries);
  const { id } = useParams();
  const label = apiaries[id].label;
  console.log(id);
  return (
    <Box className="flex column  ">
      <Box
        className="flex row  align-center"
        sx={{ gap: "10", padding: 1, paddingLeft: 3 }}
      >
        <Button
          variant="text"
          color="#000000"
          startIcon={<ChevronLeft />}
          sx={{ textDecoration: "underline" }}
          onClick={() => {
            navigate("/apiaries");
          }}
        >
          Back
        </Button>
      </Box>
      <Box
        className="flex column g30  p30"
        sx={{ width: "100%", overflowX: "auto", paddingTop: 2 }}
      >
        <Typography variant="h1">{label}</Typography>
        <HivesTable apiaryId={id} />
        <TasksTable apiaryId={id} />
      </Box>
    </Box>
  );
};

export default Details;
