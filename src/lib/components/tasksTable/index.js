import React, { useEffect, useState } from "react";
import { fillTasksRows, tasksColumns } from "./service";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import DataTable from "../table";

const TasksTable = ({ apiaryId }) => {
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      fillTasksRows({ setRows, tasks, apiaryId });
    }
  }, [tasks]);

  return isLoading ? (
    <Typography>Loading</Typography>
  ) : (
    <div>
      <DataTable rows={rows} columns={tasksColumns} title="Tasks" />
    </div>
  );
};

export default TasksTable;
