import {DOCS, GITHUB, MVP, TWITTER} from "@/lib/links";

export const Footer = () => (
    <div
        className={
            "flex flex-col lg:flex-row border-t border-t-[0.5] border-t-black-400 px-5 lg:px-44 p-10 w-full justify-between mt-5 lg:mt-0"
        }
    >
        <div className={"flex flex-col"}>
            <span className={"text-white-700 text-4xl lg:text-2xl"}>Bakstag</span>
            <a
                className="text-2xl lg:text-xl text-gray-600 mt-5 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
                href={MVP}
                target={"_blank"}
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
                    href={TWITTER}
                    target={"_blank"}
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
                    href={MVP}
                    target={"_blank"}
                >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            App
          </span>
                </a>
                <a
                    className="text-2xl lg:text-xl text-gray-600 mt-3 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
                   href={DOCS}
                    target={"_blank"}
                >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Documents
          </span>
                </a>
                <a
                    className="text-2xl lg:text-xl text-gray-600 mt-3 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white-700"
                    href={GITHUB}
                    target={"_blank"}
                >
          <span className="bg-left-bottom bg-gradient-to-r from-white-700 to-white-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Github
          </span>
                </a>
            </div>
        </div>
    </div>
);