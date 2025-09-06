"use client";
import MetricCard from "./metriccard";
import Heading from "@/components/shared/typography/heading";
import BlurText from "@/components/ui/BlurText";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import { useTranslations } from "next-intl";

export default function Metrics() {
  const t = useTranslations("Home.metrics");
  return (
    <Section
      type="inner"
      className="flex flex-col gap-6 md:gap-12 items-center"
    >
      {/* Section Heading */}
      <AnimatedHeading size="md" level={3} text={t("heading")} />

      {/* Metrics Grid */}
      <div className="flex justify-around uppercase">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {t.raw("metrics").map((metric: any, index: number) => (
            <MetricCard
              key={index}
              title={metric.value}
              text={metric.label}
              color={index % 2 === 0 ? "secondary" : "primary"}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
