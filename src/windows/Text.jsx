import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/index";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;
  const isMaximized = windows.txtfile?.isMaximized;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div
        className={`mx-auto transition-all
          ${isMaximized ? "max-w-5xl p-12 space-y-8 mt-10 font-semibold" : "max-w-2xl p-5 space-y-6"}
        `}
      >
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full rounded max-h-[40vh] object-contain"
          />
        )}

        {subtitle && (
          <h3 className={isMaximized ? "text-3xl" : "text-lg font-semibold"}>
            {subtitle}
          </h3>
        )}

        {Array.isArray(description) && (
          <div
            className={`leading-relaxed text-gray-800
              ${isMaximized ? "text-lg space-y-5" : "text-base space-y-3"}
            `}
          >
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WindowWrapper(Text, "txtfile");


