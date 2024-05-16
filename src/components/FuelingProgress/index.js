"use client";
import React, { useState, useRef, useEffect } from "react";
import "./FuelingProgress.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "@/components/svgs/LeftArrow";
import RightArrow from "@/components/svgs/RightArrow";
import Slider from "react-slick";
import Image from "next/image";
import Group from "../../assets/InnovationFinal.svg";
import Group1 from "../../assets/ResearchFinal.svg"
import Fourth from "../../assets/BrainFinal.svg"
import Second from "../../assets/BusiniessFinal.svg"

const FuelingProgress = () => {
  let sliderRef = useRef(null);
  let sliderRefClient = useRef(null);
  useEffect(() => {
    const adjustSlideHeights = () => {
      const sliderContainer = document.querySelector('.slider-container');
      const slides = sliderContainer.querySelectorAll('.slick-slide');
      let maxHeight = 0;
      slides.forEach((slide) => {
        maxHeight = Math.max(maxHeight, slide.offsetHeight);
      });

      slides.forEach((slide) => {
        slide.style.height = `${maxHeight}px`;
        slide.style.background="#fff";
        slide.style.borderRadius="25px"
        

        

      });
    };

    adjustSlideHeights(); // Adjust heights when component mounts

    // Re-adjust heights when window is resized
    window.addEventListener('resize', adjustSlideHeights);

    return () => {
      window.removeEventListener('resize', adjustSlideHeights); // Cleanup listener
    };
  }, []);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settingsWhyRean = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "5%",
    responsive: [
      {
        breakpoint: 550, // Define a breakpoint (480px) for mobile devices
        settings: {
          slidesToShow: 1.125, // Show 1 full slide and 1/8th of the second slide
          centerPadding: "4%", // Adjust padding to show an eighth of the second slide
          arrows: false, // Disable arrows if desired
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1.225, // Show 1 full slide and 1/8th of the second slide
          centerPadding: "4%", // Adjust padding to show an eighth of the second slide
          arrows: false, // Disable arrows if desired
        },
      },

      // Add more breakpoints if needed for other screen sizes
    ],
  };
  return (
    <div>
      <div className="md:flex ">
        <div className="backGroup flex-1 flex justify-center items-center py-16 md:py-0">
          <div className="px-3">
            <div className="bg-primary-blue rounded-lg text-white mx-auto text-xs py-1 px-3 w-fit h-fit font-semibold  tracking-wider">
              What we do
            </div>
            <h2 className="mt-4 text-3xl md:text-3xl xl:text-5xl font-extrabold text-center  tracking-wider">
              Fueling Progress,
            </h2>
            <h2 className="mt-2 text-3xl md:text-3xl xl:text-5xl font-extrabold text-center  tracking-wider">
              Shaping Tomorrow
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-xl text-gray-600 text-center">
              Skip stale research! Raen AI is your Research lab on rocket fuel.
              Get fresh, fast answers from our tech-loving explorers. We build
              solutions that work, not just prototypes.
            </p>
          </div>
        </div>
        <div className=" md:pl-3 lg:pl-0 ">
          <div className="background  md:w-[50vw]  lg:w-[50vw] xl:w-[40vw] lg:pl-10 py-10 md:py-16 lg:py-20  md:rounded-3xl">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              className="slider-container"
              {...settingsWhyRean}
            >
              <div key={1} className=" pr-3  md:pr-5 lg:pr-8 xl:pr-10 card-container  ">
                <div className=" p-4 md:p-4 rounded-2xl ">
                  <p className="text-sm font-bold">1/4</p>
                  <div className="mt-4 lg:mt-10 mb-3 lg:mb-3">
                    <Image src={Group} alt="icon" width={35} />
                  </div>

                  <div className="flex items-center">
                    <h2 className="text-2xl xl:w-2/3 font-semibold ">
                      Unveiling Open-Source Potential
                    </h2>
                  </div>
                  <p className="mt-2  text-gray-500">
                    Open-source is more than just code. It's a collaborative
                    engine driving innovation through shared knowledge. Dive
                    into this flexible ecosystem and adapt solutions to your
                    needs, unlocking a world of possibilities fueled by
                    community and ingenuity.
                  </p>
                </div>
              </div>
              <div key={2} className="pr-3 md:pr-5 lg:pr-5 card-container ">
                <div className=" p-4  rounded-2xl ">
                  <p className="text-sm font-bold">2/4</p>
                  <div className="mt-4 lg:mt-10 mb-3 lg:mb-3">
                    <Image src={Second} alt="icon" width={35} />
                  </div>

                  <div className="flex items-center">
                    <h2 className="text-2xl xl:w-2/3 font-semibold ">
                      Partner for Tomorrow's Edge
                    </h2>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Forge a future-proof path with Raen AI. Gain access to
                    cutting-edge insights and expert guidance from our dedicated
                    research lab. Together, let's shape the future of innovation
                    through collaborative problem-solving.
                  </p>
                </div>
              </div>
              <div key={3} className=" pr-3 md:pr-5 lg:pr-5 card-container">
                <div className=" p-4 rounded-2xl ">
                  <p className="text-sm font-bold">3/4</p>
                  <div className="mt-4 lg:mt-10 mb-3 lg:mb-3">
                    <Image src={Group1} alt="icon" width={35} />
                  </div>

                  <div className="flex items-center">
                    <h2 className="text-2xl xl:w-2/3 font-semibold ">
                      From Lab Bench to Real-World Impact
                    </h2>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Our research isn't confined to theory. We bridge the gap
                    between theoretical advancements and practical application.
                    Witness the tangible impact of our research through
                    innovative prototypes that address real-world challenges.
                  </p>
                </div>
              </div>
              <div key={4} className=" pr-3 md:pr-5 lg:pr-5 card-container">
                <div className=" p-4   ">
                  <p className="text-sm font-bold">4/4</p>
                  <div className="mt-4 lg:mt-10 mb-3 lg:mb-3">
                    <Image src={Fourth} alt="icon" width={35} />
                  </div>

                  <div className="flex items-center">
                    <h2 className="text-2xl xl:w-2/3 font-semibold ">
                    Delving Deeper, Building Smarter
                    </h2>
                  </div>
                  <p className="mt-2 text-gray-500">
                  We stay ahead of the curve by constantly exploring and understanding emerging technologies. This deep dive into potential allows us to craft smarter, more innovative prototypes that push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </Slider>
            <div className="cli-res-slider-top-button hidden lg:flex justify-start  lg:mt-10 md:ml-10 lg:ml-12">
              <div className="mr-2 bg-primary-dark-gray  rounded-2xl flex justify-center items-center">
                <button className="button p-3" onClick={previous}>
                  <LeftArrow height={20} width={20} color={"#fff"} />
                </button>
              </div>
              <div className="bg-primary-dark-gray rounded-2xl flex justify-center items-center">
                <button className="button p-3" onClick={next}>
                  <RightArrow height={20} width={20} color={"#fff"} />
                </button>
              </div>
            </div>
          </div>
          <div className="cli-res-slider-bot-button flex lg:hidden justify-center mt-4  lg:mt-10 md:ml-10 lg:ml-10">
            <div className="mr-2 bg-primary-dark-gray  rounded-2xl flex justify-center items-center">
              <button className="button p-3" onClick={previous}>
                <LeftArrow height={20} width={20} color={"#fff"} />
              </button>
            </div>
            <div className="bg-primary-dark-gray rounded-2xl flex justify-center items-center">
              <button className="button p-3" onClick={next}>
                <RightArrow height={20} width={20} color={"#fff"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelingProgress;
