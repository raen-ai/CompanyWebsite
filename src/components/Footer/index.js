"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon from "../../../public/Logo.png";
import "./footer.css";
import linkedln from "../../Icons/Linkedin.svg";
import Instagram from "../../Icons/Instagram.svg";
import Github from "../../Icons/Github.svg";
import X from "../../Icons/X.svg";
import logoWhite from "../../assets/LogoWhite.png";
import RightArrow from "../../Icons/RightArrow.png";
import send from "../../Icons/Send.svg";
import toastr from "toastr";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { menuItems } from "@/utils/constants";

const Footer = () => {
  const [expanded, setExpanded] = useState(false); // State to track expansion
  const [email, setEmail] = useState();
  const router = useRouter();
  const pathname = usePathname();

  const toggleSize = () => {
    const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!expanded) {
      if (pattern.test(email)) {

        const url = "https://api.raen.ai/v1/postemail";
        const headers = {
          "Content-Type": "application/json",
          "x-api-key": "7NZyb9ehhY5zgPBAYc4cW6EGSQL0LrUX7bSdxNDJ",
        };
        const data = JSON.stringify({
          email: email,
        });
        fetch(url, {
          method: "POST",
          headers: headers,
          body: data,
        })
          .then((response) => response.json())
          .then(
            (data) =>
              window.innerWidth < 768
                ? toastr.success(
                    "Your email has been successfully subscribed.",
                    "Congratulations!"
                  )
                : null,
            setExpanded(!expanded)
          )
          .catch((error) =>
            toastr.error(error?.message, "Something went wrong")
          );
      } else {
        toastr.error(
          "Invalid email format. Please check and try again.",
          "Invalid email"
        );
      }
    }
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickTryDemo = () => {
    if (pathname == "/") {
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
      {(menuItems.some((item) => item.path === pathname) ||
        pathname === "/products") && (
        <div className="hero">
          <div className="whyReanAisolution pt-8 pb-4 md:pb-8 mt-10 md:mt-10">
            <div className="px-6 md:px-4 lg:px-12">
              <div className="footerTitle px-0 md:px-0 lg:px-64 xxl:px-96">
                <div className="text-2xl md:text-4xl text-center md:text-start">
                  Grow Your{" "}
                  <span className="font-semibold italic">Business</span> With Us
                </div>
                <div className="text-2xl md:text-4xl text-center md:text-end my-3 px-8 md:px-0">
                  Free Demo, No Strings Attached.
                </div>
                <div className="flex justify-center mb-5 md:mb-8 lg:mb-16 mt-3 md:mt-7">
                  <button
                    className="button3d rounded-xl cursor-pointer font-semibold btn-blue bg-primary-blue lg:px-5 md:text-sm px-3 py-2 text-white"
                    onClick={onClickTryDemo}
                  >
                    Try Free Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3 md:px-4 lg:px-12">
              <footer className="bg-primary-dark-gray text-white py-8 px-4 md:px-8 rounded-3xl">
                <div className="lg:flex">
                  <div className="right ">
                    <p className=" font-semibold text-2xl 2xl:text-3xl">
                      Wanna stay AI-savvy ?
                    </p>
                    <p className=" font-semibold text-2xl 2xl:text-3xl">
                      Sign up for our newsletter!
                    </p>

                    <div className="hidden md:block containerr">
                      <div
                        className={`relative input-container md:flex md:mt-2 ${
                          expanded ? "expanded" : ""
                        }`}
                        id="inputContainer"
                      >
                        {" "}
                        <input
                          type="text"
                          placeholder={expanded ? "" : "Enter your email"}
                          value={expanded ? "" : email}
                          style={{ fontSize: expanded ? "20px" : "" }}
                          className={`input-field w-full bg-zinc-800  p-2 mt-5 md:mt-2 mb-2 md:mb-0 rounded-lg md:mr-2 ${
                            expanded
                              ? " flex justify-center items-center text-green-500 w-full text-center align-middle"
                              : "text-white"
                          }`}
                          onChange={onChangeEmail}
                          disabled={expanded}
                        />
                        {expanded ? (
                          <span className="absolute top-[20px] left-[12px]">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.53356 9.49974L8.93356 12.3331L13.4669 6.66641M9.50023 17.4331C8.45841 17.4331 7.42679 17.2279 6.46427 16.8292C5.50176 16.4305 4.62719 15.8461 3.89051 15.1095C3.15384 14.3728 2.56947 13.4982 2.17078 12.5357C1.7721 11.5732 1.56689 10.5416 1.56689 9.49974C1.56689 8.45792 1.7721 7.4263 2.17078 6.46378C2.56947 5.50127 3.15384 4.6267 3.89051 3.89003C4.62719 3.15335 5.50176 2.56898 6.46427 2.1703C7.42679 1.77161 8.45841 1.56641 9.50023 1.56641C11.6043 1.56641 13.6222 2.40224 15.1099 3.89003C16.5977 5.37781 17.4336 7.39569 17.4336 9.49974C17.4336 11.6038 16.5977 13.6217 15.1099 15.1095C13.6222 16.5972 11.6043 17.4331 9.50023 17.4331Z"
                                stroke="#4EC902"
                                stroke-width="1.4"
                              />
                            </svg>
                          </span>
                        ) : null}
                        <button
                          className={`subscribe-button ${
                            expanded
                              ? " bg-[#9E00FF] text-white"
                              : " bg-white text-black"
                          }  py-2 px-6 mt-2 rounded-lg`}
                          onClick={toggleSize}
                        >
                          {expanded ? (
                            <div className="flex gap-2 justify-center items-center">
                              <span>Subscribed</span>
                              <Image src={send} className="h-3 w-3" alt="img" />
                            </div>
                          ) : (
                            "Subscribe"
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="block md:hidden">
                      <div className="md:flex md:mt-2">
                        <input
                          type="text"
                          value={
                            expanded
                              ? "You are successfully subscribed. 🎉"
                              : email
                          }
                          placeholder="Enter your email"
                          className="input-field w-full border border-primary-gray bg-zinc-800 text-white p-2 mt-5 md:mt-2 mb-2 md:mb-0 rounded-lg md:mr-2"
                          onChange={onChangeEmail}
                          disabled={expanded}
                        />
                        <button
                          className="subscribe-button bg-white text-black py-2 px-6 mt-2 rounded-lg"
                          onClick={toggleSize}
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>

                    <div className="mt-5 mb-4 md:mb-0 md:mt-10 flex justify-between md:justify-start md:block">
                      <Image src={logoWhite} alt="test" className="h-11 w-36" />
                      {/* <button className=" block md:hidden bg-slate-800 py-2 px-3 rounded-full text-sm">
                Scroll to the top
              </button> */}
                      <button
                        className="flex md:hidden bg-zinc-800 py-2 px-3 rounded-full text-sm items-center"
                        onClick={onClickScrollToTop}
                      >
                        <span className="mr-2 text-xs">Scroll to the top</span>

                        <Image src={RightArrow} width={20} alt="img" />
                      </button>
                    </div>
                    <div className=" md:hidden lg:hidden bg-white h-[1px] mt-3 mb-2 "></div>
                  </div>
                  <div className="hidden md:flex lg:hidden mt-4 justify-end">
                    <button
                      className=" bg-zinc-800 py-2 px-3 rounded-full text-sm flex items-center"
                      onClick={onClickScrollToTop}
                    >
                      <span className="mr-2 text-xs">Scroll to the top</span>

                      <Image src={RightArrow} width={20} alt="img" />
                    </button>
                  </div>
                  <div className="hidden md:block lg:hidden bg-white h-[1px] mt-3 mb-2 "></div>
                  <div className="left flex-1  md:flex md:justify-between  lg:justify-end md:gap-8">
                    <div>
                      <h3 className="font-bold mb-2 mt-5 md:mt-0">Social</h3>
                      <ul className="mt-1 md:mt-2 text-gray-400 text-sm flex flex-wrap md:block  gap-x-6 gap-y-1 md:gap-x-6 md:gap-y-6">
                        <Link
                          href={"https://www.linkedin.com/company/raen-ai/"}
                          target="_blank"
                          // className={` hover:text-primary-blue`}
                        >
                          <li className="mt-3 flex gap-2">
                            <Image src={linkedln} width={20} alt="img" />
                            Linkedln
                          </li>
                        </Link>
                        <Link
                          href={"https://instagram.com/raen.ai"}
                          target="_blank"
                          // className={` hover:text-primary-blue`}
                        >
                          <li className="mt-3 flex gap-2">
                            <span className="bg-white rounded-full p-[5px]">
                              <Image src={Instagram} width={10} alt="img" />
                            </span>{" "}
                            Instagram
                          </li>
                        </Link>
                        <Link
                          href={"https://twitter.com/raen_ai"}
                          target="_blank"
                          // className={` hover:text-primary-blue`}
                        >
                          <li className="mt-3 flex gap-2">
                            <span className="bg-white rounded-full p-[5px] flex items-center justify-center">
                              <Image src={X} width={10} alt="img" />
                            </span>{" "}
                            X
                          </li>
                        </Link>
                        <Link
                          href={"https://github.com/raen-ai"}
                          target="_blank"
                          // className={` hover:text-primary-blue`}
                        >
                          {/* <li className="mt-3 flex gap-2">
                      <Image src={linkedln} width={20} />
                      Linkedln
                    </li> */}
                          <li className="mt-3 flex gap-2">
                            <Image src={Github} width={20} alt="img" /> Github
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mt-5 md:mt-0 mb-2">Sitemap</h3>
                      <ul className="mt-2 text-gray-400 text-sm flex flex-wrap md:block gap-6">
                        <li className="md:mt-3">Home</li>
                        <li className="md:mt-3">Company</li>
                        <li className="md:mt-3">Solutions</li>
                        {/* <li className="md:mt-3">Pricing</li> */}
                        {/* <li className="mt-[-18px] md:mt-3">Contact</li> */}
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-semibold md:font-bold mt-5 md:mt-0 mb-2">
                        Contact
                      </h3>
                      <div className="flex gap-2 md:block">
                        <p className="md:mt-3 text-gray-400 text-sm ">
                          Media City
                        </p>
                        <p className=" text-gray-400 text-sm ">Sharjah, UAE</p>
                      </div>
                      <p className="md:mt-3 text-gray-400 text-sm ">
                        +971 56 7318433
                      </p>
                      <p className="mt-2 md:mt-3 text-gray-400 text-sm ">
                        info@raen.ai
                      </p>
                    </div>
                  </div>
                  <div className="block md:hidden lg:hidden bg-white h-[1px] mt-3 mb-2 "></div>
                </div>
                <div className="hidden  lg:flex lg:justify-end mt-3 pb-2">
                  <button
                    className=" bg-zinc-800 py-2 px-3 rounded-full text-sm flex items-center"
                    onClick={onClickScrollToTop}
                  >
                    <span className="mr-2 text-xs">Scroll to the top</span>

                    <Image src={RightArrow} width={20} alt="img" />
                  </button>
                </div>
                <div className="hidden md:block  bg-white h-[1px] mt-5 mb-2 "></div>
                <div className="lg:mt-3 md:flex md:justify-between text-gray-400">
                  <div className="flex gap-5 justify-between text-gray-400 mt-5 md:mt-0">
                    <Link href={"privacy-policy"}>
                      <p>Privacy Policy</p>
                    </Link>
                    <Link href={"terms-of-services"}>
                      <p>Terms of Services</p>
                    </Link>
                  </div>
                  {/* <div className="mt-4 md:mt-0 text-gray-400">
            <p>Designed By aqildesigns</p>
          </div> */}
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
