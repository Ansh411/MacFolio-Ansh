import { locations } from "#constants/index";
import useLocationStore from "#store/location";
import useThemeStore from "#store/theme";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {

  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  }

  useGSAP(() => {
    Draggable.create(".folder");
  },[]);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li key={project.id} 
          className={clsx("group folder", project.windowPosition)}
          onClick={() => handleOpenProjectFinder(project)}
          >
            <img src={`${isDark ? "/images/folder_dark.png" : "/images/folder_light.png"} `} alt={project.name}/>
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home;