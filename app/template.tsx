"use client";
import { useEffect } from "react";
import { animatePageIn } from "@/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-red-500 z-100 fixed left-0 top-0"
      />
      {children}
    </div>
  );
}
