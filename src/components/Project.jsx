import { useContext, useRef } from "react";
import Tasks from "./Tasks";
import { ProjectContext } from "../store/ProjectContextProvider";

function Header({ data }) {
  const { deleteProject } = useContext(ProjectContext);
  const formattedDate = new Date(data.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-left gap-4 my-4">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{data.title}</h1>
        <button
          className="text-stone-600 hover:text-stone-950"
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>
      <p className="mb-4 text-stone-400">{formattedDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{data.description}</p>
    </header>
  );
}

export default function Project() {
  const { selectedProjectId, projects } = useContext(ProjectContext);
  const data = projects.find((project) => project.id === selectedProjectId);
  return (
    <div className="w-[35rem] mt-16">
      <Header data={data} />
      <Tasks tasks={data.tasks} />
    </div>
  );
}
