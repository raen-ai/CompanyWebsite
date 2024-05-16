import React from "react";
import "./Hero.css";
import Hero1 from "../../assets/HeroSectionimage.png";
import Vector from "../../assets/vectorHero.svg";
import Image from "next/image";

const Hero = () => {
  const onClickTryDemo = () => {
    var section = document.getElementById("chatSectionId");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="xl:flex 2xl:gap-24">
      <div className="left flex-1 relative lg:pt-8">
        <Image
          src={Vector}
          className="cf-relso-hero-left-star-1 absolute  top-[0%] right-[3%] md:top-[5%] md:right-[5%] lg:top-[-1%] lg:right-[16%] xl:top-[0%] xl:right-[5%] 2xl:top-[-2%] 2xl:right-[21%] h-[14%] w-[16%] md:h-[14%] md:w-[10%] lg:h-[10%] lg:w-[12%] xl:h-[10%] xl:w-[10%] 2xl:h-[12%]  2xl:w-[10%] xxl:h-[14%]  xxl:w-[10%]"
        />
        <Image
          src={Vector}
          className="cf-relso-hero-left-star-2 absolute top-[12%] right-[16%] md:top-[16%] md:right-[12%] lg:top-[7%] lg:right-[26%] xl:top-[10%] xl:right-[12%] 2xl:top-[8%] 2xl:right-[29%]  h-[7%] w-[8%] md:h-[8%] md:w-[6%] lg:h-[5%] lg:w-[6%] xl:h-[5%] xl:w-[4%] 2xl:h-[8%] 2xl:w-[6%] xxl:h-[8%]  xxl:w-[6%]"
        />
        <div className="font-semibold text-3xl md:text-5xl lg:text-5xl xxl:text-7xl 2xl:text-[5rem] lg:font-semibold">
          <p className="w-4/5 leading-snug lg:mt-2 md:w-[600px] lg:w-3/4 xl:w-4/5 md:leading-snug  xl:leading-snug">
            Accelerate Your Business with Us, Your Premier AI Research Lab
          </p>
        </div>
        <div className="py-4 md:py-4 lg:py-4 xl:py-4 md:w-3/4  lg:w-full lg:pr-32 xl:pr-0 xl:w-2/3 relative leading-[150%] inline-block">
          We are an AI research lab and consultancy firm that stands at the
          forefront of AI innovation. We empower businesses with cutting-edge
          solutions, bridging the gap between research and implementation to
          propel you forward in the ever-changing AI landscape.
        </div>
        <div className="hidden md:block relative z-[3]">
          <div className="flex md:flex xl:flex lg:flex md:justify-start gap-6 lg:gap-6 xl:gap-6 mt-3">
            {/* <button className="button3dWhite btn-white bg-white text-black lg:px-6 md:text-md px-3 py-2 ">
              Learn More
            </button> */}
            <button className="button3dWhite rounded-xl cursor-pointer bg-white lg:px-5 md:text-sm px-3 py-2 font-semibold w-[22%]">
              Learn More
            </button>
            <button
              className="button3d rounded-xl cursor-pointer bg-primary-blue lg:px-5 md:text-sm px-3 py-2 text-white font-semibold w-[22%]"
              onClick={onClickTryDemo}
            >
              Try Free Demo
            </button>
          </div>
        </div>
      </div>
      <div className=" right flex-1 mt-10 md:mt-20 lg:mt-0">
        <div className="relative cf-relso-hero-right w-[100%] md:w-[100%] lg:w-[90%] h-[25vh] md:h-[46vh] lg:h-full rounded-3xl bg-primary-gray">
          <Image
            src={Hero1}
            alt="hero"
            className="cli-respo-hero-home-position-img absolute h-[170%] w-[100%] md:h-[110%] md:w-[96%] lg:h-[118%] lg:w-[118%] 2xl:h-[126%] 2xl:w-[118%] max-w-[118%] top-[-32%] left-[-2%] md:top-[-20%] md:left-[2%] lg:top-[-20%] lg:left-[-16%]"
          />

          <div className="cli-res-hero-gray-bg-1 hidden md:block md:w-[56%] lg:w-[70%] 2xl:lg:w-[60%] bg-primary-dark-gray rounded-2xl order-1  md:absolute md:bottom-40 md:right-100 lg:bottom-40 lg:right-96  xl:bottom-40 xl:right-1/2 2xl:bottom-40 2xl:right-[62%]">
            <div className=" flex items-center text-white px-5  py-5 rounded-md">
              <p className="pp text-4xl 2xl:text-5xl pr-3 lg:pr-0 font-bold">
                56%
              </p>
              <div className="lg:ml-3 xl:ml-4">
                <p className="text-sm">
                  of{" "}
                  <span className=" text-md italic font-bold mx-1">
                    Businesses
                  </span>{" "}
                  are using AI to improve and perfect business operations.
                </p>
                <p className="text-xs italic pt-1">
                  <b>Source:</b> https://connect.comptia.org
                </p>
              </div>
            </div>
          </div>
          <div className="cli-res-hero-gray-bg-2 hidden md:block md:w-[56%] lg:w-[70%] 2xl:lg:w-[60%] md:bottom-12 md:right-52  lg:bottom-14 lg:right-40 bg-primary-dark-gray rounded-2xl md:absolute xl:bottom-5 xl:left-20 2xl:bottom-5 2xl:left-[3%]">
            <div className=" flex text-white px-5 py-5 rounded-md">
              <p className="pp cli-res-47-text text-4xl 2xl:text-5xl pr-3 lg:pr-0 font-bold flex items-center">
                47%
              </p>
              <div className="xl:ml-4">
                <p className="text-sm">
                  of them harness AI tools in the form of digital
                  <span className=" text-md italic font-bold mx-1">
                    personal assistants
                  </span>{" "}
                </p>
                <p className="text-xs italic pt-1">
                  <b>Source:</b> https://connect.comptia.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="relative z-[3] flex md:flex xl:flex lg:flex md:justify-start gap-6 lg:gap-6 xl:gap-6 mt-12">
          <button className="button3dWhite rounded-xl cursor-pointer font-semibold btn-white w-[50%] bg-white text-black lg:px-6 md:text-md px-3 py-2 ">
            Learn More
          </button>
          <button
            className="button3d rounded-xl cursor-pointer font-semibold btn-blue w-[50%] bg-primary-blue lg:px-5 md:text-sm px-3 py-2 text-white "
            onClick={onClickTryDemo}
          >
            Try Free Demo
          </button>
        </div>
        <div className="md:w-[56%] lg:w-[70%] bg-primary-dark-gray rounded-2xl order-1  md:absolute md:bottom-40 md:right-100 lg:bottom-40 lg:right-96  xl:bottom-40 xl:right-1/2 mt-10">
          <div className=" flex items-center text-white px-3 py-5 rounded-md">
            <p className="text-4xl pr-3 lg:pr-0 font-bold">56%</p>
            <div className="lg:ml-3 xl:ml-4">
              <p className="text-sm">
                of{" "}
                <span className=" text-md italic font-bold mx-1">
                  Businesses
                </span>{" "}
                are using AI to improve and perfect business operations.
              </p>
              <p className="text-xs italic pt-1">
                <b>Source:</b> https://connect.comptia.org
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[56%] lg:w-[70%] bg-primary-dark-gray rounded-2xl order-1  md:absolute md:bottom-40 md:right-100 lg:bottom-40 lg:right-96  xl:bottom-40 xl:right-1/2 mt-8">
          <div className=" flex items-center text-white px-3 py-5 rounded-md">
            <p className="text-4xl pr-3 lg:pr-0 font-bold">47%</p>
            <div className="lg:ml-3 xl:ml-4">
              <p className="text-sm">
                of them harness AI tools in the form of digital{" "}
                <span className=" text-md italic font-bold mx-1">
                  personal assistants.
                </span>{" "}
              </p>
              <p className="text-xs italic pt-1">
                <b>Source:</b> https://connect.comptia.org
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-5 block md:hidden right flex-1 xl:pt-24">
        <div className="  xl:ml-10 xl:rounded-3xl relative xl:w-fit ">
          <div className="mt-4 md:w-2/4 lg:w-2/4 bg-primary-dark-gray rounded-2xl order-1  md:absolute md:bottom-40 md:right-80 lg:bottom-40 lg:right-96  xl:bottom-40 xl:right-1/2">
            <div className=" flex gap-2 items-center text-white px-2 md:px-5 py-4 rounded-md">
              <p className="text-4xl font-bold">561%</p>
              <div className="lg:ml-3 xl:ml-4">
                <p className="text-sm">
                  of{" "}
                  <span className=" text-md italic font-bold mx-1">
                    Businesses
                  </span>{" "}
                  are using AI to improve and perfect business operations.
                </p>
                <p className="text-xs italic">
                  Source: BMC, a cloud computing company
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 md:w-2/4 md:bottom-14 md:right-40  lg:bottom-14 lg:right-40 lg:w-2/4 xl:w-3/5 bg-primary-dark-gray rounded-2xl md:absolute xl:bottom-5 xl:left-20">
            <div className=" flex items-center gap-2 text-white px-2 md:px-6 py-4 rounded-md">
              <p className="text-4xl font-bold">47%</p>
              <div className="xl:ml-4">
                <p className="text-sm">
                  of{" "}
                  <span className=" text-md italic font-bold mx-1">
                    Businesses
                  </span>{" "}
                  are using AI to improve and perfect business operations.
                </p>
                <p className="text-xs italic">
                  Source: BMC, a cloud computing company
                </p>
              </div>
            </div>
          </div>
          <Image
            src={Hero1}
            alt="hero"
            className=" md:w-full lg:w-full xl:w-fit  mt-4"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
