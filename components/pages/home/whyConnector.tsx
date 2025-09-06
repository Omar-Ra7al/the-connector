"use client";

import Section from "@/components/shared/layout/section";
import Description from "@/components/shared/typography/description";
import Heading from "@/components/shared/typography/heading";
import BlurText from "@/components/ui/BlurText";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("Home.whyConnector");
  return (
    <Section type="outer">
      <div id="why-the-connector" className="mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tracking-tight"
        >
          <Heading className="text-center" level={2} size="md">
            <BlurText
              text={t("heading")}
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
            {t("description")}
          </Description>
        </motion.div>

        <h3 className="mt-8 text-2xl font-semibold text-primary">
          {t("tagline")}
        </h3>
      </div>
    </Section>
  );
}
