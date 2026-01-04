import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, isMinimized, isMaximized, ZIndex } = windows[windowKey];
    const ref = useRef(null);

    // OPEN animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, [isOpen, isMinimized]);

    // Drag only when not maximized
    useGSAP(() => {
      const el = ref.current;
      if (!el || isMaximized) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isMaximized]);

    // Visibility handling
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (!isOpen || isMinimized) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    }, [isOpen, isMinimized]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex: ZIndex,
          inset: isMaximized ? 0 : "auto",
        }}
        className={`absolute ${
          isMaximized
            ? "w-screen h-screen left-0 top-0"
            : ""
        }`}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
