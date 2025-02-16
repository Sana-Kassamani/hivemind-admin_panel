export const tasksColumns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "content", label: "Content", minWidth: 150 },
  { id: "comment", label: "CommentCount", minWidth: 150 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 150 },
];

export function createTasksData(title, content, comment, status, date) {
  return { title, content, comment, status, date };
}

export const fillTasksRows = ({ setRows, tasks, apiaryId }) => {
  const newRows = [];

  tasks[apiaryId].forEach((task) => {
    const date = new Date(task.date).toLocaleDateString("en-GB");
    newRows.push(
      createTasksData(
        task.title,
        task.content,
        task.comments.length ?? "-",
        task.status,
        date
      )
    );
  });
  setRows(newRows);
};
