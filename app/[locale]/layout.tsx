import "../globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/shared/layout/nav";
import Footer from "@/components/shared/layout/footer";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "@/components/shared/layout/localeSwitcher";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO.home" });
  const siteUrl = "https://the-connector-three.vercel.app";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `${t("title")}`,
    },
    description: t("description"),
    creator: "The Connector",
    applicationName: "The Connector",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: siteUrl,
      siteName: "The Connector",
      images: [
        {
          url: `${siteUrl}/img/logo.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${siteUrl}/img/logo.png`],
    },
  };
}
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Pick messages based on locale
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} className="scroll-smooth dark">
      <body className={`${cairo.variable} relative antialiased min-h-screen`}>
        <NextIntlClientProvider locale={locale}>
          <Nav />
          <div className="hidden md:flex">
            <LocaleSwitcher />
          </div>
          <main className="space-y-[80px] lg:space-y-[120px] text-secondary dark:text-primary">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
