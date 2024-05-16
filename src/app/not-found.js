"use client";
import React from "react";
import errorHolding from "../assets/error.svg";
import text404 from "../assets/text404.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const notFound = () => {
  const router = useRouter();

  const onClickGoHome = () => {
    router.push("/");
  };

  const onClickReloadLink = () => {
    router.refresh();
  };

  return (
    <div className="mainBox404 hero md:pb-16 px-6 md:px-0">
      <div className="holding flex justify-center">
        <Image src={errorHolding} className="" alt="img"/>
      </div>
      <div className="text404 flex justify-center items-center my-5 md:mt-24 lg:mt-5 text-center">
        <Image src={text404} className="" alt="img"/>
      </div>
      <div className="textDes text-lg lg:flex lg:flex-col px-0 md:px-32 lg:px-0 text-center">
        <span className="text-center ">
          We’ve searched high and low and couldn't find the page you were
          looking for.
        </span>
        <span className="text-center">
          Lets fins a better place for you to go.
        </span>
      </div>
      <div className="hidden md:flex btn404 justify-center my-5">
        <button
          className="button3dWhite rounded-xl cursor-pointer bg-white lg:px-8 md:text-sm px-8 py-2 font-semibold "
          onClick={onClickGoHome}
        >
          Go Home
        </button>
      </div>

      <div className="btn404 flex justify-center mb-44 md:mb-0 mt-5 md:mt-0">
        <Link
          href={"#"}
          className="text-primary-blue font-semibold flex align-middle"
          onClick={onClickReloadLink}
        >
          <span className="mr-1">Retry</span>

          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_376_4537)">
                <path
                  d="M7.58073 6.875L10.4141 4.04167L7.58073 1.20833"
                  stroke="#3335F9"
                  stroke-width="1.4"
                />
                <path
                  d="M13.2925 6.52111C13.8544 7.49409 14.0691 8.62905 13.9016 9.74004C13.734 10.851 13.1941 11.8722 12.3703 12.6362C11.5465 13.4002 10.4876 13.8618 9.36719 13.9453C8.24674 14.0288 7.13116 13.7293 6.2032 13.0958C5.27524 12.4623 4.58993 11.5325 4.25956 10.4586C3.92918 9.38474 3.97333 8.23048 4.38476 7.18497C4.79619 6.13945 5.55051 5.26467 6.52414 4.70394C7.49777 4.14321 8.63297 3.92978 9.74377 4.09861"
                  stroke="#3335F9"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_376_4537">
                  <rect
                    width="17"
                    height="17"
                    fill="white"
                    transform="translate(17.5 17.5) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </Link>
      </div>

      <div className="flex md:hidden btn404 justify-center my-5">
        <button
          className="button3dWhite rounded-xl cursor-pointer bg-white lg:px-8 md:text-sm px-8 py-2 font-semibold "
          onClick={onClickGoHome}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default notFound;
