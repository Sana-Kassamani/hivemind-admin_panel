import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../table";
import { apiariesColumns, fillApiariesRows } from "./service";

const ApiariesTable = () => {
  const { apiaries } = useSelector((state) => state.apiaries);
  const { beekeepers } = useSelector((state) => state.users);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fillApiariesRows({ setRows, apiaries, beekeepers });
    console.log(apiaries);
  }, [apiaries, beekeepers]);

  return <DataTable rows={rows} columns={apiariesColumns} title="Apiaries" />;
};

export default ApiariesTable;
