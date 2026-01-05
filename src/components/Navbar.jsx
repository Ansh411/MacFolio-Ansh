import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants/index";
import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";

const Navbar = () => {

  const { openWindow } = useWindowStore();
  const { toggleTheme } = useThemeStore();

  return (
    <nav className="bg-white/50 dark:bg-black/40 backdrop-blur-xl dark:text-gray-200">

      <div>
        <img src="/images/logo.svg" alt="logo"/>
        <p className="font-bold">Ansh's Portfolio</p>

        <ul>
          {navLinks.map(({id , name, type}) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({id, img}) => (
            <li key={id}>
              <img onClick={id === 4 ? toggleTheme : undefined}
               src={img} className={`icon-hover ${id === 4 ? "cursor-pointer" : "cursor-default"}`}
              alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time className="dark:text-gray-300">{dayjs().format("ddd MMM D h:mm A")}</time>

      </div>
    </nav>
  )
}

export default Navbar;