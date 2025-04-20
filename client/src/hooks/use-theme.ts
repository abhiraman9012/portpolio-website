import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useThemeDetector() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check if localStorage theme exists
    const localTheme = localStorage.getItem("theme") as Theme | null;
    
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If no localStorage, check system preference
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setActiveTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark" || 
        (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return { theme, setTheme: setActiveTheme };
}
