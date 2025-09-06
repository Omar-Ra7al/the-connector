"use client";
import Section from "@/components/shared/layout/section";
import Heading from "@/components/shared/typography/heading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Description from "@/components/shared/typography/description";
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import StyledBtn from "@/components/shared/buttons/styledBtn";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Home.services");
  return (
    <Section
      type="inner"
      className="inner-section-container flex flex-col gap-6 md:gap-12 items-center"
    >
      {/* Section Heading */}
      <AnimatedHeading size="md" level={3} text={t("heading")} />

      {/* Services Cards */}
      <div id="services" className="grid md:grid-cols-2 gap-8 w-full">
        {t.raw("services").map((service: any, index: number) => (
          <SpotlightCard
            key={index}
            className="flex flex-col justify-between p-6 rounded-xl backdrop-blur-3xl
            transition-all duration-300 hover:scale-[1.03]"
            spotlightColor="rgba(0, 190, 255, 0.15)"
          >
            <BorderBeam
              colorFrom="#00beff"
              colorTo="#00beff"
              size={150}
              duration={20} // slower, smoother
              delay={index * 10} // staggered start per card
            />
            <div>
              <Heading
                size="md"
                level={3}
                className="text-2xl font-semibold mb-3"
              >
                {service.title}
              </Heading>
              <Description size="md" className="leading-relaxed font-normal">
                {service.description}
              </Description>
            </div>

            <StyledBtn
              href={
                index === 0 ? "/services/software" : "/services/outsourcing"
              }
              text={service.ctaText}
            />
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
