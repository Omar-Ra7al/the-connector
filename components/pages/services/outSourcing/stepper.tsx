"use client";
import { FiUsers, FiGlobe, FiCpu, FiCheckCircle } from "react-icons/fi";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import Stepper, { Step } from "@/components/ui/Stepper";
import Heading from "@/components/shared/typography/heading";
import Description from "@/components/shared/typography/description";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import { useTranslations } from "next-intl";

export default function OutsourcingStepper() {
  const t = useTranslations("Outsourcing.stepper");
  return (
    <Section type="outer" className="space-y-[30px]">
      <AnimatedHeading
        size="md"
        level={2}
        text={t("heading")}
        className="text-center"
      />
      <Stepper
        className="rounded-2xl"
        initialStep={1}
        backButtonText={t("navigation.back")}
        nextButtonText={t("navigation.next")}
      >
        {/* Step 1 */}
        <Step>
          <div className="text-center">
            <FiUsers className="mx-auto text-primary text-5xl mb-4" />
            <Heading size="md" level={2}>
              {t.raw("steps")[0].title}
            </Heading>
            <Description size="md" className="mt-2">
              {t.raw("steps")[0].description}
            </Description>
          </div>
        </Step>

        {/* Step 2 */}
        <Step>
          <div className="text-center">
            <FiGlobe className="mx-auto text-primary text-5xl mb-4" />
            <Heading size="md" level={2}>
              {t.raw("steps")[1].title}
            </Heading>
            <Description size="md" className="mt-2">
              {t.raw("steps")[1].description}
            </Description>
          </div>
        </Step>

        {/* Step 3 */}
        <Step>
          <div className="text-center">
            <FiCpu className="mx-auto text-primary text-5xl mb-4" />
            <Heading size="md" level={2}>
              {t.raw("steps")[2].title}
            </Heading>
            <Description size="md" className="mt-2">
              {t.raw("steps")[2].description}
            </Description>
          </div>
        </Step>

        {/* Step 4 */}
        <Step>
          <div className="text-center">
            <FiCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
            <Heading size="md" level={2}>
              {t.raw("steps")[3].title}
            </Heading>
            <Description size="md" className="mt-2">
              {t.raw("steps")[3].description}
            </Description>
            <div className="mt-6 flex justify-center">
              <ContactUsBtn text={t.raw("steps")[3].ctaButton} />
            </div>
          </div>
        </Step>
      </Stepper>
    </Section>
  );
}
