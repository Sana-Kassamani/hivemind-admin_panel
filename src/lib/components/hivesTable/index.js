import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../table";
import {
  apiariesColumns,
  fillApiariesRows,
  fillHivesRows,
  hivesColumns,
} from "./service";

const HivesTable = () => {
  const apiaryId = "677ae340d963de5ec1f4c5ce";
  const { hives } = useSelector((state) => state.hives);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fillHivesRows({ setRows, hives, apiaryId });
  }, [hives]);

  return <DataTable rows={rows} columns={hivesColumns} title="Hives" />;
};

export default HivesTable;
