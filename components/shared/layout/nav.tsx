"use client";
import CardNav from "@/components/ui/CardNav";
import { useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations("Navigation.menu");
  const items = [
    {
      label: t("home.label"),
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: t("home.links.0.label"),
          ariaLabel: t("home.links.0.ariaLabel"),
          href: "/#why-the-connector",
        },
        {
          label: t("home.links.1.label"),
          ariaLabel: t("home.links.1.ariaLabel"),
          href: "/#impact",
        },
        {
          label: t("home.links.2.label"),
          ariaLabel: t("home.links.2.ariaLabel"),
          href: "/#services",
        },
        {
          label: t("home.links.3.label"),
          ariaLabel: t("home.links.3.ariaLabel"),
          href: "/#clients",
        },
      ],
    },
    {
      label: t("services.label"),
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: t("services.links.0.label"),
          ariaLabel: t("services.links.0.ariaLabel"),
          href: "/services/software",
        },
        {
          label: t("services.links.1.label"),
          ariaLabel: t("services.links.1.ariaLabel"),
          href: "/services/outsourcing",
        },
      ],
    },
    {
      label: t("contact.label"),
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: t("contact.links.0.label"),
          ariaLabel: t("contact.links.0.ariaLabel"),
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={"/logo.png"}
      logoAlt={t("logo.alt")}
      items={items}
      baseColor="color-mix(in srgb, #000 50%, transparent)"
      menuColor="#e2e6e7"
      buttonBgColor=""
      ease="power3.out"
    />
  );
};

export default Nav;
