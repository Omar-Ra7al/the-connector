"use client";
import WorldMap from "@/components/ui/world-map";
import { motion, useInView } from "motion/react";
import Section from "../layout/section";
import AnimatedHeading from "../typography/animatedHeading";
import { useRef } from "react";
export function Map() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-250px 0px" });

  return (
    <Section type="outer" className="space-y-[30px]">
      <div ref={ref} className="min-h-[300px]">
        <AnimatedHeading size="md" level={2} text="Global Reach" />
        {inView && (
          <WorldMap
            dots={[
              {
                start: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
                end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
              },
              {
                start: { lat: 51.5074, lng: -0.1278, label: "London" },
                end: { lat: 40.7128, lng: -74.006, label: "New York" },
              },
            ]}
          />
        )}
      </div>
    </Section>
  );
}
