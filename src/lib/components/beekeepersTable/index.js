import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../table";
import { beekeepersColumns, fillBeekeepersRows } from "./service";

const BeekeepersTable = () => {
  const { apiaries } = useSelector((state) => state.apiaries);
  const { owners, beekeepers } = useSelector((state) => state.users);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fillBeekeepersRows({ setRows, owners, beekeepers, apiaries });
  }, [beekeepers, owners, apiaries]);

  return (
    <div>
      <DataTable rows={rows} columns={beekeepersColumns} title="Beekeepers" />
    </div>
  );
};

export default BeekeepersTable;
