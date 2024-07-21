import { useRef } from "react";
import Tasks from "./Tasks";

function Header({ data,onDelete }) {
    const formattedDate = new Date(data.dueDate).toLocaleDateString('en-US', {
        year: "numeric",
        month: "short",
        day:"numeric"
    })
  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-left gap-4 my-4">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{data.title}</h1>
        <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>Delete</button>
      </div>
      <p className="mb-4 text-stone-400">{formattedDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{data.description}</p>
    </header>
  );
}

export default function Project({ data, onDelete,onAddTask,onDeleteTask }) {
  return (
    <div className="w-[35rem] mt-16">
      <Header data={data} onDelete={onDelete} />
      <Tasks onAddTask={onAddTask} tasks={data.tasks} onClear={onDeleteTask}/>
    </div>
  );
}
