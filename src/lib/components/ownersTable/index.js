import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../table";
import { fillOwnersRows, ownersColumns } from "./service";

const OwnersTable = () => {
  const { owners } = useSelector((state) => state.users);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fillOwnersRows({ setRows, owners });
  }, [owners]);

  return (
    <div>
      <DataTable rows={rows} columns={ownersColumns} title="Owners" />
    </div>
  );
};

export default OwnersTable;
