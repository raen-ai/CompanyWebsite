"use client";
import React, { useState } from "react";
import "./product.scss";
import Image from "next/image";
import Product from "../../assets/productIllustration.svg";
import WHiteLogo from "../../assets/whiteLogo.svg";
import ArrowRounded from "@/components/svgs/ArrowRounded";
import Vector from "../../assets/Stars.svg";
import Cutting from "../../assets/cutting.png";
import blackStar from "../../assets/blackStar.png";
import ProductsIllu from "@/components/svgs/ProductsIllu";

const products = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);

  return (
    <div className="bg-[#191919]">
      <div className="product-page pb-6 md:pb-0 px-6 md:px-4 lg:px-12 pt-28 md:pt-36 lg:pt-36 overflow-hidden">
        {/* desktop */}
        <div className="cli-res-pro-box hidden lg:grid lg:grid-cols-3 md:pt-14 lg:pt-14">
          <div className="cli-res-pro-box-up lg:col-span-2">
            <div className="bg-primary-blue rounded-lg text-white  text-xs py-1 px-3 h-fit w-fit font-semibold  tracking-wider">
              Our Products
            </div>
            <div>
              <p className=" p-line relative  w-[55vw] lg:mt-8 text-5xl md:text-5xl lg:text-6xl font-bold text-white  tracking-wider">
                <Image
                  src={Vector}
                  className="cli-res-pro-box-p-line-img absolute  lg:right-[-5%] 2xl:right-0 lg:top-[-30%]  "
                  alt="img"
                />
                {/* <Image
                  src={Vector}
                  className=" absolute right-[2%] top-[20%]  md:right-[-2%] md:top-[25%] lg:right-[-2%] lg:top-[30%] w-[20px] md:w-[35px]  lg:w-[40px]"
                /> */}
                Innovative Software Products to Empower Your{" "}
                <span className="bg-[#3335f9] text-white px-3 rounded-2xl py-1 md:px-3 lg:px-3 md:py-1 md:rounded-2xl lg:py-1 lg:rounded-2xl tracking-wider mt-4">
                  Business
                </span>
              </p>
              <div className="mt-6 md:mt-6 lg:mt-8  md:flex md:flex-col md:items-end">
                <p className="w-[70%] md:w-[80%] lg:w-[80%]  text-[#cccccc] md:pr-8 lg:mr-16">
                  Ditch the spreadsheets and hello, AI! Our killer software
                  products make AI easy, boost your efficiency, and automate
                  those boring tasks. Businesses of all sizes, level up your
                  game!
                  <span className="font-bold text-sm text-[#cccccc]  mt-4 block">
                    Keep scrolling, view our products
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="cli-res-pro-box-down w-full h-full lg:flex lg:items-center lg:justify-end">
            {/* <ProductsIllu/> */}
            <Image
              src={Product}
              className=" lg:scale-125"
              width={510}
              height={580}
              alt="img"
            />
          </div>
        </div>
        <div className="cli-res-pro-box-down-text hidden lg:block lg:mt-6 pb-7">
          <h2 className="lg:text-4xl text-white font-bold mb-4">
            AI Made Easy:
          </h2>
          <h2 className="lg:text-4xl text-white font-bold mb-4 tracking-wider">
            Explore Our Killer Software Product
            <span className="relative ">
              s{" "}
              <Image
                src={Cutting}
                className="absolute right-[-100%] top-[-20%] "
                alt="img"
              />
            </span>
          </h2>
        </div>

        {/* tablet */}
        <div className="hidden md:grid md:grid-cols-5 lg:hidden md:pt-14 lg:pt-14">
          <div className="md:col-span-4">
            <div className="bg-primary-blue rounded-lg text-white  text-xs py-1 px-3 h-fit w-fit font-semibold  tracking-wider">
              Our Products
            </div>
            <div>
              <p className=" p-line relative lg:mt-8 lg:w-[90%] text-5xl md:text-4xl  font-bold text-white  tracking-wider">
                Innovative Software Products to Empower Your{" "}
                <span className="bg-[#3335f9] text-white px-3 rounded-2xl py-1 md:px-3 lg:px-3 md:py-1 md:rounded-2xl lg:py-1 lg:rounded-2xl tracking-wider mt-4">
                  Business
                </span>
              </p>
              <div className="mt-6 md:mt-6 lg:mt-8  md:flex md:flex-col md:items-end">
                <p className="w-[70%] md:w-[85%]   text-[#cccccc] md:mr-10 lg:mr-16">
                  Ditch the spreadsheets and hello, AI! Our killer software
                  products make AI easy, boost your efficiency, and automate
                  those boring tasks. Businesses of all sizes, level up your
                  game!
                  <span className="font-bold text-sm text-[#cccccc]  mt-4 block">
                    Keep scrolling, view our products
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="product-illust w-full h-full md:flex md:items-center md:justify-end py-44"></div>
        </div>
        <div className="hidden md:flex justify-center lg:hidden md:mt-16 pb-7">
          <div className="">
            <h2 className="text-4xl text-white font-bold mb-4">
              AI Made Easy:
            </h2>
            <h2 className="text-4xl text-white font-bold mb-4 tracking-wider">
              Explore Our Killer Software Product
              <span className="relative ">
                s{" "}
                <Image
                  src={Cutting}
                  className="absolute right-[-100%] top-[-20%] "
                  alt="img"
                />
              </span>
            </h2>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden grid grid-cols-5 lg:hidden  ">
          <div className="col-span-5 ">
            <div className="bg-primary-blue rounded-lg text-white  text-xs py-1 px-3 h-fit w-fit font-semibold  tracking-wider">
              Our Products
            </div>
            <p className=" p-line relative mt-4 text-[2.5rem]   font-bold text-white ">
              Innovative Software Products to Empower Your{" "}
              <span className="bg-[#3335f9] text-white px-3 rounded-2xl py-1 md:px-3 lg:px-3 md:py-1 md:rounded-2xl lg:py-1 lg:rounded-2xl tracking-wider mt-4">
                Business
              </span>
            </p>
            <div className="grid grid-cols-6">
              <div className=" col-span-5">
                <p className=" col-span-5   mt-5   text-[#cccccc] md:mr-10 lg:mr-16">
                  Ditch the spreadsheets and hello, AI! Our killer software
                  products make AI easy, boost your efficiency, and automate
                  those boring tasks. Businesses of all sizes, level up your
                  game!
                </p>
                <div className="font-bold relative text-sm text-[#5c5c5c] w-1/4 pl-2 py-4 rounded-2xl border border-[#5c5c5c]  inline-block  mt-52 ">
                  <Image
                    src={blackStar}
                    className=" absolute right-[-45%] 2xl:right-0 top-[-32%]  w-[35px] md:w-[70px]"
                    alt="img"
                  />
                  Keep scrolling, view our products
                </div>
              </div>
              <div className=" product-illust1 w-full h-full  py-44"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Below section */}
      <div className="cli-res-pro-gird px-8 md:px-8 lg:px-12 pt-5 md:pt-10 md:pb-10 lg:pt-12 lg:pb-10 bg-[#191919]">
        <div className=" md:hidden  lg:hidden md:mt-16 pb-7">
          <div className="">
            <h2 className="text-2xl text-white font-bold mb-2">
              AI Made Easy:
            </h2>
            <h2 className="text-2xl text-white font-bold mb-3 tracking-wider">
              Explore Our Killer Software Product
              <span className="relative ">
                s{" "}
                <Image
                  src={Cutting}
                  className="absolute right-[-100%] top-[-20%] "
                  alt="img"
                />
              </span>
            </h2>
          </div>
        </div>
        <div className="cli-res-pro-gird-box md:px-0 mt-6 md:mt-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className=" md:py-10 md:px-2 lg:p-6 relative">
            {/* <div className="absolute  ">
            <div className="w-[2px] h-full bg-[#666666]"></div>
          </div> */}
            <div className="hidden md:block absolute right-0 top-2 bottom-2">
              <div className="w-[1px] h-full bg-[#666666]"></div>
            </div>
            <div className=" hidden md:block absolute left-2 right-2 bottom-0">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className="hidden md:block absolute top-0 left-2 right-2">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className=" lg:py-7 mb-16 md:mb-0">
              <Image
                src={WHiteLogo}
                alt="white-logo"
                className="mb-5 w-1/2 md:w-2/3"
              />
              <div className=" text-white  lg:pt-4 md:pb-4 lg:pr-4">
                <p className="text-md  text-gray-400">
                  Ut pretium luctus erat pharetra elementum adipiscing.
                  Ullamcorper proin arcu quam dui egestas nam. Commodo varius
                  sem bibendum dui risus mauris fames.
                </p>
                <div className=" pt-3 md:pt-7">
                  <span
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                    className=" hover:text-[#9e00ff] w-[10%]  hoverWrapper transition-all duration-300 ease-in-out"
                  >
                    Discover{" "}
                    <div
                      className={` hidden md:block ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered1 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#fff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                    <div
                      className={`block md:hidden  ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered1 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#9e00ff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-1 md:py-10 md:px-4 lg:p-6 relative">
            <div className="hidden md:block absolute right-0 top-2 bottom-2">
              <div className="w-[1px] h-full bg-[#666666]"></div>
            </div>
            <div className="hidden md:block absolute left-2 right-2 bottom-0">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className="hidden md:block absolute top-0 left-2 right-2">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className=" lg:py-7 mb-16 md:mb-0">
              <Image
                src={WHiteLogo}
                alt="white-logo"
                className="mb-5 w-1/2 md:w-2/3 "
              />
              <div className=" text-white  lg:pt-4 md:pb-4 lg:pr-4">
                <p className="text-md  text-gray-400">
                  Ut pretium luctus erat pharetra elementum adipiscing.
                  Ullamcorper proin arcu quam dui egestas nam. Commodo varius
                  sem bibendum dui risus mauris fames.
                </p>
                <div className="pt-3 md:pt-7">
                <span
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    className=" hover:text-[#9e00ff] w-[10%] hoverWrapper  transition-all duration-300 ease-in-out"
                  >
                    Discover{" "}
                    <div
                      className={` hidden md:block ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered2 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#fff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                    <div
                      className={`block md:hidden  ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered1 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#9e00ff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cli-res-pro-gird-box-3 px-1 md:py-10 md:px-2 lg:p-6 relative">
            <div className="cli-res-pro-gird-box-3-blo hidden  md:block lg:hidden absolute right-0 top-2 bottom-2">
              <div className="w-[2px] h-full bg-[#666666]"></div>
            </div>
            <div className="hidden md:block absolute left-2 right-2 bottom-0">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className="hidden lg:block absolute top-0 left-2 right-2">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className=" lg:py-7 mb-16 md:mb-0">
              <Image
                src={WHiteLogo}
                alt="white-logo"
                className="mb-5 w-1/2 md:w-2/3 "
              />
              <div className=" text-white  lg:pt-4 md:pb-4 lg:pr-4">
                <p className="text-md  text-gray-400">
                  Ut pretium luctus erat pharetra elementum adipiscing.
                  Ullamcorper proin arcu quam dui egestas nam. Commodo varius
                  sem bibendum dui risus mauris fames.
                </p>
                <div className="pt-3 md:pt-7">
                  <span
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                    className=" hover:text-[#9e00ff] w-[10%] hoverWrapper inline-flex items-center hover:move-icons"
                  >
                    Discover{" "}
                    <div
                      className={` hidden md:block ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered3 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#fff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                    <div
                      className={`block md:hidden  ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={  "#9e00ff" }
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#9e00ff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-1 md:py-10 md:px-4 lg:p-6 relative">
            <div className="hidden md:block absolute right-0 top-2 bottom-2">
              <div className="w-[1px] h-full bg-[#666666]"></div>
            </div>
            <div className="hidden md:block absolute left-2 right-2 bottom-0">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>

            <div className=" lg:py-7 mb-16 md:mb-0">
              <Image
                src={WHiteLogo}
                alt="white-logo"
                className="mb-5 w-1/2 md:w-2/3 "
              />
              <div className=" text-white  lg:pt-4 md:pb-4 lg:pr-4">
                <p className="text-md  text-gray-400">
                  Ut pretium luctus erat pharetra elementum adipiscing.
                  Ullamcorper proin arcu quam dui egestas nam. Commodo varius
                  sem bibendum dui risus mauris fames.
                </p>
                <div className="pt-3 md:pt-7">
                  <span
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                    className=" hover:text-[#9e00ff] w-[10%] hoverWrapper inline-flex items-center hover:move-icons"
                  >
                    Discover{" "}
                    <div
                      className={` hidden md:block ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered4 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#fff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                    <div
                      className={`block md:hidden  ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={  "#9e00ff" }
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#9e00ff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-1 md:py-10 md:px-2 lg:p-6 relative">
            <div className="hidden md:block  absolute right-0 top-2 bottom-2">
              <div className="w-[1px] h-full bg-[#666666]"></div>
            </div>
            <div className="hidden md:block absolute left-2 right-2 bottom-0">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>

            <div className=" lg:py-7 mb-16 md:mb-0">
              <Image
                src={WHiteLogo}
                alt="white-logo"
                className="mb-5 w-1/2 md:w-2/3 "
              />
              <div className=" text-white  lg:pt-4 md:pb-4 lg:pr-4">
                <p className="text-md  text-gray-400">
                  Ut pretium luctus erat pharetra elementum adipiscing.
                  Ullamcorper proin arcu quam dui egestas nam. Commodo varius
                  sem bibendum dui risus mauris fames.
                </p>
                <div className="pt-3 md:pt-7">
                  <span
                    onMouseEnter={() => setHovered5(true)}
                    onMouseLeave={() => setHovered5(false)}
                    className=" hover:text-[#9e00ff] w-[10%] hoverWrapper inline-flex items-center hover:move-icons"
                  >
                    Discover{" "}
                    <div
                      className={` hidden md:block ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={  hovered5 ? "#9e00ff" : "#fff" }
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#fff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                    <div
                      className={`block md:hidden  ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={ "#9e00ff"  }
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#9e00ff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cli-res-pro-gird-box-7 px-1 md:py-10 md:px-4 lg:p-6 relative">
            <div className="hidden md:block absolute left-2 right-2 bottom-0">
              <div className="w-full h-[1px] bg-[#666666]"></div>
            </div>
            <div className="cli-res-pro-gird-box-7-blo hidden md:block lg:hidden absolute right-0 top-2 bottom-2">
              <div className="w-[1px]  h-full bg-[#666666]"></div>
            </div>
            <div className=" lg:py-7 mb-16 md:mb-0">
              <Image
                src={WHiteLogo}
                alt="white-logo"
                className="mb-5 w-1/2 md:w-2/3 "
              />
              <div className=" text-white  lg:pt-4 md:pb-4 lg:pr-4">
                <p className="text-md  text-gray-400">
                  Ut pretium luctus erat pharetra elementum adipiscing.
                  Ullamcorper proin arcu quam dui egestas nam. Commodo varius
                  sem bibendum dui risus mauris fames.
                </p>
                <div className="pt-3 md:pt-7">
                  <span
                    onMouseEnter={() => setHovered6(true)}
                    onMouseLeave={() => setHovered6(false)}
                    className=" hover:text-[#9e00ff] w-[10%] hoverWrapper inline-flex items-center hover:move-icons"
                  >
                    Discover{" "}
                    <div
                      className={` hidden md:block ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={hovered6 ? "#9e00ff" : "#fff"}
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#fff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                    <div
                      className={`block md:hidden  ml-2  transition-all duration-300 ease-in-out`}
                    >
                      <div class="  icon-container   relative     py-3">
                        <ArrowRounded
                          height={16}
                          width={16}
                          color={ "#9e00ff" }
                          class1="icon icon--left   "
                        />

                        <ArrowRounded
                          height={16}
                          width={16}
                          color={"#9e00ff"}
                          class1=" icon icon--right  "
                        />
                      </div>
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
