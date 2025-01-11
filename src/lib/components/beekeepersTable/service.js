import { Button } from "@mui/material";
import { capitalize } from "../../../core/utils/capitalize";
import { BanButton, UnbanButton } from "../banButton";

export const beekeepersColumns = [
  { id: "username", label: "Username", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "owner", label: "Owner", minWidth: 170 },
  { id: "apiary", label: "Assigned Apiary", minWidth: 170 },
  { id: "banBtn", label: "", minWidth: 100 },
  { id: "unbanBtn", label: "", minWidth: 100 },
];

export function createBeekeepersData(
  username,
  email,
  owner,
  apiary,
  banBtn,
  unbanBtn
) {
  return { username, email, owner, apiary, banBtn, unbanBtn };
}

export const fillBeekeepersRows = ({
  setRows,
  owners,
  beekeepers,
  apiaries,
}) => {
  const newRows = beekeepers.map((b) => {
    const owner = owners.find((o) =>
      o.apiaries.find((a) => b.assignedApiary === a)
    );
    console.log("Assigned ", b.assignedApiary);
    const apiary = apiaries[b.assignedApiary];
    return createBeekeepersData(
      b.username,
      b.email,
      owner ? capitalize(owner.username) : "",
      apiary ? apiary.label : "No Apiary Assigned",
      <BanButton userId={b._id} isDisabled={b.settings.banned} />,
      <UnbanButton userId={b._id} isDisabled={!b.settings.banned} />
    );
  });
  setRows(newRows);
};
