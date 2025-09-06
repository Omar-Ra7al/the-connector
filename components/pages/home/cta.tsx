import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import Heading from "@/components/shared/typography/heading";
import { Link } from "@/i18n/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const Cta = () => {
  const t = useTranslations("Home.cta");
  return (
    <section className="relative text-center text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-[30px]">
        <AnimatedHeading size="md" level={3} text={t("heading")} />

        <Description size="md">{t("description")}</Description>

        <ContactUsBtn text={t("buttonText")} />
      </div>
    </section>
  );
};

export default Cta;
