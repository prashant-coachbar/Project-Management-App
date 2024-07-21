import { useRef } from "react";

export default function Tasks({ onAddTask, tasks, onClear }) {
  const task = useRef();
  function handleAdd() {
    const text = task.current.value;
    if (text === "") {
      return;
    }
    onAddTask(text);
    task.current.value = "";
  }
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <input
        ref={task}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onKeyDown={(event) => event.key === "Enter" && handleAdd()}
      />
      <button
        onClick={handleAdd}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.length > 0 ? (
          tasks.map((item) => {
            return (
              <li key={item.id} className="flex justify-between my-4">
                {item.text}{" "}
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onClear(item.id)}
                >
                  Clear
                </button>
              </li>
            );
          })
        ) : (
          <p className="text-stone-800 my-4">
            This Project does not have any tasks Yet
          </p>
        )}
      </ul>
    </>
  );
}
