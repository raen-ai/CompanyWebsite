"use client";
import React, { useState, useEffect } from "react";
import "./header.scss";
import Link from "next/link";
import icon from "../../../public/Logo.png";
import blackLogo from "../../assets/Vector.svg";
import mobileMenuEarth from "../../assets/Sphere.svg";
import Image from "next/image";
import { menuItems } from "../../utils/constants.js";
import { useRouter,usePathname } from "next/navigation";

const Header = () => {
  const currentPathname = usePathname();
  const router = useRouter();
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const desktopMenuItems = menuItems?.filter((item) => item?.path !== "/");

  useEffect(() => {
    setPathname(currentPathname);
  }, [currentPathname]);

  const onClickLink = () => {
    setIsOpen(false);
  };

  const onClickTryDemo = () => {
    if (path == "/") {
      var section = document.getElementById("chatSectionId");
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        var section = document.getElementById("chatSectionId");
      section.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-[9999] h-[100vh] w-[100vw] bg-[#000000c0] flex justify-end">
          <div className="h-[100vh] w-[80vw] bg-[white] overflow-y-auto ">
            <div className="relative overflow-hidden h-[100%] px-6 py-10">
              <div className="mobileMenuEarth absolute bottom-[-16%] left-[-36%] ">
                <Image
                  src={mobileMenuEarth}
                  className="max-w-[200%] h-[530px] w-[480px] rotate-[-10deg]"
                  // height={402}
                  // width={400}
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <Image src={blackLogo} alt="test" className="h-[35px] w-[30px]"/>
                </div>
                <div>
                  <button
                    type="button"
                    data-drawer-hide="drawer-right-example"
                    aria-controls="drawer-right-example"
                    className="text-[black] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white justify-self-end"
                    onClick={toggleMenu}
                  >
                    <svg
                      className="w-5 h-5 me-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-col items-end">
                {menuItems?.map((item) => (
                  <div className="text-3xl flex items-center my-3">
                    {pathname === item?.path ? (
                      <div className="text-primary-blue h-[9px] w-[9px] rounded-[50%] bg-primary-blue mr-2"></div>
                    ) : null}
                    <span
                      className={`font-semibold ${
                        pathname === item?.path ? "text-black" : "text-gray-300"
                      }`}
                    >
                      <Link
                        href={item?.path}
                        className="hover:text-primary-blue"
                        onClick={onClickLink}
                        as={item?.path}
                      >
                        {item?.name}
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="fixed top-6 md:top-8 w-full z-10 header-background">
        <div className="background1 flex justify-between border px-2 md:px-2 lg:px-4 items-center rounded-xl py-2 md:py-2 lg:py-2 mx-6 md:mx-2 lg:mx-12">
          <div className="h-[50%] w-[40%] md:h-[40%] md:w-[20%] lg:h-[50%] lg:w-[12%]">
            <Link href={"/"} as={"/"}>
              <Image src={icon} alt="test" />
            </Link>
          </div>

          <div className="block md:hidden " onClick={toggleMenu}>
            <svg
              width="31"
              height="36"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5 23.1898C27.5 23.8773 26.9425 24.4336 26.2562 24.4336H16.2437C15.9139 24.4336 15.5975 24.3026 15.3643 24.0693C15.131 23.8361 15 23.5197 15 23.1898C15 22.86 15.131 22.5436 15.3643 22.3104C15.5975 22.0771 15.9139 21.9461 16.2437 21.9461H26.2562C26.9437 21.9461 27.5 22.5023 27.5 23.1898ZM27.5 15.6836C27.5 16.3711 26.9425 16.9273 26.2562 16.9273H3.74375C3.41389 16.9273 3.09753 16.7963 2.86429 16.5631C2.63104 16.3298 2.5 16.0135 2.5 15.6836C2.5 15.3537 2.63104 15.0374 2.86429 14.8041C3.09753 14.5709 3.41389 14.4398 3.74375 14.4398H26.2562C26.9437 14.4398 27.5 14.9973 27.5 15.6836ZM26.2562 9.42109C26.5861 9.42109 26.9025 9.29006 27.1357 9.05681C27.369 8.82356 27.5 8.50721 27.5 8.17734C27.5 7.84748 27.369 7.53113 27.1357 7.29788C26.9025 7.06463 26.5861 6.93359 26.2562 6.93359H11.2437C11.0804 6.93359 10.9187 6.96576 10.7678 7.02827C10.6169 7.09077 10.4798 7.18239 10.3643 7.29788C10.2488 7.41337 10.1572 7.55048 10.0947 7.70138C10.0322 7.85228 10 8.01401 10 8.17734C10 8.34068 10.0322 8.50241 10.0947 8.65331C10.1572 8.80421 10.2488 8.94131 10.3643 9.05681C10.4798 9.1723 10.6169 9.26391 10.7678 9.32642C10.9187 9.38892 11.0804 9.42109 11.2437 9.42109H26.2562Z"
                fill="#191919"
              />
            </svg>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline md:space-x-2 lg:space-x-4">
              {desktopMenuItems?.map((items) => (
                <Link
                  href={items?.path}
                  as={items?.path}
                  className={`${
                    pathname === items?.path ? "text-primary-blue " : " "
                  } hover:text-primary-blue md:px-2  py-2 rounded-md text-sm font-medium font-semibold`}
                >
                  {items?.name}
                </Link>
              ))}

              {/* <button class="button3d">Click Here</button>   */}

              <button
                className="button3d rounded-xl cursor-pointer bg-primary-blue lg:px-5 md:text-sm px-3 py-2 text-white font-semibold"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
                onClick={onClickTryDemo}
              >
                Try Free Demo
              </button>
            </div>
          </div>

          {/* {isOpen ? (
          <>
            <div
              id="drawer-right-example"
              className={`fixed top-[-1.7rem] right-[100%] z-[99999] h-[100vh]  overflow-y-auto transition-transform translate-x-full bg-[#000000bb] w-[100vw] flex justify-end backdrop-blur`}
              // tabindex="-1"
              // aria-labelledby="drawer-right-label"
            >
              <div className="relative w-[80%] pt-[3rem] pr-[3rem] bg-[white] p-4 h-full overflow-hidden">
                <div className="absolute bottom-[-28%] left-[-36%] ">
                  <Image
                    src={mobileMenuEarth}
                    className="max-w-[200%] h-[530px] w-[480px] rotate-[-10deg]"
                    // height={402}
                    // width={400}
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <Image src={blackLogo} alt="test" />
                  </div>
                  <div>
                    <button
                      type="button"
                      data-drawer-hide="drawer-right-example"
                      aria-controls="drawer-right-example"
                      className="text-[black] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white justify-self-end"
                      onClick={toggleMenu}
                    >
                      <svg
                        className="w-5 h-5 me-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close menu</span>
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex flex-col items-end">
                  {menuItems?.map((item) => (
                    <div className="text-3xl my-3">
                      {pathname === item?.path ? (
                        <span className="text-primary-blue">&#x2022;</span>
                      ) : null}
                      <span
                        className={`font-semibold ${
                          pathname === item?.path
                            ? "text-black"
                            : "text-gray-300"
                        }`}
                      >
                        <Link
                          href={item?.path}
                          className="hover:text-primary-blue"
                          onClick={onClickLink}
                        >
                          {item?.name}
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null} */}
        </div>
      </div>
    </>
  );
};

export default Header;
