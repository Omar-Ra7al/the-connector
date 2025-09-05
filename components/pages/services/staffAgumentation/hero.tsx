import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import StyledBtn from "@/components/shared/buttons/styledBtn";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";
import Description from "@/components/shared/typography/description";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section
      type="outer"
      className="flex items-center justify-center gap-[30px] flex-wrap xl:flex-nowrap min-h-screen py-[120px] text-center xl:text-start"
    >
      {/* Left text */}
      <div className="w-full space-y-[30px]">
        <AnimatedHeading
          className="xl:justify-start"
          size="lg"
          level={1}
          text="Software Engineering That Powers Growth"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="xl:justify-start"
        >
          <Description size="md">
            We are The Connector, a company built on trust, strategy, and
            execution. Our Software Engineering services craft secure,
            future-ready digital solutions tailored to your business, helping
            you scale efficiently and stay ahead in a competitive market.
          </Description>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full"
        >
          <div className="flex flex-col items-center xl:items-start xl:flex-row itmes-center gap-4">
            <ContactUsBtn text={`Get In Touch With Us`} />
            <StyledBtn
              className="uppercase"
              onClick={() => {
                const element = document.getElementById("portfolio"); // replace with your element id
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              text={`Explore Our Portfolio`}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
