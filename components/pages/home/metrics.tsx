"use client";
import MetricCard from "./metriccard";
import Heading from "@/components/shared/typography/heading";
import BlurText from "@/components/ui/BlurText";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";

export default function Metrics() {
  return (
    <Section
      type="inner"
      className="flex flex-col gap-6 md:gap-12 items-center"
    >
      {/* Section Heading */}
      <AnimatedHeading size="md" level={3} text="Our Impact in Numbers" />

      {/* Metrics Grid */}
      <div className="flex justify-around uppercase">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <MetricCard
            title={"50+"}
            text={"Trusted Clients Worldwide"}
            color="secondary"
          />
          <MetricCard
            title={"80+"}
            text={"Successful Projects Delivered"}
            color="primary"
          />
          <MetricCard
            title={"10+"}
            text={"Countries We Operate In"}
            color="secondary"
          />
          <MetricCard
            title={"95%"}
            text={"Client Retention Rate"}
            color="primary"
          />
          <MetricCard
            title={"100K+"}
            text={"Hours of Engineering"}
            color="secondary"
          />
          <MetricCard
            title={"24/7"}
            text={"Dedicated Support"}
            color="primary"
          />
        </div>
      </div>
    </Section>
  );
}
