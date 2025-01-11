import { Button } from "@mui/material";
import CustomButton from "../button";
import { BanButton, UnbanButton } from "../banButton";

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
    console.log("Owner id :", o._id);
    return createOwnersData(
      o.username,
      o.email,
      o.apiaries.length,
      <BanButton userId={o._id} isDisabled={o.settings.banned} />,
      <UnbanButton userId={o._id} isDisabled={!o.settings.banned} />
    );
  });
  setRows(newRows);
};
