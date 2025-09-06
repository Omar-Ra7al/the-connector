import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
  sizePx?: number; // size in pixels
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
  sizePx?: number; // global size in pixels
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  // ✅ Now using CSS variables
  primary: "linear-gradient(var(--primary), var(--secondary))",
  secondary: "linear-gradient(var(--secondary), var(--primary))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({
  items,
  className,
  sizePx,
}) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <>
      {items.map((item, index) => {
        const finalSize = item.sizePx || sizePx || 72; // default 72px
        return (
          <button
            key={index}
            type="button"
            aria-label={item.label}
            style={{ width: finalSize, height: finalSize }}
            className={`relative bg-transparent outline-none [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
              item.customClass || ""
            }`}
          >
            {/* Gradient background */}
            <span
              className="absolute top-0 left-0 w-full h-full rounded-[20px] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-8px,-8px,8px)]"
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: "8px -8px 12px hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>

            {/* Glass effect */}
            <span
              className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] transform group-hover:[transform:translateZ(32px)]"
              style={{
                boxShadow: "0 0 0 2px hsla(0, 0%, 100%, 0.3) inset",
              }}
            >
              <span
                className="m-auto flex items-center justify-center"
                style={{
                  width: finalSize * 0.33, // icon scales with button
                  height: finalSize * 0.33,
                }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
            </span>

            {/* Label */}
            <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
              {item.label}
            </span>
          </button>
        );
      })}
    </>
  );
};

export default GlassIcons;
