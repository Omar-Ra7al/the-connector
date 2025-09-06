"use client";
import Section from "@/components/shared/layout/section";
import Heading from "@/components/shared/typography/heading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import { BorderBeam } from "@/components/magicui/border-beam";
import GlassIcons from "@/components/ui/GlassIcons";

// react-icons
import { FiUsers, FiBriefcase, FiClock, FiTrendingUp } from "react-icons/fi";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Outsourcing.services");

  const services = [
    {
      icon: {
        icon: <FiUsers />,
        color: "primary",
        label: "Talent",
        sizePx: 50,
      },
      title: t.raw("services")[0].title,
      description: t.raw("services")[0].description,
      link: "/services/staff-augmentation",
    },
    {
      icon: {
        icon: <FiBriefcase />,
        color: "primary",
        label: "Outsourcing",
        sizePx: 50,
      },
      title: t.raw("services")[1].title,
      description: t.raw("services")[1].description,
      link: "/services/outsourcing",
    },
    {
      icon: {
        icon: <FiClock />,
        color: "primary",
        label: "Flexibility",
        sizePx: 50,
      },
      title: t.raw("services")[2].title,
      description: t.raw("services")[2].description,
      link: "/services/flexible-engagement",
    },
    {
      icon: {
        icon: <FiTrendingUp />,
        color: "primary",
        label: "Growth",
        sizePx: 50,
      },
      title: t.raw("services")[3].title,
      description: t.raw("services")[3].description,
      link: "/services/dedicated-teams",
    },
  ];
  return (
    <Section
      type="outer"
      className="inner-section-container flex flex-col gap-6 md:gap-12 items-center"
    >
      {/* Section Heading */}
      <AnimatedHeading size="md" level={3} text={t("heading")} />

      {/* Services Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {services.map((service, index) => (
          <SpotlightCard
            key={index}
            className="flex flex-col justify-between gap-y-[20px] p-6
            rounded-xl bg-primary/10 backdrop-blur-3xl
            transition-all duration-300 hover:scale-y-[1.03]"
            spotlightColor="rgba(0, 190, 255, 0.15)"
          >
            <BorderBeam
              colorFrom="#00beff"
              colorTo="#00beff"
              size={150}
              duration={20}
              delay={index * 5}
            />
            <div className="w-full flex items-center justify-center mb-4">
              {service.icon && <GlassIcons items={[service.icon]} />}
            </div>

            <Heading
              size="sm"
              level={3}
              className="text-2xl font-semibold mb-3 text-center"
            >
              {service.title}
            </Heading>

            <p className="text-muted-foreground text-center leading-relaxed">
              {service.description}
            </p>
          </SpotlightCard>
        ))}
      </div>
      <ContactUsBtn text={t("ctaButton")} />
    </Section>
  );
}
