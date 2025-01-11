export const hivesColumns = [
  { id: "label", label: "Label", minWidth: 170 },
  { id: "framesNb", label: "Frames Count", minWidth: 150 },
  { id: "health", label: "Health", minWidth: 100 },
];

export function createHivesData(label, framesNb, health) {
  return { label, framesNb, health };
}

export const fillHivesRows = ({ setRows, hives, apiaryId }) => {
  const newRows = [];
  hives[apiaryId].forEach((hive) => {
    newRows.push(
      createHivesData(
        hive.label,
        hive.nbOfframes,
        hive.diseases.length == 0 ? "Health" : "Diseased"
      )
    );
  });
  setRows(newRows);
};
