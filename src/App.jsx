import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import useFullscreen from "./hooks/useFullscreen";
import { Terminal } from "#windows/index";
import { Navbar, Welcome, Dock } from "#components/index.js";

gsap.registerPlugin(Draggable);

const App = () => {
  useFullscreen();
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>

      <Terminal/>
    </main>
  )
}

export default App;