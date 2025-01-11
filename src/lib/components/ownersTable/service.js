import { Button } from "@mui/material";

export const ownersColumns = [
  { id: "username", label: "Username", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "apiariesNb", label: "Apiaries Count", minWidth: 100 },
  { id: "banBtn", label: "", minWidth: 100 },
  { id: "unbanBtn", label: "", minWidth: 100 },
];

export function createOwnersData(
  username,
  email,
  apiariesNb,
  banBtn,
  unbanBtn
) {
  return { username, email, apiariesNb, banBtn, unbanBtn };
}

export const fillOwnersRows = ({ setRows, owners }) => {
  const newRows = owners.map((o) => {
    return createOwnersData(
      o.username,
      o.email,
      o.apiaries.length,
      <Button>Ban</Button>,
      <Button>Unban</Button>
    );
  });
  setRows(newRows);
};
