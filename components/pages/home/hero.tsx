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
        type="inner"
        className="!z-20 py-[120px] relative w-full min-h-screen flex flex-col items-center justify-center gap-[40px] lg:gap-[60px] lg:!max-w-[70%]"
      >
        <div className="flex flex-col gap-[20px] ">
          {/* Heading & Logo */}
          <div className="w-full flex flex-col justify-center items-center">
            {/* Logo Text */}
            <div className="flex items-center">
              <BlurText
                text={t("hero.logoText") + " "}
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-[35px] md:text-[50px] lg:text-[64px] font-bold"
              />
              <FadeIn delay={0.5} duration={0.5}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={70}
                  height={70}
                  priority
                  className="animate-pulse object-contain w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
                />
              </FadeIn>
            </div>

            {/* Main Heading */}
            <BlurText
              text={t("hero.mainHeading")}
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-[35px] lg:text-[64px] font-semibold flex items-center justify-center"
            />
          </div>

          {/* Subtitle */}
          <FadeIn delay={1.5} duration={1}>
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
          delay={2.5}
          duration={0.3}
          className="flex flex-col gap-[40px] items-center"
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

          <FadeIn className="flex items-center" delay={2.8} duration={0.5}>
            <ContactUsBtn text={t("hero.ctaButton")} />
          </FadeIn>
        </FadeIn>
      </Section>
    </div>
  );
}
