import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight } from "lucide-react";
import Link from "next/link";
import { MVP } from "@/lib/links";
import { Button } from "@/components/ui/button";

export const MainSection = () => {
  return (
    <>
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 overflow-hidden">
          <video
            loop
            muted
            autoPlay
            playsInline
            controls={false}
            className="h-screen w-full object-contain z-1 transition-all transform -translate-y-[50px] lg:translate-y-0 scale-150 lg:scale-125"
            src="/assets/bg.mp4"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center flex-col z-6 px-5 lg:px-0 -mt-44 lg:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl text-center text-white-700">
            Omnichain <br className={"lg:hidden"} />
            OTC Market
          </h1>

          <div className="mt-5 lg:mt-10 w-full max-w-lg lg:max-w-3xl p-4 py-6 lg:py-8 lg:px-5 text-center flex flex-col justify-center items-center border border-gray-700 rounded-3xl bg-black bg-opacity-80">
            <span className="text-gray-400 text-xl lg:text-2xl w-full">
              Seamless <span className="text-white-700">peer-to-peer</span>{" "}
              transactions through any network. <br />
              <span className="text-white-700">No</span> slippage.{" "}
              <span className="text-white-700">No</span> bridging.{" "}
              <span className="text-white-700">No</span> wrapping.{" "}
              <span className="text-white-700">No</span> LP limits.
              Decentralised by nature.
            </span>

            <div className="mt-5 text-white flex flex-col lg:flex-row items-center justify-center w-full lg:w-[70%] px-10">
              <Select value={"eth-base"} disabled>
                <SelectTrigger className="text-white-700 text-xl disabled:cursor-default disabled:opacity-100">
                  <SelectValue
                    placeholder="Select Network"
                    defaultValue="eth-base"
                  />
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
              <ArrowLeftRight className="stroke-white-700 mx-5 lg:mx-3 my-3 lg:my-0 size-5 lg:size-6 stroke-[0.75]" />
              <Select value={"sol-sol"} disabled>
                <SelectTrigger className="text-white-700 text-xl disabled:opacity-100 disabled:cursor-default">
                  <SelectValue
                    placeholder="Select Network"
                    defaultValue="sol-sol"
                  />
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
            <Button
              className="rounded-2xl mt-5 lg:mt-10 w-72 p-7 lg:w-80 lg:p-7"
              variant="default"
            >
              <span className="text-2xl lg:text-xl font-light">Exchange</span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
