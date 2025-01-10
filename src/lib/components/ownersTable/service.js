import { Button } from "@mui/material";
import { capitalize } from "../../../core/utils/capitalize";

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
