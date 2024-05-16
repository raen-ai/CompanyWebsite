import React from "react";
import "./mission.scss";
import Image from "next/image";
import Mission from "../../assets/LogoGrid.png";

const CollectiveMission = () => {
  return (
    <div className="collectBackground  rounded-3xl">
      <div className="cli-repo-collect-main lg:flex px-4 py-8 md:p-10 lg:p-10">
        <div className="cli-repo-collect-main-img-div flex justify-center w-[100%] lg:w-[40%] mb-5 lg:mb-0">
          <Image src={Mission} alt="mission" className="cli-repo-collect-main-img w-[60%] md:w-[50%] xxl:w-[70%]  2xl:w-[60%] h-[100%]" />
        </div>
        <div className="cli-repo-collect-main-text-div flex flex-col justify-center w-[100%] lg:w-[60%]  items-center text-white">
          <div className="bg-primary-blue rounded-lg text-white w-fit mx-auto text-xs py-1 px-3 h-fit font-semibold  tracking-wider">
            Collective Mission
          </div>
          <div className="cli-repo-collect-main-text-div-des text-white   text-center md:text-center   md:text-3xl xl:text-3xl xxl:text-3xl 2xl:text-4xl px-2 md:px-[4.90rem] lg:px-14 xxl:px-[5rem] 2xl:px-24 tracking-wider md:leading-10 pt-3 md:pt-4 lg:pt-3 xxl:leading-normal">
            We're not just playing with robots all day (although that's pretty
            cool too). We take the{" "}
            <span className=" italic font-semibold">latest AI research</span>{" "}
            and turn it into real-world solutions that make a difference. Think
            of us as your AI crew, on a mission to make businesses thrive and
            the future brighter.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectiveMission;
