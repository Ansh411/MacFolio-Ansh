import { WindowControls } from "#components/index";
import { techStack } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useThemeStore from "#store/theme";
import useWindowStore from "#store/window";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  
  const isMaximized = useWindowStore((state) => state.windows.terminal.isMaximized);
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  
    
  return (
    <>
    <div id="window-header">
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
    </div>

    <div className={`techstack ${isMaximized ? "text-lg p-10 mx-[50vh] mt-20" : "text-sm p-5"}`}>
        <p>
           <span className={`${isMaximized ? "font-extrabold" : "font-bold"}`}>@ansh % </span>
           show tech stack 
        </p>

        <div className="label">
            <p className="w-32">Category</p>
            <p>Technologies</p>
        </div>

        <ul className="content">
            {techStack.map(({ category, items }) => (
                <li key={category} className="flex items-center">
                   <Check className="check" size={20} />
                   <h3>{category}</h3> 
                   <ul>
                    {items.map((item , i) => (
                        <li key={i}>{item} {i < items.length - 1 ? "," : ""}</li>
                    ))}
                   </ul>
                </li>
            ))}
        </ul>
        <div className="footnote">
            <p>
                <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
            </p>
            <p className={`${isDark ? "text-neutral-100" : "text-gray-900"}`}>
                <Flag size={15} color={`${isDark ? "white" : "black"}`} fill={`${isDark ? "white" : "black"}`} />
                Render time : 5ms
            </p>
        </div>

    </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;