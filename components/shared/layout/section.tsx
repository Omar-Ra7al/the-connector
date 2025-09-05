interface SectionProps {
  children: React.ReactNode;
  type: "outer" | "inner";
  className?: string;
}

function Section({ type = "outer", children, className }: SectionProps) {
  return (
    <section
      className={`overflow-hidden lg:max-w-[1440px] mx-auto ${
        type === "inner" ? "px-[0.5%]" : "w-[90%]"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
