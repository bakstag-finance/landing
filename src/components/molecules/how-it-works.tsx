export const HowItWorksSection = () => (
  <section
    className="h-full  lg:h-screen  mt-10 lg:mt-0 w-full flex justify-center items-center px-5 lg:px-44"
    id={"how-it-works"}
  >
    <div className={"w-full h-full flex flex-col max-w-[1200px]"}>
      <span className={"text-4xl text-yellow-200 font-light"}>
        How it works
      </span>
      <span className={"mt-2 text-4xl text-white-700 font-medium"}>
        How to exchange tokenized assets in omnichain way using Bakstag protocol
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
            Choose token to sell with desired amount, select token to receive,
            then set preferred exchange rate between assets
          </span>
        </div>
        <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
          <span className={"font-light text-[6rem]"}>02</span>
          <span className={"font-extralight text-[2.15rem]"}>Publish</span>
          <span className={"mt-5 opacity-50 text-md font-normal"}>
            Sign and publish with custom conditions to make Ad available
            onchain, so everyone can accept it across open internet
          </span>
        </div>
        <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
          <span className={"font-light text-[6rem]"}>03</span>
          <span className={"font-extralight text-[2.15rem]"}>Accept</span>
          <span className={"mt-5 opacity-50 text-md font-normal"}>
            Navigate through feed and find existing Ads that suits your needs.
            Accept with zero commission fees.
          </span>
        </div>
        <div className={"flex flex-col px-5 py-2 text-yellow-200"}>
          <span className={"font-light text-[6rem]"}>04</span>
          <span className={"font-extralight text-[2.15rem]"}>Receive</span>
          <span className={"mt-5 opacity-50 text-md font-normal"}>
            Once Ad is accepted, buyer and seller receive assets to
            non-custodial wallets. Imaging exchanging BOME (Sol) for USDC (Base)
            in seconds.
          </span>
        </div>
      </div>
    </div>
  </section>
);
