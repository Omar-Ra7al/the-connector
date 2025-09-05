"use client";
import CardNav from "@/components/ui/CardNav";

const Nav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          href: "/about/company",
        },
        {
          label: "Careers",
          ariaLabel: "About Careers",
          href: "/about/careers",
        },
      ],
    },
    {
      label: "Services",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          href: "/about/company",
        },
        {
          label: "Careers",
          ariaLabel: "About Careers",
          href: "/about/careers",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          href: "/about/company",
        },
        {
          label: "Careers",
          ariaLabel: "About Careers",
          href: "/about/careers",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={"/logo.png"}
      logoAlt="Company Logo"
      items={items}
      baseColor="color-mix(in srgb, #000 50%, transparent)"
      menuColor="#e2e6e7"
      buttonBgColor=""
      ease="power3.out"
    />
  );
};

export default Nav;
