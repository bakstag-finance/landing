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

export default function Home() {
  return (
    <main className="min-h-screen bg-black top-0 scroll-smooth">
      <Header />
      <section className="h-screen w-full relative overflow-x-hidden">
        <div className="absolute top-0 left-0 h-full w-full">
          <video loop muted autoPlay className="h-full w-full object-cover">
            <source src={"/assets/bg.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="absolute flex justify-center items-center flex-col h-full w-full z-10 px-7 lg:px-0">
          <h1 className="font-bold text-6xl text-center lg:text-4xl text-white-700">
            Omnichain OTC Market
          </h1>

          <div className="mt-10 w-full lg:w-[652px] py-10 px-7 text-center flex justify-center items-center border border-gray-700 rounded-3xl flex-col bg-opacity-800 bg-black">
            <span className="text-gray-400 text-2xl lg:text-xl w-full">
              Seamless <span className="text-white">peer-to-peer</span>{" "}
              transactions through any network. <br />
              <span className="text-white-700">No</span> slippage.{" "}
              <span className="text-white-700">No</span> bridging.{" "}
              <span className="text-white-700">No</span> wrapping.{" "}
              <span className="text-white-700">No</span> LP limits.
              Decentralised by nature.
            </span>

            <div className="mt-5 text-white flex flex-col lg:flex-row items-center justify-center w-[70%]">
              <Select>
                <SelectTrigger className={"text-white-700"}>
                  <SelectValue
                    placeholder="Select Network"
                    defaultValue={"eth-base"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth-base">
                    <span>
                      Eth <span className={"text-gray-600"}>on Base</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="usdc-base">
                    <span>
                      USDC <span className={"text-gray-600"}>on Base</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="eth-op">
                    <span>
                      Eth <span className={"text-gray-600"}>on Optimism</span>
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
              </Select>
              <ArrowLeftRight className="stroke-white-700 mx-5 size-5 size:7 my-3 lg:my-0 lg:size-20 stroke-[0.75]" />
              <Select>
                <SelectTrigger className={"text-white-700"}>
                  <SelectValue
                    placeholder="Select Network"
                    defaultValue={"eth-op"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth-base">
                    <span>
                      Eth <span className={"text-gray-600"}>on Base</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="usdc-base">
                    <span>
                      USDC <span className={"text-gray-600"}>on Base</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="eth-op">
                    <span>
                      Eth <span className={"text-gray-600"}>on Optimism</span>
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
              </Select>
            </div>
          </div>

          <Button className="rounded-2xl mt-10 w-80 p-7" variant="default">
            <span className="text-xl font-light">Exchange</span>
          </Button>
        </div>
      </section>

      <section
        className="h-screen flex flex-col w-full relative px-5 lg:px-44 bg-transparent bg-opacity-100"
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

        <div className="w-full flex flex-row justify-end h-full items-center">
          <div className="w-full flex flex-row justify-end mt-0 lg:mt-5">
            <ChatBubbleBg />
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
        className="h-full lg:h-screen w-full px-5 lg:px-44  bg-transparent bg-opacity-100"
        id={"trust"}
      >
        <div className={"w-full h-full mt-0 lg:mt-10 flex flex-col"}>
          <span className={"font-light text-purple-100 text-5xl lg:text-4xl"}>
            Trust
          </span>
          <span
            className={"font-light text-white-700 text-5xl lg:text-4xl mt-3"}
          >
            Bakstag is secure to the core.
          </span>
          <div
            className={
              "flex flex-col lg:flex-row justify-between items-center mt-10 gap-2"
            }
          >
            <div
              className={
                "flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[500px] w-full lg:max-w-[300px]"
              }
            >
              <div className={"flex-2"}>
                <video
                  loop
                  muted
                  autoPlay
                  className="h-full w-full object-cover"
                >
                  <source src={"/assets/planet.mov"} />
                </video>
              </div>
              <div className={"flex flex-col justify-between h-full"}>
                <div className={"flex flex-col"}>
                  <span className={"text-pink-200 text-3xl font-medium"}>
                    Built to Last
                  </span>
                  <span
                    className={
                      "mt-2 text-pink-200 text-opacity-[66%] font-normal text-xl"
                    }
                  >
                    Deployed in internet on top of open networks. Availably
                    globally.
                  </span>
                </div>
                <span
                  className={
                    "text-pink-200 text-opacity-50 underline underline-offset-2 cursor-pointer hover:text-white-700 transition-all duration-350 ease-in-out"
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div
              className={
                "flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[500px] w-full lg:max-w-[300px] mt-5 lg:mt-0"
              }
            >
              <div className={"flex-2"}>
                <video
                  loop
                  muted
                  autoPlay
                  className="h-full w-full object-cover"
                >
                  <source src={"/assets/chip.mov"} />
                </video>
              </div>
              <div className={"flex flex-col justify-between h-full"}>
                <div className={"flex flex-col"}>
                  <span className={"text-pink-200 text-3xl font-medium"}>
                    Open Source
                  </span>
                  <span
                    className={
                      "mt-2 text-pink-200 text-opacity-[66%] font-normal text-xl"
                    }
                  >
                    The future must be accessible to all, so protocol is
                    MIT-licensed open source.
                  </span>
                </div>
                <span
                  className={
                    "text-pink-200 text-opacity-50 underline underline-offset-2 cursor-pointer hover:text-white-700 transition-all duration-350 ease-in-out"
                  }
                >
                  Github
                </span>
              </div>
            </div>
            <div
              className={
                "flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[500px] w-full lg:max-w-[300px] mt-5 lg:mt-0"
              }
            >
              <div className={"flex-2"}>
                <video
                  loop
                  muted
                  autoPlay
                  className="h-full w-full object-cover"
                >
                  <source src={"/assets/key.mov"} />
                </video>
              </div>
              <div className={"flex flex-col justify-between h-full"}>
                <div className={"flex flex-col"}>
                  <span className={"text-pink-200 text-3xl font-medium"}>
                    Permissionless
                  </span>
                  <span
                    className={
                      "mt-2 text-pink-200 text-opacity-[66%] font-normal text-xl"
                    }
                  >
                    The assets and ads remain completely under your
                    non-custodial control, without intermediaries..
                  </span>
                </div>
                <span
                  className={
                    "text-pink-200 text-opacity-50 underline underline-offset-2 cursor-pointer hover:text-white-700 transition-all duration-350 ease-in-out"
                  }
                >
                  Connect
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-full  lg:h-screen  mt-5 lg:mt-0 w-full px-5 lg:px-44"
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
        className="h-full lg:h-screen w-full mt-5 lg:mt-0  px-5 lg:px-44 "
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
              <br />
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
                <source src={"/assets/community.mov"} />
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
            Join the community now <br />
            to stay in touch
          </span>
          <div
            className={
              "flex flex-col lg:flex-row items-center p-0 lg:p-5 mt-5 lg:mt-0 w-full lg:w-auto"
            }
          >
            <Button
              className={
                "w-full lg:w-auto rounded bg-pink-100 bg-opacity-20 hover:bg-pink-100/50 p-6 px-10"
              }
            >
              <Telegram />{" "}
              <span className={"ml-2 text-2xl text-pink-200 font-normal"}>
                Telegram
              </span>
            </Button>
            <Button
              className={
                "w-full lg:w-auto mt-5 lg:mt-0 ml-0 lg:ml-2 rounded bg-pink-100 bg-opacity-20 hover:bg-pink-100/50 px-10 p-6"
              }
            >
              <Twitter />{" "}
              <span className={"ml-2 text-2xl text-pink-200 font-normal"}>
                X.COM
              </span>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const Footer = () => (
  <div
    className={
      "flex flex-col lg:flex-row border-t border-t-[0.5] border-t-black-400 px-5 lg:px-44 p-10 w-full justify-between mt-5 lg:mt-0"
    }
  >
    <div className={"flex flex-col"}>
      <span className={"text-white-700 text-4xl lg:text-2xl"}>Bakstag</span>
      <a
        className="text-2xl lg:text-xl text-gray-600 mt-5 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
        href={"#blank"}
      >
        <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Omnichain OTC protocol
        </span>
      </a>
    </div>
    <div className={"flex flex-col lg:flex-row"}>
      <div className={"flex flex-col mt-5 lg:mt-0"}>
        <span className={"text-white-700 text-4xl lg:text-2xl"}>Community</span>
        <a
          className="text-2xl lg:text-xl text-gray-600 mt-5 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
          href={"#blank"}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Telegram
          </span>
        </a>
        <a
          className="text-2xl lg:text-xl text-gray-600 mt-3 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
          href={"#blank"}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            x.com
          </span>
        </a>
      </div>
      <div className={"flex flex-col ml-0 lg:ml-10"}>
        <span className={"text-white-700 text-4xl lg:text-2xl mt-5 lg:mt-0"}>
          About
        </span>
        <a
          className="text-2xl lg:text-xl text-gray-600 mt-5 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
          href={"#blank"}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            App
          </span>
        </a>
        <a
          className="text-2xl lg:text-xl text-gray-600 mt-3 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
          href={"#blank"}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Documents
          </span>
        </a>
        <a
          className="text-2xl lg:text-xl text-gray-600 mt-3 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
          href={"#blank"}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Github
          </span>
        </a>
      </div>
    </div>
  </div>
);

const ChatBubbleBg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="407"
    height="213"
    fill="none"
    viewBox="0 0 407 213"
  >
    <path
      stroke="#84E1CB"
      strokeWidth="1.8"
      d="M1.1 29.7c0-6.814.002-11.834.52-15.68.513-3.822 1.52-6.352 3.434-8.266C6.968 3.84 9.498 2.833 13.32 2.319 17.167 1.802 22.186 1.8 29 1.8h349.2c6.814 0 11.834.003 15.681.52 3.821.514 6.351 1.521 8.265 3.435 1.914 1.914 2.921 4.444 3.435 8.265.517 3.847.519 8.867.519 15.68V164.1c0 6.814-.002 11.833-.519 15.681-.514 3.821-1.521 6.351-3.435 8.265-1.914 1.914-4.444 2.921-8.265 3.435-3.847.517-8.867.519-15.681.519H370.829c-2.209 0-3.557-.001-4.672.392a6.902 6.902 0 00-4.215 4.215c-.392 1.114-.392 2.463-.392 4.672v.209c0 2.095 0 3.622-.078 4.785-.077 1.171-.229 1.86-.464 2.329a5.101 5.101 0 01-5.173 2.775c-.521-.063-1.178-.319-2.197-.902-1.012-.579-2.284-1.423-4.029-2.582l-20.694-13.74-.12-.08c-1.383-.918-2.236-1.484-3.212-1.779-.976-.294-2-.294-3.66-.294H29c-6.814 0-11.833-.002-15.68-.519-3.822-.514-6.352-1.521-8.266-3.435-1.913-1.914-2.92-4.444-3.435-8.265-.517-3.848-.519-8.867-.519-15.681V29.7z"
    ></path>
  </svg>
);

const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24"
      fill="none"
      viewBox="0 0 27 24"
    >
      <path
        fill="#FFB2EE"
        d="M21.42 0h4.074L16.55 10.184 27 24h-8.2l-6.421-8.396L5.028 24H.954l9.476-10.893L.423 0h8.404l5.801 7.67L21.421 0zm-1.425 21.609h2.258L7.641 2.303H5.214l14.78 19.306z"
      ></path>
    </svg>
  );
};
const Telegram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="26"
      fill="none"
      viewBox="0 0 32 26"
    >
      <path
        fill="#FFB2EE"
        d="M31.337 2.367L26.654 24.43c-.344 1.564-1.276 1.945-2.576 1.208l-7.132-5.255-3.437 3.315a1.803 1.803 0 01-1.427.701h-.012l.507-7.26 13.217-11.94c.57-.507-.128-.794-.887-.288L8.578 15.196l-7.036-2.197c-1.521-.482-1.564-1.522.32-2.268L29.358.132c1.28-.466 2.392.305 1.978 2.237l.002-.002z"
      ></path>
    </svg>
  );
};
