"use client";

import { cloneElement, isValidElement, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShineProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  enable?: boolean;
  enableOnHover?: boolean;
  duration?: number;
  loop?: boolean;
  loopDelay?: number;
  deg?: number;
};

export function Shine({
  children,
  className,
  asChild,
  enable = true,
  enableOnHover = false,
  duration = 5,
  loop = true,
  loopDelay = 2,
  deg = 12,
}: ShineProps) {
  const wrapperClass = cn(
    "group relative inline-flex overflow-hidden rounded-full",
    enable && "before:pointer-events-none before:absolute before:inset-0 before:content-['']",
    className,
  );

  const shineStyle = enable
    ? {
        animationDuration: `${duration}s`,
        animationIterationCount: loop ? "infinite" : "1",
        animationDelay: `${loopDelay}s`,
        transform: `skewX(${deg}deg)`,
      }
    : undefined;

  const overlay = enable ? (
    <span
      className={cn(
        "pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent",
        enableOnHover ? "translate-x-[-240%] transition-transform duration-700 group-hover:translate-x-[420%]" : "animate-[shineSweep_linear_infinite]",
      )}
      style={enableOnHover ? undefined : shineStyle}
    />
  ) : null;

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    return (
      <span className={wrapperClass}>
        {cloneElement(child, { className: cn("relative", child.props.className) })}
        {overlay}
      </span>
    );
  }

  return (
    <span className={wrapperClass}>
      {children}
      {overlay}
    </span>
  );
}
