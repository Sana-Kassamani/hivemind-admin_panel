import { capitalize } from "../../../core/utils/capitalize";

import DetailsButton from "../detailsButton";

export const apiariesColumns = [
  { id: "label", label: "Label", minWidth: 170 },
  { id: "location", label: "Location", minWidth: 200 },
  { id: "hivesNb", label: "Hives Count", minWidth: 100 },
  { id: "tasksNb", label: "Tasks Count", minWidth: 100 },
  { id: "beekeeper", label: "Beekeeper", minWidth: 170 },
  { id: "detailsBtn", label: "", minWidth: 100 },
];

export function createApiariesData(
  label,
  location,
  hivesNb,
  tasksNb,
  beekeeper,
  detailsBtn
) {
  return { label, location, hivesNb, tasksNb, beekeeper, detailsBtn };
}

export const fillApiariesRows = ({ setRows, apiaries, beekeepers }) => {
  const newRows = [];
  Object.entries(apiaries).forEach(([key, apiary]) => {
    const name =
      beekeepers.find((b) => b.assignedApiary === apiary._id)?.username || "";
    newRows.push(
      createApiariesData(
        apiary.label,
        apiary.location,
        apiary.hivesNb,
        apiary.tasksNb,
        capitalize(name),
        <DetailsButton apiaryId={apiary._id} />
      )
    );
  });
  setRows(newRows);
};
