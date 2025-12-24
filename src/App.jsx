import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import useFullscreen from "./hooks/useFullscreen";
import { Terminal, Safari, Resume } from "#windows/index";
import { Navbar, Welcome, Dock } from "#components/index.js";

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
    </main>
  )
}

export default App;