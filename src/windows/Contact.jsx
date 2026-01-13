import { WindowControls } from "#components/index";
import { socials } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useThemeStore from "#store/theme";
import useWindowStore from "#store/window";

const Contact = () => {
  const { windows } = useWindowStore();
  const isMaximized = windows.contact?.isMaximized;
  const isDark = useThemeStore((state) => state.theme === "dark");

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div
        className={`
          p-5 space-y-5 transition-all duration-300
          ${isMaximized
            ? `
              max-w-190 mx-auto text-center
              flex flex-col items-center
              gap-6
            `
            : ""
          }
        `}
      >
        {/* Avatar */}
        <img
          src="/images/Ansh_Contact.jpg"
          alt="Ansh"
          className={`
            w-20 rounded-full
            ${isMaximized ? "w-28 shadow-md ring-1 ring-white/10" : ""}
          `}
        />

        {/* Title */}
        <h3
        className={`${isMaximized ? `text-2xl font-medium tracking-tight ${isDark ? "text-neutral-100" : "text-zinc-900"}` : ""}`}
        >
          Let's Connect
        </h3>

        {/* Description */}
        <p
          className={`${isMaximized ? `max-w-xl text-base leading-relaxed ${isDark ? "text-neutral-300" : "text-gray-600"}` : ""}`}
        >
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>

        {/* Email */}
        <a className="inline-block" href="mailto:4gansh11@gmail.com"><p
          className={`
            ${isMaximized
              ? "text-lg text-zinc-400 font-normal"
              : ""
            }
          `}
        >
         💌 4gansh11@gmail.com
        </p> </a>

        {/* Socials */}
        <ul
          className={`
            ${isMaximized
              ? "flex flex-wrap justify-center gap-4 pt-5"
              : ""
            }
          `}
        >
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className={`
                ${isMaximized
                  ? `
                    rounded-xl
                    shadow-lg
                    hover:scale-[1.04]
                    transition-transform duration-200
                  `
                  : ""
                }
              `}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className={`
                  
                  ${isMaximized
                    ? "px-4 py-2 text-sm flex items-center gap-4 text-white/90 pt-4"
                    : ""
                  }
                `}
              >
                <img src={icon} alt={text} className="size-8" />
                <p className="pb-2 text-shadow-lg">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;

