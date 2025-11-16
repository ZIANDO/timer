export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between border p-2 rounded">
      <span
        className={task.done ? "line-through text-gray-500" : ""}
      >
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="text-green-500 font-bold"
        >
          ✔
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="ml-auto text-red-500 font-bold"
        >
          🗑
        </button>
      </div>
    </li>
  );
}
