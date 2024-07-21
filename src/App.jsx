import ProjectSideBar from "./components/ProjectSideBar";
import NoProject from "./components/NoProject";
import Input from "./Input";
import { useState } from "react";
import Project from "./components/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));
  }
  function handleDeleteProject() {
    setProjectState((prevState) => {
      const updated = {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
      return updated;
    });
  }

  function handleSave(data) {
    const projectId = Math.random();
    const newProject = {
      ...data,
      id: projectId,
      tasks: [],
    };
    setProjectState((prevState) => {
      const updated = {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
      return updated;
    });
  }
  function handleCancel() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }
  function handleProjectBtn(id) {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: id }));
  }
  function handleAddTask(task) {
    const taskId = Math.random();
    const newTask = {
      id: taskId,
      text: task,
    };

    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        }
        return project;
      });
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  // console.log(projectState.selectedProjectId)
  // console.log(projectState.projects)

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== id),
          };
        }
        return project;
      });
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <Project
      data={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );
  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onClick={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <Input onAdd={handleSave} onCancel={handleCancel} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        projects={projectState.projects}
        onClick={handleAddProject}
        onSelect={handleProjectBtn}
      />
      {content}
    </main>
  );
}

export default App;
