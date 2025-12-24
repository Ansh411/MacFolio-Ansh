import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import useFullscreen from "./hooks/useFullscreen";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows/index";
import { Navbar, Welcome, Dock, Home } from "#components/index.js";

gsap.registerPlugin(Draggable);

const App = () => {
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