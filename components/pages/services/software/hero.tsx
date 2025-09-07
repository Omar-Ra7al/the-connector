"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import StyledBtn from "@/components/shared/buttons/styledBtn";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { ArrowBigRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CARDS = [
  {
    src: "/clients/swt/websites/podMedia.png",
    alt: "PodMedia Network",
    href: "https://podmedia.network/",
  },
  {
    src: "/clients/swt/websites/oneTake.png",
    alt: "One Take",
    href: "https://one-take-iota.vercel.app/en",
  },
  {
    src: "/clients/swt/websites/podEvents.png",
    alt: "Pod Events",
    href: "https://https://podevents.network/",
  },
];

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });
  const t = useTranslations("Software.hero");

  return (
    <Section
      type="outer"
      className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-30 md:gap-[60px] min-h-screen pt-[120px] text-center xl:text-start"
    >
      {/* Left text */}
      <div className="w-full space-y-[30px]">
        <AnimatedHeading
          size="lg"
          level={1}
          text={t("heading")}
          className="xl:justify-start"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="xl:justify-start"
        >
          <Description size="md">{t("description")}</Description>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col xl:flex-row items-center xl:items-start gap-4 w-full"
        >
          <ContactUsBtn text={t("ctaButtons.primary")} />
          <StyledBtn
            href="#portfolio"
            text={t("ctaButtons.secondary")}
            className="uppercase"
          />
        </motion.div>
      </div>

      {/* Right cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative w-full flex items-center md:items-end xl:items-end justify-center h-[200px] sm:h-[250px] md:h-[450px] xl:min-h-[600px]"
        ref={ref}
      >
        {inView && (
          <CardSwap
            cardDistance={20}
            verticalDistance={60}
            delay={3000}
            pauseOnHover
            skewAmount={0}
          >
            {CARDS.map(({ src, alt, href }, idx) => (
              <Card
                key={idx}
                className="w-full !h-[300px] lg:!w-[600px] lg:!h-[380px]"
              >
                <Link
                  href={href}
                  className="absolute inset-0 w-full h-full rounded-md overflow-hidden shadow-md shadow-secondary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white font-bold text-lg lg:text-2xl drop-shadow-md">
                      {alt}
                    </h3>
                    <p className="text-sm animate-pulse lg:text-base text-white/80 flex items-center gap-2 mt-1">
                      <ArrowBigRight className="" />
                      {t("visitSite")}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </CardSwap>
        )}
      </motion.div>
    </Section>
  );
};

export default Hero;
