import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import Heading from "@/components/shared/typography/heading";
import { Link } from "@/i18n/navigation";
import React from "react";

const Cta = () => {
  return (
    <section className="relative text-center text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-[30px]">
        <AnimatedHeading
          size="md"
          level={3}
          text="Let’s Build Something Extraordinary Together"
        />

        <Description size="md">
          Whether it’s software, design, or full outsourcing — we’re here to
          make it happen.
        </Description>

        <ContactUsBtn text="Contact Us" />
      </div>
    </section>
  );
};

export default Cta;
