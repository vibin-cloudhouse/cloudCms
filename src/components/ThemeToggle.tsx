
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Toggle } from "@/components/ui/toggle";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Toggle
      aria-label="Toggle dark mode"
      className="rounded-full p-2 bg-transparent hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 text-slate-200" />
      ) : (
        <Sun className="h-4 w-4 text-slate-700" />
      )}
    </Toggle>
  );
};
