import { useState } from "react";

export default function Input({ onAdd, error }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 px-2 py-1 border rounded"
        placeholder="عنوان تسک جدید..."
      />
      <button
        onClick={handleAdd}
        className="px-4 py-1 text-white bg-blue-600 rounded"
      >
        افزودن
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
console.log("amin");
function amin() {
  console.log(amin)
}