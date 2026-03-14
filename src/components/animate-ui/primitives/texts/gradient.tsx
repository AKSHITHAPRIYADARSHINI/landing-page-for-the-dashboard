"use client";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  text: string;
  className?: string;
  neon?: boolean;
};

export function GradientText({ text, className, neon = false }: GradientTextProps) {
  return (
    <h1
      className={cn(
        "gradient-flow-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600 bg-clip-text text-transparent dark:from-blue-300 dark:via-cyan-300 dark:to-emerald-300",
        neon && "drop-shadow-[0_0_22px_rgba(34,211,238,0.35)]",
        className,
      )}
    >
      {text}
    </h1>
  );
}
