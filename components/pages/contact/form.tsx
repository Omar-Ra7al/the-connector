"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceholdersAndVanish } from "./textArea"; // assuming textarea component
import { CiLocationArrow1 } from "react-icons/ci";
import Heading from "@/components/shared/typography/heading";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-2xl rounded-none p-4 border-2 md:rounded-2xl">
      {/* Section Header */}
      <h2 className="text-md lg:text-lg uppercase font-bold text-center  text-neutral-600 dark:text-neutral-300">
        {t("header")}
      </h2>

      <form className="my-8 space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <LabelInputContainer>
          <Label htmlFor="fullname">{t("fields.fullName.label")}</Label>
          <Input
            id="fullname"
            placeholder={t("fields.fullName.placeholder")}
            type="text"
            required
          />
        </LabelInputContainer>

        {/* Email */}
        <LabelInputContainer>
          <Label htmlFor="email">{t("fields.email.label")}</Label>
          <Input
            id="email"
            placeholder={t("fields.email.placeholder")}
            type="email"
            required
          />
        </LabelInputContainer>

        {/* Select Service */}
        <LabelInputContainer>
          <Label htmlFor="service">{t("fields.service.label")}</Label>
          <select
            id="service"
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm border-none dark:bg-zinc-800 dark:text-neutral-200"
            required
          >
            <option value="">{t("fields.service.placeholder")}</option>
            <option value="software">
              {t("fields.service.options.software")}
            </option>
            <option value="outsource">
              {t("fields.service.options.outsource")}
            </option>
          </select>
        </LabelInputContainer>

        {/* Company */}
        <LabelInputContainer>
          <Label htmlFor="company">{t("fields.company.label")}</Label>
          <Input
            id="company"
            placeholder={t("fields.company.placeholder")}
            type="text"
            required
          />
        </LabelInputContainer>

        {/* Phone */}
        <LabelInputContainer>
          <Label htmlFor="phone">{t("fields.phone.label")}</Label>
          <Input
            id="phone"
            placeholder={t("fields.phone.placeholder")}
            type="tel"
          />
        </LabelInputContainer>

        {/* Message */}
        <LabelInputContainer>
          <Label htmlFor="message">{t("fields.message.label")}</Label>
          <PlaceholdersAndVanish />
        </LabelInputContainer>

        {/* CTA Button */}
        <button
          className="group/btn group cursor-pointer flex items-center justify-center gap-2 relative  h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {t("submitButton")}
          <CiLocationArrow1 className="text-2xl transform transition-transform duration-300 group-hover:rotate-45 group-hover:animate-pulse" />
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />{" "}
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />{" "}
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
