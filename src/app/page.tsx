"use client";
import { Header } from "@/components/atoms/header";
import { Footer } from "@/components/atoms/footer";
import { MainSection } from "@/components/molecules/main";
import { AboutSection } from "@/components/molecules/about";
import { TrustSection } from "@/components/molecules/trust";
import { HowItWorksSection } from "@/components/molecules/how-it-works";
import { FAQSection } from "@/components/molecules/faq";
import CustomCursor from "@/components/atoms/cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black top-0 scroll-smooth relative">
      <CustomCursor />
      <Header />

      <MainSection />
      <AboutSection />
      <TrustSection />
      <HowItWorksSection />
      <FAQSection />

      <Footer />
    </main>
  );
}
