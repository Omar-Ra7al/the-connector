"use client";

import Section from "@/components/shared/layout/section";
import Description from "@/components/shared/typography/description";
import Heading from "@/components/shared/typography/heading";
import BlurText from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Section type="inner" className="w-full">
      <div className="mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tracking-tight"
        >
          <Heading className="text-center" level={2} size="md">
            <BlurText
              text="Why The Connector?"
              animateBy="words"
              direction="bottom"
              className="text-center flex items-center justify-center"
            />
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:max-w-5xl mx-auto"
        >
          <Description size="md" className="mt-6 leading-relaxed font-normal">
            We are <strong>The Connector</strong>, a company built on{" "}
            <strong>trust, strategy, and execution</strong>. With a foundation
            in global consulting, we now focus on two pillars:{" "}
            <strong>Software Engineering</strong> and{" "}
            <strong>Outsourcing</strong>.
            <br />
            <br />
            Our strength lies in doing them exceptionally well—crafting{" "}
            <strong>secure, future-ready digital solutions</strong> and{" "}
            <strong>connecting businesses with the right talent</strong> at the
            right time.
          </Description>
        </motion.div>

        <h3 className="mt-8 text-2xl font-semibold text-primary">
          Connecting Businesses to <strong>Software &amp; Talent</strong> That
          Scale
        </h3>
      </div>
    </Section>
  );
}
