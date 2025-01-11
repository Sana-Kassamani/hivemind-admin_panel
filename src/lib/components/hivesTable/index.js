import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../table";
import {
  apiariesColumns,
  fillApiariesRows,
  fillHivesRows,
  hivesColumns,
} from "./service";
import { Typography } from "@mui/material";

const HivesTable = () => {
  const apiaryId = "677ae340d963de5ec1f4c5ce";
  const { hives, isLoading } = useSelector((state) => state.hives);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      fillHivesRows({ setRows, hives, apiaryId });
    }
  }, [hives]);

  return isLoading ? (
    <Typography>Loading</Typography>
  ) : (
    <div>
      <DataTable rows={rows} columns={hivesColumns} title="Hives" />
    </div>
  );
};

export default HivesTable;
