"use client";

import Link from "next/link";

interface StyledBtnProps {
  text: string;
  href?: string; // optional, if provided the button navigates
  onClick?: () => void; // optional, if you want a click handler
  className?: string;
}

export default function StyledBtn({
  text,
  href,
  onClick,
  className,
}: StyledBtnProps) {
  const baseStyles =
    "w-fit text-md lg:text-lg font-bold text border py-2 px-6 rounded-md transition-all duration-300 cursor-pointer hover:shadow-[0_0_5px_var(--secondary)] hover:bg-secondary active:scale-[0.98]";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {text}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
