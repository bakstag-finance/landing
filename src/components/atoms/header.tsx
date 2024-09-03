"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleChange = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 h-screen w-full bg-black  flex flex-col items-center justify-start p-10 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          },
        )}
        style={{ zIndex: 100 }}
      >
        <div className="w-full flex flex-row justify-end">
          <X
            className={"stroke-white-700 size-10 cursor-pointer"}
            onClick={handleChange}
          />
        </div>
        <a
          className="mt-20 text-3xl text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
          href={"#about"}
          onClick={handleChange}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
          </span>
        </a>
        <a
          className="mt-20 text-3xl text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
          href={"#trust"}
          onClick={handleChange}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Trust
          </span>
        </a>
        <a
          className="mt-20 text-3xl text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
          href={"#how-it-works"}
          onClick={handleChange}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            How It Works
          </span>
        </a>
        <a
          className="mt-20 text-3xl text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
          href={"#faq"}
          onClick={handleChange}
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            FAQ
          </span>
        </a>
        <Button className="rounded-xl mt-20 text-3xl p-12 font-light">
          Exchange
        </Button>
      </div>

      <nav className="sticky top-0 w-full h-20 flex justify-center items-center z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent backdrop-blur-md before:backdrop-blur-xl after:backdrop-blur-xs"></div>
        <div className="hidden lg:flex w-full h-full justify-between items-center relative z-10 px-44">
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              width={30}
              height={30}
              alt="logo image"
            />
            <span className="text-white-700 ml-3">Bakstag</span>
          </div>
          <div className="flex items-center">
            <a
              className="text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
              href={"#about"}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </span>
            </a>
            <a
              className="text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
              href={"#trust"}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Trust
              </span>
            </a>
            <a
              className="text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
              href={"#how-it-works"}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                How It Works
              </span>
            </a>
            <a
              className="text-gray-700 mx-2 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
              href={"#faq"}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                FAQ
              </span>
            </a>
            <Button className="rounded-xl ml-2">Exchange</Button>
          </div>
        </div>
        <div
          className={
            "flex lg:hidden flex-row justify-between z-10 w-full px-10"
          }
        >
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              width={30}
              height={30}
              alt="logo image"
            />
            <span className="text-white-700 ml-3">Bakstag</span>
          </div>
          <div className="flex items-center">
            <Menu
              className={"stroke-gray-700 cursor-pointer"}
              onClick={handleChange}
            />
            <Button className="rounded-xl ml-5">Exchange</Button>
          </div>
        </div>
      </nav>
    </>
  );
};
