import { useContext } from "react";
import noProject from "../assets/no-projects.png";
import { ProjectContext } from "../store/ProjectContextProvider";

export default function NoProject() {
  const { addProject } = useContext(ProjectContext);
  return (
    <div style={{ width: "100%" }}>
      {/* <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProject}
        alt="task logo"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or get started with a new one
      </p>
      <button
        onClick={addProject}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
      >
        Create New Project
      </button> */}
      {/* <div id="prm-lead-form" style={{ height: "600px", width: "100%" }}></div> */}
      {/* <div id="channelboost-form-container-123"></div> */}
      {/* <div id="referral-widget"></div> */}
      {/* <div id="channelboost-form-container-456"></div> */}

      <div id="340ecb4d-bb1f-d23d-1896-019743cb6ced"></div>
    </div>
  );
}
