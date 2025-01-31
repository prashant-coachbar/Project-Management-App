import ProjectSideBar from "./components/ProjectSideBar";
import NoProject from "./components/NoProject";
import Input from "./Input";
import { useContext } from "react";
import Project from "./components/Project";
import { ProjectContext } from "./store/ProjectContextProvider";

function App() {
  const { selectedProjectId } = useContext(ProjectContext);

  // console.log(selectedProjectId);

  let content = <Project />;
  if (selectedProjectId === undefined) {
    content = <NoProject />;
  } else if (selectedProjectId === null) {
    content = <Input />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      {content}
    </main>
  );
}

export default App;
