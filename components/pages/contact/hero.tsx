"use client";
import Section from "@/components/shared/layout/section";
import Description from "@/components/shared/typography/description";
import Heading from "@/components/shared/typography/heading";
import LightRays from "@/components/ui/LightRays";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ContactForm } from "./form";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import FadeIn from "@/components/shared/sections/fadeIn";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });
  const t = useTranslations("Contact.hero");
  return (
    <div
      ref={ref}
      className="pt-[120px] space-y-[60px] relative w-full min-h-screen"
    >
      {inView && (
        <LightRays
          raysOrigin="top-center"
          raysColor="var(--color-primary)"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={2}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays dark:bg-black"
        />
      )}

      <Section type="outer" className="relative text-center bg-gradient-to-b ">
        <AnimatedHeading
          size="lg"
          level={1}
          text={t("heading")}
        ></AnimatedHeading>

        {/* Subtitle */}
        <FadeIn delay={1.5} duration={1}>
          <Description
            size="lg"
            className="font-normal text-center max-w-[90%] lg:max-w-[70%] mx-auto"
          >
            {t("subtitle")}
          </Description>
        </FadeIn>
      </Section>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Hero;
