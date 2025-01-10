import { Button } from "@mui/material";
import { capitalize } from "../../../core/utils/capitalize";

export const apiariesColumns = [
  { id: "name", label: "Label", minWidth: 170 },
  { id: "location", label: "Location", minWidth: 200 },
  { id: "hivesNb", label: "Hives Count", minWidth: 100 },
  { id: "tasksNb", label: "Tasks Count", minWidth: 100 },
  { id: "beekeeper", label: "Beekeeper", minWidth: 170 },
  { id: "detailsBtn", label: "", minWidth: 100 },
];

export function createApiariesData(
  name,
  location,
  hivesNb,
  tasksNb,
  beekeeper,
  detailsBtn
) {
  return { name, location, hivesNb, tasksNb, beekeeper, detailsBtn };
}
