import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { TELEGRAM, TWITTER } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { Telegram } from "@/components/atoms/telegram";
import { Twitter } from "@/components/atoms/twitter";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    value: "item-1",
    question: "What is Bakstag?",
    answer: `Bakstag is a permissionless omnichain interoperability
    over-the-counter protocol. Which allows Seamless
    peer-to-peer transactions thought any network. No
    slippage. No bridging. No wrapping. No LP limits. Bakstag
    is decentralised by nature.`,
  },
  {
    value: "item-2",
    question: "What is Omnichain?",
    answer: `Omnichain is an application designed to operate across isolated chains, allowing them to communicate with each other`,
  },
  {
    value: "item-3",
    question: "What is OTC Protocol?",
    answer: `Over-the-counter (OTC) or off-exchange trading or
pink sheet trading is done directly between two parties, without the supervision of an exchange`,
  },
  {
    value: "item-4",
    question: "What's the commission fee?",
    answer: `The fee is only paid by the advertiser, namely 1% of each sale of their token to be received.`,
  },
];

const FAQAccordion = () => (
  <Accordion type="single" collapsible>
    {faqItems.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>
          <span className="text-white-700 text-base">{item.question}</span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="text-gray-600 text-sm">{item.answer}</span>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}
const SocialButton = ({ href, icon, label, className }: SocialButtonProps) => (
  <Link href={href} target="_blank" className="w-full">
    <Button
      className={cn(
        "w-full lg:w-auto rounded-xl bg-pink-100 bg-opacity-20 hover:bg-pink-100/50 px-10 p-6",
        className,
      )}
    >
      {icon}
      <span className="ml-2 text-2xl text-pink-200 font-normal">{label}</span>
    </Button>
  </Link>
);

export const FAQSection = () => (
  <section
    className="h-full lg:h-screen w-full mt-10 lg:mt-0 px-5 lg:px-44 flex justify-center items-center"
    id="faq"
  >
    <div className={"w-full max-w-[1200px] h-full"}>
      <div className="h-[70%] w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col justify-start items-start h-full w-full">
          <span className="text-4xl font-light text-purple-200">FAQ</span>
          <span className="mt-5 text-4xl text-white-700 font-medium">
            Expecting questions,
            <br />
            we answer
          </span>
        </div>
        <div className="flex flex-col justify-start items-start h-full w-full mt-5 lg:mt-0">
          <div className="bg-black-700 rounded-xl flex flex-col w-full p-4">
            <FAQAccordion />
          </div>
          <div className="mt-2 ml-5 flex flex-row w-full items-center">
            <Link href={TELEGRAM} target={"_blank"}>
              <span className="font-light text-4xl text-purple-200">
                Ask Community
              </span>
            </Link>
            <video
              loop
              muted
              autoPlay
              className="h-14 w-14 ml-2 object-cover"
              playsInline
              controls={false}
            >
              <source src="/assets/community.mov" />
            </video>
          </div>
        </div>
      </div>
      <div className="w-full border border-pink-200 flex flex-col lg:flex-row justify-between items-center p-5 rounded-lg mt-5 lg:mt-0">
        <span className="text-pink-200 font-normal text-3xl lg:text-2xl">
          Join the community now <br />
          to stay in touch
        </span>
        <div className="flex flex-col lg:flex-row items-center p-0 lg:p-5 mt-5 lg:mt-0 w-full lg:w-auto">
          <SocialButton href={TELEGRAM} icon={<Telegram />} label="Telegram" />
          <SocialButton
            href={TWITTER}
            icon={<Twitter />}
            label="X.COM"
            className={"mt-5 lg:mt-0 lg:ml-5"}
          />
        </div>
      </div>
    </div>
  </section>
);
