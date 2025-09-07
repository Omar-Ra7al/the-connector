"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
} from "react-icons/fa";
import Logo from "./logo";
import Section from "./section";
import AnimatedHeading from "../typography/animatedHeading";
import { motion } from "framer-motion";
import { LocationEditIcon, Mail } from "lucide-react";
import Heading from "../typography/heading";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const navLinks = [
    { label: t("quickLinks.links.0.label"), href: "/" },
    { label: t("quickLinks.links.1.label"), href: "/services/software" },
    { label: t("quickLinks.links.2.label"), href: "/services/outsourcing" },
    { label: t("quickLinks.links.3.label"), href: "/contact" },
  ];

  const socialLinks = [
    {
      label: t("social.facebook"),
      href: "#",
      icon: FaFacebook,
      color: "#1877F2",
    },
    {
      label: t("social.instagram"),
      href: "#",
      icon: FaInstagram,
      color: "#E4405F",
    },
    {
      label: t("social.linkedin"),
      href: "#",
      icon: FaLinkedin,
      color: "#0A66C2",
    },
    {
      label: t("social.twitter"),
      href: "#",
      icon: FaTwitter,
      color: "#1DA1F2",
    },
  ];
  return (
    <footer className="relative mt-[120px] bg-gradient-to-t from-slate-900 via-slate-950 to-black text-white">
      <Section type="inner" className="relative text-primary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-5"
          >
            <motion.div
              className="bg-secondary w-[90px] h-[90px] flex items-center justify-center rounded-full border-2 border-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Logo />
            </motion.div>
            <div className="flex flex-col justify-center">
              <AnimatedHeading
                text={t("brand.tagline1")}
                size="sm"
                level={3}
                className="text-start justify-start"
              />
              <AnimatedHeading
                text={t("brand.tagline2")}
                size="sm"
                level={3}
                className="text-start justify-start"
              />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <Heading size="sm" level={3}>
              {t("quickLinks.heading")}
            </Heading>
            <ul className="flex flex-col gap-3 text-lg font-medium">
              {navLinks.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  className="cursor-pointer text-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <a href={href}>{label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-end gap-5"
          >
            <Heading size="sm" level={3}>
              {t("connect.heading")}
            </Heading>
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="text-3xl transition-all"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    color,
                    textShadow: `0 0 10px ${color}`,
                  }}
                  aria-label={socialLinks[i].label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p className="text-primary flex items-center gap-2">
              {t("connect.location")}
              <FaLocationArrow />
            </p>
            <Link
              href={"mailto:contact@theconnector.co"}
              className="text-primary flex items-center gap-2"
            >
              {t("connect.email")}
              <Mail />
            </Link>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="my-12 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">{t("companyName")}</span>.{" "}
          {t("copyright")}
        </motion.div>
      </Section>
    </footer>
  );
};

export default Footer;
