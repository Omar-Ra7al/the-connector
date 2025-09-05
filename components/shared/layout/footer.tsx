import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./logo";
import Section from "./section";

const Footer = () => {
  return (
    <footer className="relative mt-[120px]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-3xl border-t-2" />
      <Section type="inner" className="relative py-[70px] text-primary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="bg-secondary w-[90px] h-[90px] flex items-center justify-center rounded-full">
              <Logo />
            </div>
            <p className="text-base max-w-[240px] text-muted-foreground text-center md:text-left leading-relaxed">
              Creative Tech,{" "}
              <span className="font-semibold">Limitless Vision</span>.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-bold text-2xl uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-lg font-medium">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li
                    key={link}
                    className="transition-all duration-300 hover:text-white text-center"
                  >
                    <a href={`/${link.toLowerCase()}`}>{link}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <h4 className="font-bold text-2xl uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-5">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-3xl transition-all hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.9)]"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
            <p className="text-base text-muted-foreground">📍 Cairo, Egypt</p>
            <p className="text-base text-muted-foreground">
              ✉️ contact@theconnector.co
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 text-center text-sm text-muted-foreground border-t border-secondary/50 pt-6">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">The Connector</span>. All rights
          reserved.
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
