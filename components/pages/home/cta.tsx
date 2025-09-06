import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import Heading from "@/components/shared/typography/heading";
import { Link } from "@/i18n/navigation";
import React from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/shared/layout/section";

const Cta = () => {
  const t = useTranslations("Home.cta");
  return (
    <Section type="outer" className="relative text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-[30px]">
        <AnimatedHeading size="md" level={3} text={t("heading")} />

        <Description size="md">{t("description")}</Description>

        <ContactUsBtn text={t("buttonText")} />
      </div>
    </Section>
  );
};

export default Cta;
