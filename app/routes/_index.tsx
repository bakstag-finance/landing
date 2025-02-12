import CustomCursor from "~/components/atoms/cursor";
import {Header} from "~/components/atoms/header";
import {MainSection} from "~/components/molecules/main";
import {TrustSection} from "~/components/molecules/trust";
import {AboutSection} from "~/components/molecules/about";
import {HowItWorksSection} from "~/components/molecules/how-it-works";
import {FAQSection} from "~/components/molecules/faq";
import {Footer} from "~/components/atoms/footer";

export default function Index() {
  return (
      <div className="min-h-screen bg-black top-0 scroll-smooth relative">
        <CustomCursor/>
        <Header/>

        <MainSection/>
        <AboutSection/>
        <TrustSection/>
        <HowItWorksSection/>
        <FAQSection/>

        <Footer/>
      </div>
  );
}
