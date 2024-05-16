"use client";
import Image from "next/image";
import "./solution.scss";
import React, { useState, useEffect, useRef } from "react";
import Vector from "../../assets/vectorHero.svg";
import VectorStart from "../../assets/Vector.png";
import VectorStart1 from "../../assets/path344.svg";
import HeroSolution from "../../assets/SolutionImage.png";
import HeroSolutionmd from "../../assets/SolutionImagemd.png";
import HeroSolutionsm from "../../assets/SolutionImagesm.png";
import Group1 from "@/components/svgs/Group1";
import Group2 from "@/components/svgs/Group2";
import Group3 from "@/components/svgs/Group3";
import Group4 from "@/components/svgs/Group4";
import Group5 from "@/components/svgs/Group5";
import Idea from "../../assets/Idea.svg";
import benefits_web_p from "../../assets/Benifits_web_p.svg";
import benefits_web_g from "../../assets/Benifits_web_g.svg";
import benefits_web_o from "../../assets/Benifits_web_o.svg";
import Target from "../../assets/Target.svg";
import Thunder from "../../assets/Thunder.svg";
import FillStart from "@/components/svgs/FillStart";
import MultiStartBg from "@/components/svgs/MultiStartBg";
import BenefitsWebP from "@/components/svgs/BenefitsWebP";

import benefits_web_p1 from "../../assets/benefits_web_p.svg";
import benefits_tab_p1 from "../../assets/benefits_tab_p.svg";
import benefits_mob_p1 from "../../assets/benefits_mob_p.svg";

import benefits_web_g1 from "../../assets/benefits_web_g.svg";
import benefits_tab_g1 from "../../assets/benefits_tab_g.svg";
import benefits_mob_g1 from "../../assets/benefits_mob_g.svg";

import benefits_web_o1 from "../../assets/benefits_web_o.svg";
import benefits_tab_o1 from "../../assets/benefits_tab_o.svg";
import benefits_mob_o1 from "../../assets/benefits_mob_o.svg";

const solutions = () => {
  const canvasRef = useRef(null);
  const menuRef = useRef(null);
  const [counter, setCounter] = useState("1");

  const handleClickSolution = (e) => {
    const tabs = document.querySelectorAll(".tabMenu");
    // if(tabs?.length>0){

    // tabs.map(tab=>{
    //   if(tab.value===counter){
    //     console.log("hello");
    //   }
    // })
    // }
    let beforePoint = e.target.value;
    let afterPoint;

    for (let index = 0; index < tabs.length; index++) {
      if (tabs[index].value === counter) {
        afterPoint = tabs[index].value;

        if (Math.abs(afterPoint - beforePoint) === 1) {
          if (afterPoint - beforePoint < 0) {
            tabs[index].style.animationName = "solutionAnimetion1";
            e.target.style.animationName = "solutionAnimetion2";
          } else {
            tabs[index].style.animationName = "solutionAnimetion2";
            e.target.style.animationName = "solutionAnimetion1";
          }

          tabs[index].style.animationDuration = "0.6s";
          e.target.style.animationDuration = "0.6s";
          setTimeout(() => {
            e.target.style.animationName = "";
            tabs[index].style.animationName = "";
            setCounter(e.target.value);
          }, 320);
        }
        if (Math.abs(afterPoint - beforePoint) === 2) {
          if (afterPoint - beforePoint < 0) {
            tabs[index].style.animationName = "solutionAnimetion3";
            tabs[1].style.animationName = "solutionAnimetion5";
            e.target.style.animationName = "solutionAnimetion4";
          } else {
            tabs[index].style.animationName = "solutionAnimetion4";
            tabs[1].style.animationName = "solutionAnimetion6";
            e.target.style.animationName = "solutionAnimetion3";
          }

          tabs[index].style.animationDuration = "0.49s";
          tabs[1].style.animationDuration = "0.4s";
          e.target.style.animationDuration = "0.49s";
          setTimeout(() => {
            e.target.style.animationName = "";
            tabs[1].style.animationName = "";
            tabs[index].style.animationName = "";
            setCounter(e.target.value);
          }, 340);
        }
      }
    }
  };

  const handleMobileClickSolution = (e) => {
    menuRef.current.scrollLeft = e.target.offsetLeft;

    setCounter(e.target.value);
  };

  useEffect(() => {
    // const tabs = document.querySelectorAll(".tabMenu");
    // console.log(tabs);
    // tabs.forEach((tab, index) => {
    //   tab.addEventListener("click", (e) => {
    //     var mask = document.querySelector(".textMask");
    //     tabs.forEach((tab) => {
    //       tab.classList.remove("active");
    //     });
    //     tab.classList.add("active");
    //     mask.style.width = e.target.offsetWidth + "px";
    //     mask.style.left = e.target.offsetLeft + "px";
    //   });
    // });
  }, []);
  return (
    <>
      <div className="px-6 hero md:px-4 lg:px-12 pt-24 md:pt-36 lg:pt-30 pb-8 md:pb-8 lg:pb-10">
        <div className="bg-primary-blue rounded-lg text-white text-xs py-1 px-3 w-fit md:self-center font-semibold my-3">
          Solutions
        </div>
        <div className=" xl:flex justify-between">
          <div className="w-full xl:w-[70%]   relative">
            <div className="hidden md:block font-semibold text-3xl md:text-5xl lg:text-5xl xxl:text-6xl 2xl:text-7xl lg:font-semibold">
              <p className="relative  leading-snug lg:mt-2 md:leading-snug  xl:leading-snug w-fit">
                AI Solutions for Every Business
                <Image
                  src={Vector}
                  className="cli-respo-sol-top-hero-st1 absolute hidden md:block bottom-[90%] right-[-12%] md:bottom-[90%] md:right-[-18%] lg:bottom-[90%] lg:right-[-12%] h-[60px] w-[60px]"
                  alt="img"
                />
                <Image
                  src={Vector}
                  className="cli-respo-sol-top-hero-st2 absolute hidden md:block bottom-[64%] right-[-5%] md:bottom-[64%] md:right-[-9%] lg:bottom-[64%] lg:right-[-5%] h-[30px] w-[30px]"
                  alt="img"
                />
              </p>
              <p className="w-11/12 leading-snug lg:mt-2 lg:w-3/4 xl:w-4/5 md:leading-snug  xl:leading-snug">
                Adventure. Let`s Craft Yours!
              </p>
            </div>
            <div className="block md:hidden font-semibold text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl lg:font-semibold">
              <p className=" leading-snug lg:mt-2 md:leading-snug  xl:leading-snug">
                AI Solutions for Every Business Adventure. Let`s Craft Yours!
              </p>
            </div>
          </div>
          <div className="w-full md:w-[70%] xl:w-[30%] mt-3 md:mt-4 lg:mt-6 xxl:mt-8 2xl:mt-8">
            <div>
              <div className="text-[#666666] my-3 md:my-0 md:mb-3 xxl:pr-16 2xl:pr-24">
                No matter your business size or field, we craft custom AI
                solutions that unlock efficiency, innovation, and growth.
                Explore the possibilities and get ready to streamline, automate,
                and dominate!
              </div>
              <div className="font-semibold mt-3 md:mt-5">
                Keep scrolling to explore!
              </div>
            </div>
          </div>
        </div>
        <div className="cli-respo-sol-img-hero w-full h-[20vh] md:h-[24vh] lg:h-[40vh] xxl:h-[40vh] 2xl:h-[40vh]  rounded-[3.5rem] md:rounded-[3rem] my-5 md:my-8 lg:my-10">
          <Image
            src={HeroSolution}
            className="hidden lg:block w-full h-full rounded-[3.5rem]"
            alt="img"
          />
          <Image
            src={HeroSolutionmd}
            className="hidden md:block lg:hidden w-full h-full rounded-[2rem]"
            alt="img"
          />
          <Image
            src={HeroSolutionsm}
            className="block md:hidden w-full h-full rounded-[1.5rem]"
            alt="img"
          />
        </div>
      </div>
      <div className="  py-20 bg-[#191919]">
        {/* <div className=" solutionMenu flex gap-x-10 overflow-scroll ">
          <button
            value={1}
            className={` py-3 px-3 md:px-6 text-nowrap text-base ${
              counter === "1" ? "bg-white" : "text-white"
            }  rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Ai Staff Augmentation
          </button>
          <button
            value={2}
            className={` py-3 px-3 md:px-6 text-nowrap text-base ${
              counter === "2" ? "bg-white" : "text-white"
            } rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Consultation
          </button>
          <button
            value={3}
            className={` py-3 px-3 md:px-6 text-nowrap text-base ${
              counter === "3" ? "bg-white" : "text-white"
            } rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Ai Project
          </button>
        </div> */}
        {/* <div className=" solutionMenu relative flex gap-x-10 overflow-scroll text-white">
          <button
            value={1}
            className={`tabMenu active py-3 px-3 md:px-6 text-nowrap text-base 
             
              
              // counter === "1" ? "bg-white" : "text-white"} 
               rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Ai Staff Augmentation
          </button>
          <button
            value={2}
            className={`tabMenu py-3 px-3 md:px-6 text-nowrap text-base  
              // counter === "2" ? "bg-white" : "text-white"
              rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Consultation
          </button>
          <button
            value={3}
            className={`tabMenu py-3 px-3 md:px-6 text-nowrap text-base  
              // counter === "3" ? "bg-white" : "text-white"
             rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Ai Project
          </button>
          <div className="textMask absolute top-[0%] left-[0%] w-[197px] h-[48px] bg-white transition-all rounded-2xl"></div>
        </div> */}

        <div className="hidden pl-6 md:pl-4 lg:pl-12 md:block solutionMenu relative flex gap-x-10 overflow-scroll text-black">
          <button
            value={1}
            className={`tabMenu   py-3 px-3 md:px-6 text-nowrap text-base 
             
              
              ${counter === "1" ? "bg-white" : "text-white"} 
               rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            AI Staff Augmentation
          </button>
          <button
            value={2}
            className={`tabMenu py-3 px-3 md:px-6 text-nowrap text-base  
              ${counter === "2" ? "bg-white" : "text-white"}
              rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            Consultation
          </button>
          <button
            value={3}
            className={`tabMenu py-3 px-3 md:px-6 text-nowrap text-base  
              ${counter === "3" ? "bg-white" : "text-white"}
             rounded-2xl font-semibold`}
            onClick={handleClickSolution}
          >
            AI Project
          </button>
          {/* <div className="textMask absolute top-[0%] left-[0%] w-[197px] h-[48px] bg-white transition-all rounded-2xl"></div> */}
        </div>
        <div
          ref={menuRef}
          className="pl-6 md:pl-4 lg:pl-12 solutionMenu md:hidden relative flex gap-x-5 overflow-scroll text-black"
        >
          <button
            value={1}
            className={`    py-3 px-3 md:px-6 text-nowrap text-base 
             
              
              ${counter === "1" ? "bg-white" : "text-white"} 
               rounded-2xl font-semibold`}
            onClick={handleMobileClickSolution}
          >
            AI Staff Augmentation
          </button>
          <button
            value={2}
            className={`  py-3 px-3 md:px-6 text-nowrap text-base  
              ${counter === "2" ? "bg-white" : "text-white"}
              rounded-2xl font-semibold`}
            onClick={handleMobileClickSolution}
          >
            Consultation
          </button>
          <button
            value={3}
            className={`tabMenu py-3 px-3 md:px-6 text-nowrap text-base  
              ${counter === "3" ? "bg-white" : "text-white"}
             rounded-2xl font-semibold`}
            onClick={handleMobileClickSolution}
          >
            AI Project
          </button>
          {/* <div className="textMask absolute top-[0%] left-[0%] w-[197px] h-[48px] bg-white transition-all rounded-2xl"></div> */}
        </div>

        {counter === "1" && (
          <div className="cli-respo-solu-over-box py-6 px-6 md:px-4 lg:px-12 flex flex-col md:flex-row gap-x-0 md:gap-x-3 gap-y-3 md:gap-y-0 ">
            <div className="cli-respo-solu-over-box-left w-full md:w-[50%] lg:w-[40%] flex flex-col gap-y-3 ">
              <div className="text-white border border-2 border-[#4C4C4C] w-full rounded-3xl px-6 py-6 md:px-10 md:py-12 bg-[#262626] flex justify-center items-center">
                <div>
                  <h2 className="md:text-2xl lg:text-3xl font-semibold mb-2">
                    Need an extra brain?
                  </h2>
                  <span className="">
                    We provide on-site Al experts tailored to your project, from
                    basic support to full project takeover. Choose your level of
                    involvement and let our Raen Al team handle the rest!
                  </span>
                </div>
              </div>
              <div className="text-white border border-2 border-[#4C4C4C] w-full rounded-3xl px-1 md:px-2 lg:px-6 py-1 md:py-5 lg:py-1 bg-[#262626] flex justify-center items-center">
                <Image src={Thunder} alt="thunder" />
                <div>
                  <h2 className="md:text-2xl lg:text-2xl font-semibold">
                    Faster Project Completion
                  </h2>
                  <p className="text-xs">
                    Bridge your talent gap with pro-votted AI
                    experts.accelerating project delivery and time to results.
                  </p>
                </div>
              </div>
              {/* <div> */}
              {/* <BenefitsWebP /> */}
              {/* <Image src={benefits_web_p} className="w-full h-full" /> */}
              {/* </div> */}
              <div className="hidden md:block text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl bg-[#262626] pb-7 md:pb-0 lg:pb-7">
                <div className="px-6 pt-6">
                  <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                    <div>Benefits</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-24%] left-[124%] ">
                        <FillStart width={16} height={14} color={"#ffffff"} />
                      </div>
                      <div className="absolute top-[8%] right-[-35%] ">
                        <FillStart width={10} height={12} color={"#ffffff"} />
                      </div>
                    </div>
                  </h2>
                </div>
                <Image
                  src={benefits_web_p1}
                  className="hidden md:hidden lg:block w-[100%] h-[103%] web-p"
                  alt="img"
                />
                <Image
                  src={benefits_tab_p1}
                  className="cf-reso-solution-purple-overbox hidden md:block lg:hidden w-full h-[138%] tab-p"
                  alt="img"
                />
              </div>
              <div className="cli-respo-solu-over-box-enquire bg-primary-blue text-white text-center p-6 text-lg font-semibold rounded-2xl justify-center hidden md:flex lg:hidden items-center text-nowrap">
                Enquire Service
              </div>
            </div>
            <div className="cli-respo-solu-over-box-right w-full md:w-[50%] lg:w-[60%] flex flex-col gap-y-3">
              <div className="text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl py-6 md:py-10 lg:py-6 p-6 md:p-8 lg:p-10 bg-[#262626]">
                <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                  Here`s how it works
                </h2>
                <div className="line1Des flex justify-start my-3">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#9E00FF"} />
                  </div>
                  <div className={`   `}>
                    <span className="text-white font-semibold text-base">
                      Tailored Resources:
                    </span>{" "}
                    We match you with Al professionals who possess the specific
                    skill sets your project demands from junior to mid-level
                    expertise.
                  </div>
                </div>
                <div className="line1Des flex justify-start mb-3">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#9E00FF"} />
                  </div>
                  <div className={` `}>
                    <span className="text-white font-semibold text-base">
                      Seamless Integration
                    </span>{" "}
                    Our on-site staff becomes an extension of your team,
                    collaborating effectively and receiving ongoing support from
                    the Raen Al team.
                  </div>
                </div>
                <div className="line1Des flex justify-start mb-1 md:mb-1 lg:mb-8">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#9E00FF"} />
                  </div>
                  <div className={` `}>
                    <span className="text-white font-semibold text-base">
                      Flexible Support Levels:{" "}
                    </span>{" "}
                    Raen Al offers flexible support, no matter your expertise.
                    Get regular check-ins and Al news for a gentle start,
                    brainstorm strategies with experts for a mid-tier boost.
                  </div>
                </div>
              </div>
              <div className="block md:hidden text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl bg-[#262626]">
                <div className="px-6 pt-6 pb-6">
                  <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                    <div>Benefits</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-24%] left-[124%] ">
                        <FillStart width={16} height={14} color={"#9E00FF"} />
                      </div>
                      <div className="absolute top-[8%] right-[-35%] ">
                        <FillStart width={10} height={12} color={"#9E00FF"} />
                      </div>
                    </div>
                  </h2>
                </div>
                <Image
                  src={benefits_mob_p1}
                  className="block md:hidden lg:hidden w-full h-full"
                  alt="img"
                />
              </div>
              <div className="cli-respo-solu-over-box-right-case-sen flex flex-col lg:flex-row gap-x-0 lg:gap-x-3 gap-y-3 lg:gap-y-0 ">
                <div className="cli-respo-solu-over-box-right-case-sen-rel-pad relative overflow-hidden text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl p-6 lg:p-10 bg-[#262626]">
                  <div className="bgMultiVactor block   lg:block absolute top-[-3%] right-[-40%] lg:top-[-2%] lg:right-[-5%]">
                    <MultiStartBg color={"#333333"} />
                  </div>
                  <h2 className="cli-respo-solu-over-box-right-case-sen-h2 md:text-2xl lg:text-3xl font-semibold flex justify-start md:justify-center lg:justify-start">
                    <div>Case Scenarios</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-65%] left-[124%] ">
                        <FillStart width={26} height={22} color={"#9E00FF"} />
                      </div>
                      <div className="absolute top-[-18%] right-[-77%] ">
                        <FillStart width={20} height={16} color={"#9E00FF"} />
                      </div>
                    </div>
                  </h2>
                  <div className="cli-res-right-bot relative flex flex-col lg:flex-row gap-x-3 lg:gap-x-3 gap-y-3 lg:gap-y-0 text-center my-3">
                    <div className="bg-[#333333] w-full lg:w-[25%] py-4 md:py-4 lg:py-6  lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1  border-[#4c4c4c] text-sm md:text-base">
                      Scaling Up for a Product Launch
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1  border-[#4c4c4c]  text-sm md:text-base">
                      Bridging the Skills Gap in a Large Enterprise
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1 border-[#4c4c4c]  text-sm md:text-base">
                      Accelerating Research and Development
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1 border-[#4c4c4c]  text-sm md:text-base">
                      Maternity Leave & Project Continuity
                    </div>
                  </div>
                </div>
                <div className="caseScenario bg-primary-blue text-white text-center p-6 text-lg font-semibold rounded-2xl justify-center lg:rotate-180 md:hidden lg:flex items-center text-nowrap">
                  Enquire Service
                </div>
              </div>
            </div>
          </div>
        )}
        {counter === "2" && (
          <div className="cli-respo-solu-over-box py-6 px-6 md:px-4 lg:px-12 flex flex-col md:flex-row gap-x-0 md:gap-x-3 gap-y-3 md:gap-y-0 ">
            <div className="cli-respo-solu-over-box-left w-full md:w-[50%] lg:w-[40%] flex flex-col gap-y-3 ">
              <div className="text-white border border-2 border-[#4C4C4C] w-full rounded-3xl px-6 py-6 md:px-10 md:py-12 bg-[#262626] flex justify-center items-center">
                <div>
                  <h2 className="md:text-2xl lg:text-3xl font-semibold mb-2">
                    The clarity you need.
                  </h2>
                  <p className="">
                    Our consulting offers dedicated time and expertise, from
                    focused research dives to year-long partnerships. We tailor
                    solutions to your specific goals, whether it's exploring
                    Al's potential or validating your next big idea.
                  </p>
                </div>
              </div>
              <div className="text-white border border-2 border-[#4C4C4C] w-full rounded-3xl px-1 md:px-2 lg:px-6 py-1 md:py-5 lg:py-1 bg-[#262626] flex justify-center items-center">
                <Image src={Idea} alt="idea" />
                <div>
                  <h2 className="md:text-2xl lg:text-2xl font-semibold">
                    Idea Validation & Reduced Risk
                  </h2>
                  <p className="text-xs">
                    Validate Al ideas and ensure project feasibility before
                    significant investments, minimizing risk and maxmizing retur
                    on evestmant
                  </p>
                </div>
              </div>
              {/* <div>
                <Image src={benefits_web_g} className="w-full h-full" />
              </div> */}
              <div className="hidden md:block text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl pb- bg-[#262626]">
                <div className="px-6 pt-6">
                  <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                    <div>Benefits</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-24%] left-[124%] ">
                        <FillStart width={16} height={14} color={"#ffffff"} />
                      </div>
                      <div className="absolute top-[8%] right-[-35%] ">
                        <FillStart width={10} height={12} color={"#ffffff"} />
                      </div>
                    </div>
                  </h2>
                </div>
                <Image
                  src={benefits_web_g1}
                  className="hidden md:hidden lg:block w-full h-[100%] xl:h-[96%] xxl:h-[80%] 2xl:h-[78%] web-g"
                  alt="img"
                />
                <Image
                  src={benefits_tab_g1}
                  className="hidden md:block lg:hidden w-full h-[149%] tab-g"
                  alt="img"
                />
              </div>
              <div className="cli-respo-solu-over-box-enquire bg-primary-blue text-white text-center p-6 text-lg font-semibold rounded-2xl justify-center hidden md:flex lg:hidden items-center text-nowrap">
                Enquire Service
              </div>
            </div>
            <div className="cli-respo-solu-over-box-right w-full md:w-[50%] lg:w-[60%] flex flex-col gap-y-3">
              <div className="text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl py-6 md:py-10 lg:py-6 p-6 md:p-8 lg:p-10 bg-[#262626]">
                <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                  Here`s how it works
                </h2>
                <div className="line1Des flex justify-start my-3">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#24D914"} />
                  </div>
                  <div className={`   `}>
                    <span className="text-white font-semibold text-base">
                      Collaboration is Key:
                    </span>{" "}
                    We start by scheduling in-depth consultations to understand
                    your company's unique needs, challenges, and overall
                    business goals. This collaborative approach ensures our
                    consulting services are directly relevant and address your
                    specific pain points.
                  </div>
                </div>
                <div className="line1Des flex justify-start mb-3">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#24D914"} />
                  </div>
                  <div className={` `}>
                    <span className="text-white font-semibold text-base">
                      Tailored Solutions:
                    </span>{" "}
                    Based on our discussions and your requirements, we design a
                    custom plan that could involve focused research, detailed
                    POC development, or a combination of both. In-depth POC
                    development could encompass building a prototype to test the
                    feasibility of your Al idea or creating a minimal viable
                    product (MVP) to gauge user response.
                  </div>
                </div>
                <div className="line1Des flex justify-start mb-1 md:mb-1 lg:mb-8">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#24D914"} />
                  </div>
                  <div className={` `}>
                    <span className="text-white font-semibold text-base">
                      Transparency Throughout:
                    </span>{" "}
                    Expect clear communication and a defined project timeline
                    with deliverables.
                  </div>
                </div>
              </div>
              <div className="block md:hidden text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl bg-[#262626]">
                <div className="px-6 pb-6 pt-6">
                  <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                    <div>Benefits</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-24%] left-[124%] ">
                        <FillStart width={16} height={14} color={"#24D914"} />
                      </div>
                      <div className="absolute top-[8%] right-[-35%] ">
                        <FillStart width={10} height={12} color={"#24D914"} />
                      </div>
                    </div>
                  </h2>
                </div>
                <Image
                  src={benefits_mob_g1}
                  className="block md:hidden lg:hidden w-full h-[100%]"
                  alt="img"
                />
              </div>
              <div className="cli-respo-solu-over-box-right-case-sen flex flex-col lg:flex-row gap-x-0 lg:gap-x-3 gap-y-3 lg:gap-y-0 ">
                <div className="cli-respo-solu-over-box-right-case-sen-rel-pad relative overflow-hidden text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl p-6 lg:p-10 bg-[#262626]">
                  <div className="bgMultiVactor block   lg:block absolute top-[-3%] right-[-40%] lg:top-[-2%] lg:right-[-5%]">
                    <MultiStartBg color={"#333333"} />
                  </div>
                  <h2 className="cli-respo-solu-over-box-right-case-sen-h2 md:text-2xl lg:text-3xl font-semibold flex justify-start md:justify-center lg:justify-start">
                    <div>Case Scenarios</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-65%] left-[124%] ">
                        <FillStart width={26} height={22} color={"#24D914"} />
                      </div>
                      <div className="absolute top-[-18%] right-[-77%] ">
                        <FillStart width={20} height={16} color={"#24D914"} />
                      </div>
                    </div>
                  </h2>
                  <div className="cli-res-right-bot relative flex flex-col lg:flex-row gap-x-3 lg:gap-x-3 gap-y-3 lg:gap-y-0 text-center my-3">
                    <div className="bg-[#333333] w-full lg:w-[25%] py-4 md:py-4 lg:py-6  lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1  border-[#4c4c4c] text-sm md:text-base">
                      Manufacturing: Predictive maintenance
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1  border-[#4c4c4c]  text-sm md:text-base">
                      Retail: Personalized recommendations
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1 border-[#4c4c4c]  text-sm md:text-base">
                      Startup: Validate Al product idea
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1 border-[#4c4c4c]  text-sm md:text-base">
                      Healthcare: Al for better patient outcomes
                    </div>
                  </div>
                </div>
                <div className="caseScenario bg-primary-blue text-white text-center p-6 text-lg font-semibold rounded-2xl justify-center lg:rotate-180 md:hidden lg:flex items-center text-nowrap">
                  Enquire Service
                </div>
              </div>
            </div>
          </div>
        )}

        {counter === "3" && (
          <div className="cli-respo-solu-over-box py-6 px-6 md:px-4 lg:px-12 flex flex-col md:flex-row gap-x-0 md:gap-x-3 gap-y-3 md:gap-y-0 ">
            <div className="cli-respo-solu-over-box-left w-full md:w-[50%] lg:w-[40%] flex flex-col gap-y-3 ">
              <div className="text-white border border-2 border-[#4C4C4C] w-full rounded-3xl px-6 py-6 md:px-10 md:py-12 bg-[#262626] flex justify-center items-center">
                <div>
                  <h2 className="md:text-2xl lg:text-3xl font-semibold mb-2">
                    Hand us your Al challenge
                  </h2>
                  <p className="">
                    We'll handle everything - from concept to implementation.
                    Leverage our expertise in solving specific business problems
                    with Al through Proof-of-Concepts (POCs) and full-scale
                    deployments.
                  </p>
                </div>
              </div>
              <div className="text-white border border-2 border-[#4C4C4C] w-full rounded-3xl px-1 md:px-2 lg:px-6 py-1 md:py-5 lg:py-1 bg-[#262626] flex justify-center items-center">
                <Image src={Target} alt="target" />
                <div>
                  <h2 className="md:text-2xl lg:text-2xl font-semibold">
                    Seamless Execution & Expertise
                  </h2>
                  <p className="text-xs">
                    Benefit from our experienced project managers who handle all
                    aspects of your Al project, ensuring smooth execution and
                    leveraging industry expertise.
                  </p>
                </div>
              </div>
              {/* <div>
                <Image src={benefits_web_o} className="w-full h-full" />
              </div> */}
              <div className="hidden md:block text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl bg-[#262626]">
                <div className="px-6 pt-6">
                  <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                    <div>Benefits</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-24%] left-[124%] ">
                        <FillStart width={16} height={14} color={"#ffffff"} />
                      </div>
                      <div className="absolute top-[8%] right-[-35%] ">
                        <FillStart width={10} height={12} color={"#ffffff"} />
                      </div>
                    </div>
                  </h2>
                </div>
                <Image
                  src={benefits_web_o1}
                  className="hidden md:hidden lg:block w-full h-[100%] xl:h-[117%] xxl:h-[100%] 2xl:h-[78%] web-o"
                  alt="img"
                />
                <Image
                  src={benefits_tab_o1}
                  className="hidden md:block lg:hidden w-full h-[146%] tab-o"
                  alt="img"
                />
              </div>
              <div className="cli-respo-solu-over-box-enquire bg-primary-blue text-white text-center p-6 text-lg font-semibold rounded-2xl justify-center hidden md:flex lg:hidden items-center text-nowrap">
                Enquire Service
              </div>
            </div>
            <div className="cli-respo-solu-over-box-right w-full md:w-[50%] lg:w-[60%] flex flex-col gap-y-3">
              <div className="text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl py-6 md:py-10 lg:py-6 p-6 md:p-8 lg:p-10 bg-[#262626]">
                <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                  Here`s how it works
                </h2>
                <div className="line1Des flex justify-start my-3">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#FF6B00"} />
                  </div>
                  <div className={`   `}>
                    <span className="text-white font-semibold text-base">
                      Discovery & Planning:
                    </span>{" "}
                    We begin with a collaborative kickoff, involving in-depth
                    consultations to understand your business challenge, goals,
                    data landscape, and defining project scope, success metrics.
                    and timelines.
                  </div>
                </div>
                <div className="line1Des flex justify-start mb-3">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#FF6B00"} />
                  </div>
                  <div className={` `}>
                    <span className="text-white font-semibold text-base">
                      Solution Design & Development:
                    </span>{" "}
                    We design a tailored Al solution architecture considering
                    data requirements, algorithms, and integration needs,
                    followed by development and testing of a Proof-of- Concept
                    (POC) to validate the solution's effectiveness.
                  </div>
                </div>
                <div className="line1Des flex justify-start mb-1 md:mb-1 lg:mb-8">
                  <div className=" block mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#FF6B00"} />
                  </div>
                  <div className={` `}>
                    <span className="text-white font-semibold text-base">
                      Implementation & Deployment:
                    </span>{" "}
                    We ensure a smooth transition from development to real-world
                    use by seamlessly integrating the Al solution into your
                    existing IT infrastructure, providing user training and
                    support for successful adoption.
                  </div>
                </div>
              </div>
              {/* <div>
                <Image src={benefits_web_o} className="w-full h-full" />
              </div> */}
              <div className="block md:hidden text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl bg-[#262626]">
                <div className="px-6 pt-6 pb-6">
                  <h2 className="md:text-2xl lg:text-3xl font-semibold flex">
                    <div>Benefits</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-24%] left-[124%] ">
                        <FillStart width={16} height={14} color={"#FF6B00"} />
                      </div>
                      <div className="absolute top-[8%] right-[-35%] ">
                        <FillStart width={10} height={12} color={"#FF6B00"} />
                      </div>
                    </div>
                  </h2>
                </div>
                <Image
                  src={benefits_mob_o1}
                  className="block md:hidden lg:hidden w-full h-[146%] mob-o"
                  alt="img"
                />
              </div>
              <div className="cli-respo-solu-over-box-right-case-sen flex flex-col lg:flex-row gap-x-0 lg:gap-x-3 gap-y-3 lg:gap-y-0 ">
                <div className="cli-respo-solu-over-box-right-case-sen-rel-pad relative overflow-hidden text-white border border-2 border-[#4C4C4C] w-full h-full rounded-3xl p-6 lg:p-10 bg-[#262626]">
                  <div className="bgMultiVactor block   lg:block absolute top-[-3%] right-[-40%] lg:top-[-2%] lg:right-[-5%]">
                    <MultiStartBg color={"#333333"} />
                  </div>
                  <h2 className="cli-respo-solu-over-box-right-case-sen-h2 md:text-2xl lg:text-3xl font-semibold flex justify-start md:justify-center lg:justify-start">
                    <div>Case Scenarios</div>
                    <div className="relative flex">
                      &nbsp;&nbsp;
                      <div className="absolute top-[-65%] left-[124%] ">
                        <FillStart width={26} height={22} color={"#FF6B00"} />
                      </div>
                      <div className="absolute top-[-18%] right-[-77%] ">
                        <FillStart width={20} height={16} color={"#FF6B00"} />
                      </div>
                    </div>
                  </h2>
                  <div className="cli-res-right-bot relative flex flex-col lg:flex-row gap-x-3 lg:gap-x-3 gap-y-3 lg:gap-y-0 text-center my-3">
                    <div className="bg-[#333333] w-full lg:w-[25%] py-4 md:py-4 lg:py-6  lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1  border-[#4c4c4c] text-sm md:text-base">
                      Al-powered recommendation engine for an e- commerce
                      platform.
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1  border-[#4c4c4c]  text-sm md:text-base">
                      Chatbot for customer service automation.
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1 border-[#4c4c4c]  text-sm md:text-base">
                      Create a data- driven pricing model.
                    </div>
                    <div className="bg-[#333333] w-full lg:w-[25%]  py-4 md:py-4 lg:py-6 lg:px-2 lg:flex justify-center items-center rounded-2xl  border border-1 border-[#4c4c4c]  text-sm md:text-base">
                      Build a predictive maintenance system.
                    </div>
                  </div>
                </div>
                <div className="caseScenario bg-primary-blue text-white text-center p-6 text-lg font-semibold rounded-2xl justify-center lg:rotate-180 md:hidden lg:flex items-center text-nowrap">
                  Enquire Service
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="cli-respo-sol-bot-pb px-6 md:px-4 lg:px-12 pt-12 md:pt-10 lg:pt-30 pb-4 md:pb-8 lg:pb-16">
        <div className="w-full my-10">
          <div className="titleSection relative flex flex-col md:justify-center px-0 md:px-36 lg:px-96">
            <Image
              src={VectorStart1}
              className="cli-res-title-Section-s1 absolute top-[38%] left-[-24%] md:top-[46%] md:left-[8%] lg:top-[50%] lg:left-[26%] 2xl:top-[50%] 2xl:left-[28%]  h-[34%] w-[34%] md:h-[29%] md:w-[8%] lg:h-[20%] lg:w-[3%] xxl:h-[20%] xxl:w-[3%] 2xl:h-[20%] 2xl:w-[3%] "
              alt="img"
            />
            <Image
              src={VectorStart1}
              className="cli-res-title-Section-s2 absolute top-[0%] right-[-6%] md:top-[12%] md:right-[10%] lg:top-[10%] lg:right-[24%] 2xl:top-[10%] 2xl:right-[27%]  h-[18%] w-[18%] md:h-[20%] md:w-[6%] lg:h-[28%] lg:w-[5%] 2xl:h-[33%] xxl:h-[32%] 2xl:w-[4.5%] xxl:w-[4.5%]"
              alt="img"
            />
            <div className="bg-primary-dark-gray rounded-lg text-white text-xs py-1 px-3 w-fit self-center">
              Why Raen AI
            </div>
            <div className="md:self-center text-center text-2xl md:text-3xl 2xl:text-4xl font-semibold my-3 leading-relaxed md:leading-relaxed lg:leading-relaxed	2xl:leading-relaxed 2xl:px-64 xxl:px-32">
              Boost Your Business with Raen AI's{" "}
              <span className="p-2 bg-primary-blue rounded-2xl text-white">
                Game-Changing
              </span>{" "}
              Perks
            </div>
          </div>

          <div
            className="cli-res-box-sol Box relative w-full   bg-primary-gray cursor-pointer rounded-3xl p-6 lg:flex overflow-hidden my-3"
            // onMouseEnter={() => setGroup1(true)}
            // onMouseLeave={() => setGroup1(false)}
          >
            <div className="cli-res-box-sol-g1 absolute top-[-60%] right-[-37%] scale-75 md:scale-150 lg:scale-110 xl:scale-100 md:top-[14%] md:right-[-8%]   lg:top-[-6%] lg:right-[-14%] xl:top-[-13%] xl:right-[0%] xxl:top-[-13%] xxl:right-[1.5%] 2xl:top-[-13%] 2xl:right-[1.5%]">
              <div className="overflow-clip">
                <Group1 hover={false} />
              </div>
            </div>
            <div className="cli-res-box-sol-head relative md:w-[70%] lg:w-[30%] lg:px-10">
              <div className="text-xl md:text-3xl lg:text-3xl xxl:text-4xl font-semibold">
                Research-Driven Innovation
              </div>
            </div>
            <div className="cli-res-box-sol-des md:w-[70%] lg:w-[35%] ">
              <div
                className={`text-[#9E00FF] font-semibold text-lg flex  py-3`}
              >
                <div>Benefits</div>
                <div className="relative flex">
                  &nbsp;&nbsp;
                  <div className="absolute top-[-24%] left-[5%] ">
                    <FillStart width={16} height={14} color={"#000000"} />
                  </div>
                  <div className="absolute top-[10%] right-[-100%] ">
                    <FillStart width={10} height={12} color={"#000000"} />
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6">
                <li>
                  <span className="md:font-semibold">
                    Competitive advantage
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Gain access to innovative solutions that can give you a
                    competitive edge.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Improved efficiency and performance
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Address specific problems and enhance your business
                    operations.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Future-proof your business
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Stay ahead of the curve with Al solutions that adapt and
                    evolve with your needs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="cli-res-box-sol Box relative w-full   bg-primary-gray cursor-pointer rounded-3xl p-6 lg:flex overflow-hidden my-3"
            // onMouseEnter={() => setGroup1(true)}
            // onMouseLeave={() => setGroup1(false)}
          >
            <div className="absolute rotate-[28deg] top-[-30%] right-[-20%] scale-[0.60] md:scale-[1.8] lg:scale-125 xl:scale-125   md:top-[33%] md:right-[-2%]   lg:top-[21%] lg:right-[-2%] xl:top-[25%] xl:right-[8%] xxl:top-[27%] xxl:right-[8%] 2xl:top-[27%] 2xl:right-[8%]">
              <div className="overflow-clip">
                <Group3 hover={false} />
              </div>
            </div>
            <div className="cli-res-box-sol-head relative md:w-[70%] lg:w-[30%] lg:px-10">
              <div className="text-xl md:text-3xl lg:text-3xl xxl:text-4xl font-semibold">
                Scalable Support
              </div>
            </div>
            <div className="cli-res-box-sol-des md:w-[70%] lg:w-[35%] ">
              <div className="text-[#9E00FF] font-semibold text-lg flex  py-3">
                <div>Benefits</div>
                <div className="relative flex">
                  &nbsp;&nbsp;
                  <div className="absolute top-[-24%] left-[5%] ">
                    <FillStart width={16} height={14} color={"#000000"} />
                  </div>
                  <div className="absolute top-[10%] right-[-100%] ">
                    <FillStart width={10} height={12} color={"#000000"} />
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6">
                <li>
                  <span className="md:font-semibold">
                    Cost-effective<span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    You only pay for the resources you use, avoiding unnecessary
                    expenses.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Flexibility<span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Easily adapt the level of Al support to your current and
                    future needs.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Reduced friction<span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Avoid disruptions or delays in your Al operations due to
                    scaling limitations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="cli-res-box-sol Box relative w-full   bg-primary-gray cursor-pointer rounded-3xl p-6 lg:flex overflow-hidden my-3"
            // onMouseEnter={() => setGroup1(true)}
            // onMouseLeave={() => setGroup1(false)}
          >
            <div className="absolute rotate-[110deg] top-[-30%] right-[-20%] scale-75 md:scale-[3] lg:scale-150 xl:scale-150   md:top-[43%] md:right-[0%]   lg:top-[21%] lg:right-[-2%] xl:top-[40%] xl:right-[8%] xxl:top-[27%] xxl:right-[8%] 2xl:top-[27%] 2xl:right-[8%]">
              <div className="overflow-clip">
                <Group4 hover={false} />
              </div>
            </div>
            <div className="cli-res-box-sol-head relative md:w-[70%] lg:w-[30%] lg:px-10">
              <div className="text-xl md:text-3xl lg:text-3xl xxl:text-4xl font-semibold">
                Proof of Concept Expertise
              </div>
            </div>
            <div className="cli-res-box-sol-des md:w-[70%] lg:w-[35%] ">
              <div className="text-[#9E00FF] font-semibold text-lg flex  py-3">
                <div>Benefits</div>
                <div className="relative flex">
                  &nbsp;&nbsp;
                  <div className="absolute top-[-24%] left-[5%] ">
                    <FillStart width={16} height={14} color={"#000000"} />
                  </div>
                  <div className="absolute top-[10%] right-[-100%] ">
                    <FillStart width={10} height={12} color={"#000000"} />
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6">
                <li>
                  <span className="md:font-semibold">
                    Reduced risk<span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Minimize risk by testing the feasibility and potential value
                    of Al before full-scale implementation.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Increased confidence
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    {" "}
                    Gain a clear understanding of how Al can benefit your
                    business and make informed decisions.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Enhanced communication
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    POCs facilitate communication and collaboration between your
                    team and our Al experts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="cli-res-box-sol Box relative w-full   bg-primary-gray cursor-pointer rounded-3xl p-6 lg:flex overflow-hidden my-3"
            // onMouseEnter={() => setGroup1(true)}
            // onMouseLeave={() => setGroup1(false)}
          >
            <div className="cli-res-box-sol-g5 absolute   top-[-30%] right-[-75%] scale-90  md:scale-150 lg:scale-100 xl:scale-100 xxl:scale-125  md:top-[4%] md:right-[-35%]   lg:top-[-15%] lg:right-[-40%] xl:top-[-5%] xl:right-[-20%] xxl:top-[-14%] xxl:right-[-20%] 2xl:top-[-10%] 2xl:right-[-9%]">
              <div className="overflow-clip">
                <Group5 hover={false} />
              </div>
            </div>
            <div className="cli-res-box-sol-head relative md:w-[70%] lg:w-[30%] lg:px-10">
              <div className="text-xl md:text-3xl lg:text-3xl xxl:text-4xl font-semibold">
                Continuous Training and Development
              </div>
            </div>
            <div className="cli-res-box-sol-des md:w-[70%] lg:w-[35%] ">
              <div className="text-[#9E00FF] font-semibold text-lg flex  py-3">
                <div>Benefits</div>
                <div className="relative flex">
                  &nbsp;&nbsp;
                  <div className="absolute top-[-24%] left-[5%] ">
                    <FillStart width={16} height={14} color={"#000000"} />
                  </div>
                  <div className="absolute top-[10%] right-[-100%] ">
                    <FillStart width={10} height={12} color={"#000000"} />
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6">
                <li>
                  <span className="md:font-semibold">
                    Access to cutting-edge knowledge
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    You benefit from our team's expertise in the latest Al
                    technologies and trends.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Future-proof solutions
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    We ensure your Al solutions remain effective and adaptable
                    in the face of evolving technology.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Proactive problem-solving
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Our continuously learning team anticipates and addresses
                    potential challenges effectively.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="cli-res-box-sol Box relative w-full   bg-primary-gray cursor-pointer rounded-3xl p-6 lg:flex overflow-hidden my-3"
            // onMouseEnter={() => setGroup1(true)}
            // onMouseLeave={() => setGroup1(false)}
          >
            <div className="absolute   top-[-40%] right-[-35%] scale-50  md:scale-150 lg:scale-90 xl:scale-90 xxl:scale-90  md:top-[21%] md:right-[-4%]   lg:top-[-3%] lg:right-[-4%] xl:top-[20%] xl:right-[1.5%] xxl:top-[0%] xxl:right-[3%] 2xl:top-[0%] 2xl:right-[3.5%]">
              <div className="overflow-clip">
                <Group2 hover={false} />
              </div>
            </div>
            <div className="cli-res-box-sol-head relative md:w-[70%] lg:w-[30%] lg:px-10">
              <div className="text-xl md:text-3xl lg:text-3xl xxl:text-4xl font-semibold">
                Comprehensive Project Support
              </div>
            </div>
            <div className="cli-res-box-sol-des md:w-[70%] lg:w-[35%] ">
              {/* <Image src={benefits_web_p} className="" /> */}
              <div className="text-[#9E00FF] font-semibold text-lg flex py-3 ">
                <div>Benefits</div>
                <div className="relative flex">
                  &nbsp;&nbsp;
                  <div className="absolute top-[-24%] left-[5%] ">
                    <FillStart width={16} height={14} color={"#000000"} />
                  </div>
                  <div className="absolute top-[10%] right-[-100%] ">
                    <FillStart width={10} height={12} color={"#000000"} />
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6">
                <li>
                  <span className="md:font-semibold">
                    Reduced workload and stress
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Free yourself and your team to focus on core business
                    activities while we handle the Al project.{" "}
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Streamlined execution
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Our experienced team ensures efficient project management
                    and avoids potential roadblocks.
                  </span>
                </li>
                <li>
                  <span className="md:font-semibold">
                    Expert guidance and collaboration
                    <span className="hidden md:inline">:</span>
                  </span>{" "}
                  <span className="hidden md:inline">
                    Benefit from our expertise throughout the project, fostering
                    close collaboration and successful outcomes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default solutions;
