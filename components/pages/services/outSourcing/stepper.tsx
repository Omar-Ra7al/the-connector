"use client";
import { FiUsers, FiGlobe, FiCpu, FiCheckCircle } from "react-icons/fi";
import ContactUsBtn from "@/components/shared/buttons/contactUsBtn";
import Stepper, { Step } from "@/components/Stepper";
import Heading from "@/components/shared/typography/heading";
import Description from "@/components/shared/typography/description";
import Section from "@/components/shared/layout/section";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";

export default function OutsourcingStepper() {
  return (
    <Section type="outer" className="space-y-[30px]">
      <AnimatedHeading
        size="md"
        level={2}
        text="Simplifying Outsourcing Step by Step"
        className="text-center"
      />
      <Stepper
        className="rounded-2xl"
        initialStep={1}
        backButtonText="Back"
        nextButtonText="Next"
      >
        {/* Step 1 */}
        <Step>
          <div className="text-center">
            <FiUsers className="mx-auto text-primary text-5xl mb-4" />
            <Heading size="md" level={2}>
              Staff Augmentation
            </Heading>
            <Description size="md" className="mt-2">
              Extend your in-house team with top-tier developers who blend
              seamlessly into your workflow.
            </Description>
          </div>
        </Step>

        {/* Step 2 */}
        <Step>
          <div className="text-center">
            <FiGlobe className="mx-auto text-primary text-5xl mb-4" />
            <Heading size="md" level={2}>
              Global Talent
            </Heading>
            <Description size="md" className="mt-2">
              Access skilled professionals worldwide, ready to work in your
              timezone and deliver results.
            </Description>
          </div>
        </Step>

        {/* Step 3 */}
        <Step>
          <div className="text-center">
            <FiCpu className="mx-auto text-primary text-5xl mb-4" />
            <Heading size="md" level={2}>
              Scalable Solutions
            </Heading>
            <Description size="md" className="mt-2">
              Scale your team up or down on demand without the hassle of
              recruitment or overhead costs.
            </Description>
          </div>
        </Step>

        {/* Step 4 */}
        <Step>
          <div className="text-center">
            <FiCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
            <Heading size="md" level={2}>
              Let’s Get Started
            </Heading>
            <Description size="md" className="mt-2">
              Whether outsourcing a project or augmenting your staff, we’ve got
              you covered.
            </Description>
            <div className="mt-6 flex justify-center">
              <ContactUsBtn text="Start Your Outsourcing Journey" />
            </div>
          </div>
        </Step>
      </Stepper>
    </Section>
  );
}
