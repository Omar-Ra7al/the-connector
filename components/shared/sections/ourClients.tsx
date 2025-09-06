"use client";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import AnimatedHeading from "@/components/shared/typography/animatedHeading";

const ITMS_SPEED = 8;

// ✅ Types
type ImageRowProps = {
  images: string[];
  direction: 1 | -1; // scrolling direction
  size?: "sm" | "md" | "lg"; // default md
};

type OurClientsProps = {
  rowA: string[];
  rowB: string[];
};

// ✅ Reusable Row Component
const ImageRow: React.FC<ImageRowProps> = ({
  images,
  direction,
  size = "md",
}) => {
  const sizes: Record<NonNullable<ImageRowProps["size"]>, string> = {
    sm: "h-[40px] w-[80px] md:h-[60px] md:w-[120px] lg:h-[80px] lg:w-[140px]",
    md: "h-[60px] w-[105px] md:h-[90px] md:w-[160px] lg:h-[120px] lg:w-[200px]",
    lg: "h-[90px] w-[160px] md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[240px]",
  };

  return (
    <ScrollVelocityRow
      baseVelocity={ITMS_SPEED}
      direction={direction}
      className="py-4"
      id="clients"
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Client logo ${idx + 1}`}
          loading="lazy"
          decoding="async"
          className={`mx-4 inline-block rounded-lg object-contain shadow-sm px-4 py-2 ${sizes[size]}`}
        />
      ))}
    </ScrollVelocityRow>
  );
};

// ✅ Main Component
export const OurClients: React.FC<OurClientsProps> = ({ rowA, rowB }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden space-y-[30px]">
      <AnimatedHeading size="md" level={3} text="Our Clients" />

      <ScrollVelocityContainer className="relative w-full bg-primary/90 py-4">
        <ImageRow images={rowA} direction={1} size="md" />
        <ImageRow images={rowB} direction={-1} size="md" />

        {/* Fading edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </ScrollVelocityContainer>
    </section>
  );
};
