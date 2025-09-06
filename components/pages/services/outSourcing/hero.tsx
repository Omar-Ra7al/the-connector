"use client";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import StyledBtn from "@/components/shared/buttons/styledBtn";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section
      type="outer"
      className="flex items-center justify-center gap-[30px] flex-wrap xl:flex-nowrap min-h-screen py-[120px] text-center xl:text-start"
    >
      {/* Left text */}
      <div className="w-full space-y-[30px]">
        <AnimatedHeading
          className="xl:justify-start"
          size="lg"
          level={1}
          text="Scale Smarter with Outsourcing Excellence”"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="xl:justify-start"
        >
          <Description size="md">
            Focus on your business, while we handle the tech, talent, and
            delivery.
          </Description>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full"
        >
          <div className="flex flex-col items-center xl:items-start xl:flex-row itmes-center gap-4">
            <ContactUsBtn text={`Get Started Today`} />
            <StyledBtn
              className="uppercase"
              href="#clients"
              text={`See Our Clients`}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
