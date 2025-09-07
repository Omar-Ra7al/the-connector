"use client";
import Section from "@/components/shared/layout/section";
import Description from "@/components/shared/typography/description";
import BlurText from "@/components/ui/BlurText";
import LightRays from "@/components/ui/LightRays";
import { useTranslations } from "next-intl";
import TrueFocus from "@/components/ui/TrueFocus";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import Image from "next/image";
import FadeIn from "@/components/shared/sections/fadeIn";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Logo from "@/components/shared/layout/logo";

export default function Hero() {
  const t = useTranslations("Home");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <div ref={ref} className="relative w-full min-h-screen">
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

      <Section
        type="outer"
        className="!z-20 py-[120px] relative min-h-screen flex flex-col items-center justify-center gap-[40px] lg:gap-[60px] lg:!max-w-[70%]"
      >
        <div className="flex flex-col gap-[20px] ">
          {/* Heading & Logo */}
          <div className="w-full flex flex-col justify-center items-center">
            {/* Logo Text */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <AnimatedHeading size="lg" level={1} text={t("hero.logoText")} />
              <FadeIn delay={0.5} y={15} scale={0.9} duration={0.5}>
                <Logo className="animate-pulse" />
              </FadeIn>
            </div>

            {/* Main Heading */}

            <BlurText
              text={t("hero.mainHeading")}
              delay={50}
              animateBy="words"
              direction="bottom"
              className="text-[35px] lg:text-[64px] font-semibold flex items-center justify-center"
            />
          </div>

          {/* Subtitle */}
          <FadeIn delay={0.6} duration={1}>
            <Description
              size="lg"
              className="font-normal text-center max-w-[90%] lg:max-w-[70%] mx-auto"
            >
              {t("hero.subtitle")}
            </Description>
          </FadeIn>
        </div>

        {/* Bottom Section */}
        <FadeIn
          delay={0.8}
          duration={0.3}
          className="flex flex-col gap-[40px] items-center max-w-[90%]"
        >
          {/* Services Label */}
          <p className="text-sm uppercase tracking-[2px] text-gray-400 text-center">
            {t("hero.servicesLabel")}
          </p>

          <TrueFocus
            sentence={t("hero.servicesText")}
            manualMode
            blurAmount={3}
            borderColor="var(--primary)"
            animationDuration={0.3}
            links={["/services/software", "/services/outsourcing"]}
            glowColor="rgba(255, 255, 0, 0.9)"
          />

          <FadeIn
            className="flex items-center"
            y={0}
            scale={0.9}
            delay={1.2}
            duration={0.5}
          >
            <ContactUsBtn text={t("hero.ctaButton")} />
          </FadeIn>
        </FadeIn>
      </Section>
    </div>
  );
}
