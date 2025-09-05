import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";

const IMAGES_ROW_A = [
  "/clients/swt/PodMedia Network.png",
  "/clients/swt/PodEvents.png",
  "/clients/swt/Dallal_Logo.png",
  "/clients/swt/D&Partners.png",
  "/clients/swt/Mukamil.png",
  "/clients/swt/Amoramor.png",
  "/clients/swt/Venttat.png",
];

const IMAGES_ROW_B = [
  "/clients/swt/PodMedia Network.png",
  "/clients/swt/PodEvents.png",
  "/clients/swt/Dallal_Logo.png",
  "/clients/swt/D&Partners.png",
  "/clients/swt/Mukamil.png",
  "/clients/swt/Amoramor.png",
  "/clients/swt/Venttat.png",
];

const ITMS_SPEED = 8;

export function OurClients() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-[30px]">
      <AnimatedHeading size="md" level={3} text="Our Clients" />

      <ScrollVelocityContainer className="w-full bg-primary/90 py-4">
        <ScrollVelocityRow
          baseVelocity={ITMS_SPEED}
          direction={1}
          className="py-4"
        >
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
              src={`${src}`}
              alt="Unsplash sample"
              width={100}
              height={100}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-[120px] w-[200px] rounded-lg object-contain shadow-sm px-4 py-2"
            />
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow
          baseVelocity={ITMS_SPEED}
          direction={-1}
          className="py-4"
        >
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
              src={`${src}`}
              alt="Unsplash sample"
              width={100}
              height={100}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-[120px] w-[200px] rounded-lg object-contain shadow-sm px-4 py-2"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </section>
  );
}
