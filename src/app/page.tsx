import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/atoms/header";
import {Footer} from "@/components/atoms/footer";
import {Twitter} from "@/components/atoms/twitter";
import {Telegram} from "@/components/atoms/telegram";
import {ChatBubbleBg} from "@/components/atoms/chat-bubble-bg";
import {DOCS, GITHUB, MVP, TELEGRAM, TWITTER} from "@/lib/links";
import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen bg-black top-0 scroll-smooth relative">
        <Header/>
        <section className="relative h-screen w-full">
          <div className="absolute inset-0 overflow-hidden">
            <video
                loop
                muted
                autoPlay
                className="h-full w-full object-cover"
                src="/assets/bg.mp4"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center flex-col z-10 px-5 lg:px-0">
            <h1 className="font-bold text-4xl lg:text-6xl text-center text-white">
              Omnichain OTC Market
            </h1>

            <div
                className="mt-10 w-full max-w-lg lg:w-[652px] py-8 px-5 text-center flex flex-col justify-center items-center border border-gray-700 rounded-3xl bg-black bg-opacity-80">
      <span className="text-gray-400 text-xl lg:text-2xl w-full">
        Seamless <span className="text-white">peer-to-peer</span> transactions through any network. <br/>
        <span className="text-white">No</span> slippage. <span className="text-white">No</span> bridging. <span
          className="text-white">No</span> wrapping. <span className="text-white">No</span> LP limits. Decentralised by nature.
      </span>

              <div className="mt-5 text-white flex flex-col lg:flex-row items-center justify-center w-full lg:w-[70%]">
                <Select value={"eth-base"} disabled>
                  <SelectTrigger className="text-white-700 disabled:cursor-default disabled:opacity-100">
                    <SelectValue placeholder="Select Network" defaultValue="eth-base"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectContent>
                      <SelectItem value="eth-base">
                    <span>
                      ETH <span className={"text-gray-600"}>on Base</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdc-base">
                    <span>
                      USDC <span className={"text-gray-600"}>on Base</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="eth-op">
                    <span>
                      ETH <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="op-op">
                    <span>
                      OP <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdc-op">
                    <span>
                      Eth <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdt-op">
                    <span>
                      Eth <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="sol-sol">
                    <span>
                      SOL <span className={"text-gray-600"}>on Solana</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdc-sol">
                    <span>
                      USDC <span className={"text-gray-600"}>on Solana</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdt-sol">
                    <span>
                      USDT <span className={"text-gray-600"}>on Solana</span>
                    </span>
                      </SelectItem>
                    </SelectContent>
                  </SelectContent>
                </Select>
                <ArrowLeftRight className="stroke-white-700 mx-5 lg:mx-3 my-3 lg:my-0 size-5 lg:size-6 stroke-[0.75]"/>
                <Select value={"sol-sol"} disabled>
                  <SelectTrigger className="text-white-700 disabled:opacity-100 disabled:cursor-default">
                    <SelectValue placeholder="Select Network" defaultValue="sol-sol"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectContent>
                      <SelectItem value="eth-base">
                    <span>
                      ETH <span className={"text-gray-600"}>on Base</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdc-base">
                    <span>
                      USDC <span className={"text-gray-600"}>on Base</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="eth-op">
                    <span>
                      ETH <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="op-op">
                    <span>
                      OP <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdc-op">
                    <span>
                      Eth <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdt-op">
                    <span>
                      Eth <span className={"text-gray-600"}>on Optimism</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="sol-sol">
                    <span>
                      SOL <span className={"text-gray-600"}>on Solana</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdc-sol">
                    <span>
                      USDC <span className={"text-gray-600"}>on Solana</span>
                    </span>
                      </SelectItem>
                      <SelectItem value="usdt-sol">
                    <span>
                      USDT <span className={"text-gray-600"}>on Solana</span>
                    </span>
                      </SelectItem>
                    </SelectContent>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Link href={MVP} target="_blank">
              <Button className="rounded-2xl mt-10 w-72 p-5 lg:w-80 lg:p-7" variant="default">
                <span className="text-lg lg:text-xl font-light">Exchange</span>
              </Button>
            </Link>
          </div>
        </section>

        <section
            className="h-full min-h-screen flex flex-col w-full relative px-5 lg:px-44 bg-transparent bg-opacity-100"
            id={"about"}
        >
          <div
              className={
                "w-full flex flex-row justify-start h-full items-center pt:0 lg:pt-20"
              }
          >
            <div className={"flex flex-col"}>
              <span className={"text-green-300 text-5xl lg:text-4xl"}>About</span>
              <span
                  className={
                    "mt-2 text-white-700 text-5xl lg:text-4xl font-medium max-w-[500px]"
                  }
              >
              Unlock the power of P2P transfers
            </span>
              <span
                  className={"mt-2 text-gray-600 text-2xl font-light max-w-[645px]"}
              >
              Buy or Sell any digital assets securely and transparently at own
              exchange rate without amount limits. Create or accept Ads,
              protocol will do the rest.
            </span>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end h-full items-center mt-20 lg:mt-0">
            <div className="w-full flex flex-row justify-end mt-0 lg:mt-5">
              <ChatBubbleBg/>
              <div
                  className={"absolute z-10 w-[400px] py-5 px-6 lg:p-4 text-center"}
              >
              <span
                  className={"text-green-300 text-xl lg:text-2xl font-medium"}
              >
                We believe in onchain public markets with trustless relations
                between buyers and sellers, eliminating the need for a third-
                party intermediary.
              </span>
              </div>
            </div>
          </div>
        </section>

        <section
            className="h-full lg:h-screen w-full px-5 lg:px-44 bg-transparent bg-opacity-100"
            id="trust"
        >
          <div className="w-full h-full mt-0 lg:mt-10 flex flex-col">
    <span className="font-light text-purple-100 text-4xl lg:text-5xl">
      Trust
    </span>
            <span className="font-light text-white-700 text-4xl lg:text-5xl mt-3">
      Bakstag is secure to the core.
    </span>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-5 lg:gap-10">
              {/* Первый блок */}
              <div
                  className="flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[500px] w-full lg:max-w-[300px]">
                <div className="flex-2 w-full h-[200px]">
                  <video loop muted autoPlay className="h-full w-full object-cover">
                    <source src="/assets/planet.mp4"/>
                  </video>
                </div>
                <div className="flex flex-col justify-between h-full mt-4">
                  <div className="flex flex-col text-center">
                    <span className="text-pink-200 text-3xl font-medium">Built to Last</span>
                    <span className="mt-2 text-pink-200 text-opacity-66 font-normal text-xl">
              Deployed in internet on top of open networks. Available globally.
            </span>
                  </div>
                  <a
                      className="text-pink-200 text-opacity-50 underline cursor-pointer hover:text-white-700 transition-all duration-350 ease-in-out mt-4"
                      href={DOCS}
                      target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* Второй блок */}
              <div
                  className="flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[500px] w-full lg:max-w-[300px] mt-5 lg:mt-0">
                <div className="flex-2 w-full h-[200px]">
                  <video loop muted autoPlay className="h-full w-full object-cover">
                    <source src="/assets/chip.mov"/>
                  </video>
                </div>
                <div className="flex flex-col justify-between h-full mt-4">
                  <div className="flex flex-col text-center">
                    <span className="text-pink-200 text-3xl font-medium">Open Source</span>
                    <span className="mt-2 text-pink-200 text-opacity-66 font-normal text-xl">
              The future must be accessible to all, so the protocol is MIT-licensed open source.
            </span>
                  </div>
                  <a
                      className="text-pink-200 text-opacity-50 underline cursor-pointer hover:text-white-700 transition-all duration-350 ease-in-out mt-4"
                      href={GITHUB}
                      target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>

              {/* Третий блок */}
              <div
                  className="flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[500px] w-full lg:max-w-[300px] mt-5 lg:mt-0">
                <div className="flex-2 w-full h-[200px]">
                  <video loop muted autoPlay className="h-full w-full object-cover">
                    <source src="/assets/key.mov"/>
                  </video>
                </div>
                <div className="flex flex-col justify-between h-full mt-4">
                  <div className="flex flex-col text-center">
                    <span className="text-pink-200 text-3xl font-medium">Permissionless</span>
                    <span className="mt-2 text-pink-200 text-opacity-66 font-normal text-xl">
              The assets and ads remain completely under your non-custodial control, without intermediaries.
            </span>
                  </div>
                  <a
                      className="text-pink-200 text-opacity-50 underline cursor-pointer hover:text-white-700 transition-all duration-350 ease-in-out mt-4"
                      href={MVP}
                      target="_blank"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
            className="h-full  lg:h-screen  mt-10 lg:mt-0 w-full px-5 lg:px-44"
            id={"how-it-works"}
        >
          <div className={"w-full h-full flex flex-col"}>
          <span className={"text-4xl text-yellow-200 font-light"}>
            How it works
          </span>
            <span className={"mt-2 text-4xl text-white-700 font-medium"}>
            How to exchange tokenized assets in omnichain way using Bakstag
            protocol
          </span>
            <div
                className={
                  "mt-5 grid grid-cols-1 lg:grid-cols-4 justify-between w-full items-center gap-2"
                }
            >
              <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
                <span className={"font-light text-[5.6rem]"}>01</span>
                <span className={"font-extralight text-[2.15rem]"}>Create</span>
                <span className={"mt-5 opacity-50 text-md font-normal"}>
                Choose token to sell with desired amount, select token to
                receive, then set preferred exchange rate between assets
              </span>
              </div>
              <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
                <span className={"font-light text-[6rem]"}>02</span>
                <span className={"font-extralight text-[2.15rem]"}>Create</span>
                <span className={"mt-5 opacity-50 text-md font-normal"}>
                Choose token to sell with desired amount, select token to
                receive, then set preferred exchange rate between assets
              </span>
              </div>
              <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
                <span className={"font-light text-[6rem]"}>03</span>
                <span className={"font-extralight text-[2.15rem]"}>Create</span>
                <span className={"mt-5 opacity-50 text-md font-normal"}>
                Choose token to sell with desired amount, select token to
                receive, then set preferred exchange rate between assets
              </span>
              </div>
              <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
                <span className={"font-light text-[6rem]"}>04</span>
                <span className={"font-extralight text-[2.15rem]"}>Create</span>
                <span className={"mt-5 opacity-50 text-md font-normal"}>
                Choose token to sell with desired amount, select token to
                receive, then set preferred exchange rate between assets
              </span>
              </div>
            </div>
          </div>
        </section>
        <section
            className="h-full lg:h-screen w-full mt-10 lg:mt-0  px-5 lg:px-44 "
            id={"faq"}
        >
          <div
              className={
                "h-[70%] w-full flex flex-col lg:flex-row justify-center items-center"
              }
          >
            <div
                className={"flex flex-col justify-start items-start  h-full w-full"}
            >
              <span className={"text-4xl font-light text-purple-200"}>FAQ</span>
              <span className={"mt-5 text-4xl text-white-700 font-medium"}>
              Expecting questions,
              <br/>
              we answer
            </span>
            </div>
            <div
                className={
                  "flex flex-col justify-start items-start h-full w-full mt-5 lg:mt-0"
                }
            >
              <div className={"bg-black-700 rounded-xl flex flex-col w-full p-4"}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                    <span className={"text-white-700 text-base"}>
                      What is Bakstag?
                    </span>
                    </AccordionTrigger>
                    <AccordionContent>
                    <span className={"text-gray-600 text-sm"}>
                      Bakstag is a permissionless omnichain interoperability
                      over-the-counter protocol. Which allows Seamless
                      peer-to-peer transactions thought any network. No
                      slippage. No bridging. No wrapping. No LP limits. Bakstag
                      is decentralised by nature.
                    </span>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                    <span className={"text-white-700 text-base"}>
                      What is Omnichain?
                    </span>
                    </AccordionTrigger>
                    <AccordionContent>
                    <span className={"text-gray-600 text-sm"}>
                      Bakstag is a permissionless omnichain interoperability
                      over-the-counter protocol. Which allows Seamless
                      peer-to-peer transactions thought any network. No
                      slippage. No bridging. No wrapping. No LP limits. Bakstag
                      is decentralised by nature.
                    </span>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                    <span className={"text-white-700 text-base"}>
                      What is OTC Protocol?
                    </span>
                    </AccordionTrigger>
                    <AccordionContent>
                    <span className={"text-gray-600 text-sm"}>
                      Bakstag is a permissionless omnichain interoperability
                      over-the-counter protocol. Which allows Seamless
                      peer-to-peer transactions thought any network. No
                      slippage. No bridging. No wrapping. No LP limits. Bakstag
                      is decentralised by nature.
                    </span>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                    <span className={"text-white-700 text-base"}>
                      What&apos;s commission fee?
                    </span>
                    </AccordionTrigger>
                    <AccordionContent>
                    <span className={"text-gray-600 text-sm"}>
                      Bakstag is a permissionless omnichain interoperability
                      over-the-counter protocol. Which allows Seamless
                      peer-to-peer transactions thought any network. No
                      slippage. No bridging. No wrapping. No LP limits. Bakstag
                      is decentralised by nature.
                    </span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className={"mt-2 ml-5 flex flex-row w-full items-center"}>
              <span className={"font-light text-4xl text-purple-200"}>
                Ask Community
              </span>
                <video
                    loop
                    muted
                    autoPlay
                    className="h-14 w-14 ml-2 object-cover"
                >
                  <source src={"/assets/community.mov"}/>
                </video>
              </div>
            </div>
          </div>
          <div
              className={
                "w-full border border-pink-200 flex flex-col lg:flex-row justify-between items-center p-5 rounded-lg mt-5 lg:mt-0"
              }
          >
          <span className={"text-pink-200 font-normal text-3xl lg:text-2xl"}>
            Join the community now <br/>
            to stay in touch
          </span>
            <div
                className={
                  "flex flex-col lg:flex-row items-center p-0 lg:p-5 mt-5 lg:mt-0 w-full lg:w-auto"
                }
            >
              <Link href={TELEGRAM} target={"_blank"} className={"w-full"}>
                <Button
                    className={
                      "w-full lg:w-auto rounded-xl bg-pink-100 bg-opacity-20 hover:bg-pink-100/50 p-6 px-10"
                    }
                >
                  <Telegram/>{" "}
                  <span className={"ml-2 text-2xl text-pink-200 font-normal"}>
                Telegram
              </span>
                </Button>
              </Link>
              <Link href={TWITTER} target={"_blank"} className={"w-full"}>
                <Button
                    className={
                      "w-full lg:w-auto mt-5 lg:mt-0 ml-0 lg:ml-2 rounded-xl bg-pink-100 bg-opacity-20 hover:bg-pink-100/50 px-10 p-6"
                    }
                >
                  <Twitter/>{" "}
                  <span className={"ml-2 text-2xl text-pink-200 font-normal"}>
                X.COM
              </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
  );
}

