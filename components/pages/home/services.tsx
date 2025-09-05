"use client";
import Section from "@/components/shared/layout/section";
import Heading from "@/components/shared/typography/heading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import BlurText from "@/components/ui/BlurText";
import Description from "@/components/shared/typography/description";
import { Link } from "@/i18n/navigation";
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import StyledBtn from "@/components/shared/buttons/styledBtn";

const services = [
  {
    title: "Software Engineering",
    description:
      "We build **secure, future-ready digital solutions** that help your business grow. From modern applications to scalable platforms, our engineering expertise ensures technology drives your success.",
    link: "/services/software",
  },
  {
    title: "Outsourcing",
    description:
      "We connect companies with the **right talent at the right time**. Our outsourcing solutions offer flexibility, reliability, and scalability—empowering businesses to expand without limits.",
    link: "/services/outsourcing",
  },
];

export default function Services() {
  return (
    <Section
      type="inner"
      className="inner-section-container flex flex-col gap-6 md:gap-12 items-center"
    >
      {/* Section Heading */}
      <AnimatedHeading
        size="md"
        level={3}
        text="How We Empower Your Business"
      />

      {/* Services Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {services.map((service, index) => (
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

            <StyledBtn href={service.link} text={`Explore ${service.title}`} />
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
