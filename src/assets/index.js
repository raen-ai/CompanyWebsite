import React from "react";
import "./mission.scss";
import Image from "next/image";
import Mission from "../../assets/LogoGrid.png";

const CollectiveMission = () => {
  return (
    <div className="collectBackground  rounded-3xl">
      <div className=" lg:flex py-8 md:py-10 lg:py-10">
        <div className="flex-1 flex justify-center">
          <Image src={Mission} alt="mission" height={440} className="w-1/2 " />
        </div>
        <div className="flex-1 flex flex-col justify-center  items-center text-white pt-5 md:pt-8 lg:pt-10 xl:pr-36">
          <div className="bg-primary-blue rounded-lg text-white w-fit mx-auto text-xs py-1 px-3 h-fit font-semibold  tracking-wider">
            Collective Mission
          </div>
          <div className="text-white   text-center md:text-center px-4 md:px-20 lg:px-10 xl:px-20 xxl:px-20 2xl:px-4  2xl:w-2/4  md:text-2xl xl:text-3xl  tracking-wider md:leading-12 pt-3 md:pt-4 lg:pt-3 ">
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
