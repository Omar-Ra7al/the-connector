"use client";
import CountUp from "react-countup";
import { usePathname } from "next/navigation";

type Color = "primary" | "secondary";

type MetricCardProps = {
  title: string;
  text: string;
  color?: Color;
};

export default function MetricCard({ title, text, color }: MetricCardProps) {
  const path = usePathname();

  const toArabicNumerals = (value: string) => {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return value.replace(/\d/g, (d) => arabicDigits[parseInt(d)]);
  };

  // Extract numeric and suffix parts from title like "200%+", "30M+", etc.
  const match = title.match(/^(\d+(?:\.\d+)?)(.*)$/); // captures number and suffix
  const numberPart = match ? parseFloat(match[1]) : 0;
  const suffixPart = match ? match[2] : "";

  // Check if current locale is Arabic
  const isArabic = path.startsWith("/ar");

  return (
    <div
      className={`${
        color === "primary"
          ? "bg-primary text-secondary"
          : "text-primary bg-transparent"
      } flex flex-col justify-center items-center text-center xl:w-[400px] xl:h-[150px] md:w-[250px] md:h-[100px] w-[220px] p-2 rounded-xl gap-4`}
    >
      <h3 className="xl:text-5xl md:text-4xl text-3xl font-bold">
        <CountUp
          end={numberPart}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
          formattingFn={(value: number) => {
            const formatted = `${Math.floor(value)}${suffixPart}`;
            return isArabic ? toArabicNumerals(formatted) : formatted;
          }}
        />
      </h3>
      <p className="md:text-xl">{text}</p>
    </div>
  );
}
