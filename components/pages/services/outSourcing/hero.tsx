"use client";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import StyledBtn from "@/components/shared/buttons/styledBtn";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { GlobeSection } from "./globe";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });
  const t = useTranslations("Outsourcing.hero");
  return (
    <Section
      type="outer"
      className="flex items-center justify-center  gap-[30px] flex-wrap xl:flex-nowrap min-h-screen py-[120px] text-center xl:text-start"
    >
      {/* Left text */}
      <div className="w-full space-y-[30px]">
        <AnimatedHeading
          className="xl:justify-start"
          size="lg"
          level={1}
          text={t("heading")}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="xl:justify-start"
        >
          <Description size="md">{t("description")}</Description>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full"
        >
          <div className="flex flex-col items-center xl:items-start xl:flex-row itmes-center gap-4">
            <ContactUsBtn text={t("ctaButtons.primary")} />
            <StyledBtn
              className="uppercase"
              href="#clients"
              text={t("ctaButtons.secondary")}
            />
          </div>
        </motion.div>
      </div>
      <div ref={ref} className="relative flex items-center justify-center">
        {inView && <GlobeSection />}
      </div>
    </Section>
  );
};

export default Hero;
