"use client";

import BlurText from "@/components/ui/BlurText";
import React from "react";
import Heading from "./heading";
interface HeadingProps {
  size: "sm" | "md" | "lg";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const AnimatedHeading = ({
  size,
  level,
  text,
  className,
}: HeadingProps & { text: string }) => {
  return (
    <Heading size={size} level={level}>
      <BlurText
        text={text}
        animateBy="words"
        direction="bottom"
        className={`flex items-center justify-center text-center ${className}`}
      />
    </Heading>
  );
};

export default AnimatedHeading;
