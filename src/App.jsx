import { Navbar, Welcome, Dock } from "#components/index.js";
import useFullscreen from "./hooks/useFullscreen";

const App = () => {
  useFullscreen();
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
    </main>
  )
}

export default App;