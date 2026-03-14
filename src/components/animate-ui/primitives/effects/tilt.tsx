"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: ReactNode;
  className?: string;
};

export function Tilt({ children, className }: TiltProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={cn("transform-gpu", className)}
      style={{ perspective: 900 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        setRotate({ x: (0.5 - py) * 6, y: (px - 0.5) * 8 });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

export function TiltContent({ children, className }: TiltProps) {
  return <div className={cn("will-change-transform", className)}>{children}</div>;
}
