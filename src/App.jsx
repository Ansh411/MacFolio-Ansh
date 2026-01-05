import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import useFullscreen from "./hooks/useFullscreen";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows/index";
import { Navbar, Welcome, Dock, Home } from "#components/index.js";
import useThemeStore from "#store/theme";
import { useEffect } from "react";

gsap.registerPlugin(Draggable);

const App = () => {

  const { theme } = useThemeStore();
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useFullscreen();
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  )
}

export default App;