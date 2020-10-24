import { useEffect, useState, createContext, useContext } from "react";

type Mode = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: Mode) => {
    window.localStorage.setItem("theme", mode);
    document.querySelector(":root")?.classList.toggle("dark");
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("light");
    }
  }, []);

  return [theme, toggleTheme];
};
