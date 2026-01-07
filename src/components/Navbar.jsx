import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants/index";
import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { toggleTheme } = useThemeStore();
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <nav
      className={`
        flex justify-between items-center
    px-5 py-2
    select-none
    backdrop-blur-4xl shadow-lg
    border-b
    transition-colors duration-300
        ${
          isDark
            ? "bg-black/40 text-gray-200 border-white/10"
            : "bg-[#d9e9f7]/70 text-gray-900 border-black/20"
        }
      `}
    >
      {/* Left */}
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Ansh's Portfolio</p>

        <ul className="px-3">
          {navLinks.map(({ id, name, type }) => (
            <li className={isDark ? "text-gray-300" : "text-gray-900"} key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`icon-${id}`}
                onClick={id === 4 ? toggleTheme : undefined}
                className={`icon-hover ${
                  id === 4 ? "cursor-pointer" : "cursor-default"
                }`}
              />
            </li>
          ))}
        </ul>

        <time className={isDark ? "text-gray-300" : "text-gray-900"}>
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
