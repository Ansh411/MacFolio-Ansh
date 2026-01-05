import { WindowControls } from "#components/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  const isMaximized = windows.imgfile?.isMaximized;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div
        className={`flex justify-center items-center bg-transparent
          ${isMaximized ? "p-10 h-[calc(100vh-48px)]" : "p-5"}
        `}
      >
        <img
          src={imageUrl}
          alt={name}
          className={`rounded object-contain transition-all
            ${isMaximized ? "max-w-full max-h-full" : "max-h-[70vh]"}
          `}
        />
      </div>
    </>
  );
};

export default WindowWrapper(Image, "imgfile");


