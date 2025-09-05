import { Link } from "@/i18n/navigation";

const ContactUsBtn = ({ text }: { text?: string }) => {
  return (
    <Link
      href="/contact"
      className="w-fit bg-primary rounded-md text-md lg:text-lg font-bold text-secondary uppercase
       trnasiton-all duration-300 active:scale-[0.98] hover:bg-primary/80
       px-6 py-2 inline-flex items-center justify-center gap-2 "
    >
      {text || "Contact Us"}
    </Link>
  );
};

export default ContactUsBtn;
