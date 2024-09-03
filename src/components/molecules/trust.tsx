import { DOCS, GITHUB, MVP } from "@/lib/links";

export const TrustSection = () => (
  <section
    className="h-full lg:h-screen w-full px-5 lg:px-44 bg-transparent bg-opacity-100"
    id="trust"
  >
    <div className="w-full h-full mt-0 lg:mt-10 flex flex-col">
      <span className="font-light text-purple-100 text-4xl lg:text-5xl">
        Trust
      </span>
      <span className="mt-5 font-light text-white-700 text-4xl lg:text-5xl lg:mt-3">
        Bakstag is secure to the core.
      </span>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-5 lg:gap-10">
        <div className="flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[550px] w-full lg:max-w-[300px]">
          <div className="flex-2 w-full h-[300px]">
            <video loop muted autoPlay className="h-full w-full object-cover">
              <source src="/assets/planet.mp4" />
            </video>
          </div>
          <div className="flex flex-col justify-between h-full mt-4">
            <div className="flex flex-col text-center">
              <span className="text-pink-200 text-3xl font-medium">
                Built to Last
              </span>
              <span className="mt-2 text-pink-200 text-opacity-66 font-normal text-xl">
                Deployed in internet on top of open networks. Available
                globally.
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

        <div className="flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[550px] w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <div className="flex-2 w-full h-[300px]">
            <video loop muted autoPlay className="h-full w-full object-cover">
              <source src="/assets/chip.mov" />
            </video>
          </div>
          <div className="flex flex-col justify-between h-full mt-4">
            <div className="flex flex-col text-center">
              <span className="text-pink-200 text-3xl font-medium">
                Open Source
              </span>
              <span className="mt-2 text-pink-200 text-opacity-66 font-normal text-xl">
                The future must be accessible to all, so the protocol is
                MIT-licensed open source.
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

        <div className="flex flex-col items-center border rounded-xl border-pink-100 px-6 py-4 h-[550px] w-full lg:max-w-[300px] mt-5 lg:mt-0">
          <div className="flex-2 w-full h-[300px]">
            <video loop muted autoPlay className="h-full w-full object-cover">
              <source src="/assets/key.mov" />
            </video>
          </div>
          <div className="flex flex-col justify-between h-full mt-4">
            <div className="flex flex-col text-center">
              <span className="text-pink-200 text-3xl font-medium">
                Permissionless
              </span>
              <span className="mt-2 text-pink-200 text-opacity-66 font-normal text-xl">
                The assets and ads remain completely under your non-custodial
                control, without intermediaries.
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
);
