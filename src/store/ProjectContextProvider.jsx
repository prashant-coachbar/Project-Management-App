import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  addProject: () => {},
  deleteProject: () => {},
  save: () => {},
  cancel: () => {},
  projectbtn: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

function projectStateReducer(state, action) {
  switch (action.type) {
    case "ADDPROJECT":
      return { ...state, selectedProjectId: null };
    case "DELETEPROJECT": {
      const updated = {
        ...state,
        selectedProjectId: undefined,
        projects: state.projects.filter(
          (project) => project.id !== state.selectedProjectId
        ),
      };
      return updated;
    }
    case "SAVE": {
      const projectId = Math.random();
      const newProject = {
        ...action.payload,
        id: projectId,
        tasks: [],
      };
      const updated = {
        ...state,
        selectedProjectId: projectId,
        projects: [...state.projects, newProject],
      };
      return updated;
    }
    case "CANCEL":
      return {
        ...state,
        selectedProjectId: undefined,
      };
    case "PROJECTBTN":
      return { ...state, selectedProjectId: action.payload };
    case "ADDTASK": {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: action.payload,
      };
      const updatedProjects = state.projects.map((project) => {
        if (project.id === state.selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        }
        return project;
      });
      return {
        ...state,
        projects: updatedProjects,
      };
    }
    case "DELETETASK": {
      const updatedProjects = state.projects.map((project) => {
        if (project.id === state.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== action.payload),
          };
        }
        return project;
      });
      return {
        ...state,
        projects: updatedProjects,
      };
    }
    default:
      return state;
  }
}

export default function ProjectContextProvider({ children }) {
  const [projectState, dispatcher] = useReducer(projectStateReducer, {
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    dispatcher({
      type: "ADDPROJECT",
    });
  }
  function handleDeleteProject() {
    dispatcher({
      type: "DELETEPROJECT",
    });
  }

  function handleSave(data) {
    dispatcher({
      type: "SAVE",
      payload: data,
    });
  }
  function handleCancel() {
    dispatcher({
      type: "CANCEL",
    });
  }
  function handleProjectBtn(id) {
    dispatcher({
      type: "PROJECTBTN",
      payload: id,
    });
  }
  function handleAddTask(task) {
    dispatcher({
      type: "ADDTASK",
      payload: task,
    });
  }
  // console.log(projectState.selectedProjectId)
  // console.log(projectState.projects)

  function handleDeleteTask(id) {
    dispatcher({
      type: "DELETETASK",
      payload: id,
    });
  }

  const CtxValue = {
    selectedProjectId: projectState.selectedProjectId,
    projects: projectState.projects,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    save: handleSave,
    cancel: handleCancel,
    projectbtn: handleProjectBtn,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return (
    <ProjectContext.Provider value={CtxValue}>
      {children}
    </ProjectContext.Provider>
  );
}
