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

export const config = {
  cmsData: [
    {
      slug: "banner",
      data: {
        image:
          "https://dev-assets.channelboost.com/channelboost-logos/Logo.svg",
        text: "Be a Good Friend with ChannelBoost",
        textColor: "#FFFFFF",
        alignment: "left",
        sectionBg: "#233876", // try 'left' or 'right' too!
      },
    },
    {
      slug: "header",
      data: {
        text: "Give $150 Get $150",
        textColor: "#131518",
        alignment: "center",
      },
    },
    ,
    {
      slug: "paragraph",
      data: {
        text: "We’ll give you a custom link to share out via text, email, and social media. Every time someone signs up* with your link, you’ll both score $150!",
        textColor: "#131518",
        alignment: "center",
      },
    },
    {
      slug: "input",
      data: {
        inputLabel: "Email Address",
        inputPlaceholder: "Enter Email Address",
        inputLabelColor: "#131518",
        inputBorderColor: "#9EA5AD",
        primaryBtnText: "Invite",
        primaryBtnBgColor: "#0C94AC",
        primaryBtnTextColor: "#fff",
        primaryBtnBorderColor: "#0C94AC",
        alignment: "right",
      },
    },
  ],
  themeSetting: {
    colors: {
      headerTextColor: "#131518",
      bannerTextColor: "#FFFFFF",
      paragraphTextColor: "#131518",
      inputBorderColor: "#9EA5AD",
      btnBgColor: "#0C94AC",
      btnBorderColor: "#0C94AC",
      sectionBg: "#F0F1F3",
    },
    typography: {
      headerFontFamily: "Inter, sans-serif",
      headerFontSize: "22px",
      paragraphFontFamily: "Inter, sans-serif",
      paragraphFontSize: "14px",
      btnFontFamily: "Inter, sans-serif",
      btnFontSize: "14px",
      bannerFontFamily: "Inter, sans-serif",
      bannerFontSize: "22px",
    },
  },
};
