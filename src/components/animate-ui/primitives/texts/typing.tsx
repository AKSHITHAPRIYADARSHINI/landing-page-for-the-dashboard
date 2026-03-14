"use client";

import { Children, isValidElement, ReactNode, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type TypingTextProps = {
  text: string;
  delay?: number;
  holdDelay?: number;
  loop?: boolean;
  className?: string;
  children?: ReactNode;
};

export function TypingText({
  text,
  delay = 20,
  holdDelay = 2000,
  loop = false,
  className,
  children,
}: TypingTextProps) {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const chars = useMemo(() => Array.from(text), [text]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    if (index < chars.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (loop) {
      const resetTimer = setTimeout(() => {
        setIndex(0);
      }, holdDelay);
      return () => clearTimeout(resetTimer);
    }

    return;
  }, [chars.length, delay, holdDelay, index, isClient, loop]);

  const cursor = Children.toArray(children).find((child) =>
    isValidElement(child) && (child.type as { displayName?: string }).displayName === "TypingTextCursor",
  );

  return (
    <p className={cn("leading-relaxed", className)}>
      <span>{isClient ? chars.slice(0, index).join("") : text}</span>
      {cursor}
    </p>
  );
}

export function TypingTextCursor({ className }: { className?: string }) {
  return <span className={cn("ml-1 inline-block h-4 w-0.5 animate-pulse bg-current", className)} />;
}

TypingTextCursor.displayName = "TypingTextCursor";
