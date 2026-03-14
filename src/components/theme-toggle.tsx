"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const mounted = useMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return <div className="h-6 w-16" aria-hidden="true" />;
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <div className="inline-flex items-center gap-2" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <Sun className="h-4 w-4 text-slate-700 dark:text-slate-300" />
      <Switch
        checked={Boolean(isDark)}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        ariaLabel="Toggle color theme"
      />
      <Moon className="h-4 w-4 text-slate-700 dark:text-slate-300" />
    </div>
  );
}
