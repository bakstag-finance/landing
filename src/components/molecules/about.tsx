import { ChatBubbleBg } from "@/components/atoms/chat-bubble-bg";

export const AboutSection = () => (
  <section
    className="h-full min-h-screen flex justify-center items-center w-full  relative px-5 lg:px-44 bg-transparent bg-opacity-100"
    id={"about"}
  >
    <div className={"flex flex-col w-full max-w-[1200px]"}>
      <div
        className={
          "w-full flex flex-row justify-start h-full items-center pt:0 lg:pt-20"
        }
      >
        <div className={"flex flex-col"}>
          <span className={"text-green-300 text-5xl lg:text-4xl"}>About</span>
          <span
            className={
              "mt-5 lg:mt-2 text-white-700 text-5xl lg:text-4xl font-medium max-w-[500px]"
            }
          >
            Unlock the power of P2P transfers
          </span>
          <span
            className={
              "mt-5 lg:mt-2 text-gray-600 text-2xl font-light max-w-[645px]"
            }
          >
            Buy or Sell any digital assets securely and transparently at own
            exchange rate without amount limits. Create or accept Ads, protocol
            will do the rest.
          </span>
        </div>
      </div>

      <div className="w-full flex flex-row justify-end h-full items-center mt-20 lg:mt-0">
        <div className="w-full flex flex-row justify-end mt-0 lg:mt-5">
          <ChatBubbleBg />
          <div
            className={
              "absolute z-6 w-full max-w-[400px] py-10 lg:py-5 pl-7 lg:p-4 text-center"
            }
          >
            <span
              className={
                "text-green-300 text-xl lg:text-2xl font-medium w-full"
              }
            >
              We believe in onchain public markets with trustless relations
              between buyers and sellers, eliminating the need for a third-
              party intermediary.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
