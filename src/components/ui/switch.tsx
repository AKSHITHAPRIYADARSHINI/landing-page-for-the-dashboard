"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  ariaLabel?: string;
};

export function Switch({ checked, onCheckedChange, className, ariaLabel }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full border border-border/80 bg-muted/70 p-0.5 transition-colors",
        checked && "bg-primary/20",
        className,
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={cn("h-[18px] w-[18px] rounded-full bg-background shadow-sm", checked && "bg-primary")}
        style={{ width: 18, height: 18, x: checked ? 18 : 0 }}
      />
    </button>
  );
}
