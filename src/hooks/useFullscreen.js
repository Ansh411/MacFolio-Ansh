import { useEffect } from "react";

const useFullscreen = () => {
  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      document.removeEventListener("click", handler);
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);
};

export default useFullscreen;
