import Hero from "@/components/pages/services/software/hero";
import Portfolio from "@/components/pages/services/software/portfolio";
import Services from "@/components/pages/services/software/services";
import WhyConnector from "@/components/pages/services/software/whyConnector";

const page = () => {
  return (
    <>
      <Hero />
      <WhyConnector />
      <Services />
      <Portfolio />
    </>
  );
};

export default page;
