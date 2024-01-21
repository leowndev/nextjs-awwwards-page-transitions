"use client";

import { animatePageOut } from "@/animations";
import { useRouter } from "next/navigation";

interface TransitionLinkProps {
  label: string;
  href: string;
}

export const TransitionLink = ({ label, href }: TransitionLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };
  return (
    <button
      onClick={handleClick}
      className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
    >
      {label}
    </button>
  );
};
