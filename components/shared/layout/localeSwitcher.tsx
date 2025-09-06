"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { FaFlagUsa, FaFlag } from "react-icons/fa"; // Usa flag for en, generic flag for ar
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Languages } from "lucide-react";

export default function LocaleSwitcher() {
  const pathname = usePathname().slice(3); // remove "/en" or "/ar"
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(`/${newLocale}${pathname}`);
  };

  return (
    <HoverBorderGradient
      as="button"
      containerClassName="rounded-md z-50 w-full md:w-fit md:fixed md:top-10 md:left-4 active:scale-[0.93]"
      className="h-[40px] flex items-center gap-2 p-2 justify-center  cursor-pointer shadow-md
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all
                  bg-black duration-300"
      onClick={handleClick}
    >
      {/* Icon with motion */}
      <motion.span className="flex items-center">
        <Languages />
      </motion.span>

      {/* Text */}
      <span className="text-lg uppercase font-semibold text-primary">
        {locale === "en" ? "Ar" : "En"}
      </span>
    </HoverBorderGradient>
  );
}
