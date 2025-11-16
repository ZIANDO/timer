import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
