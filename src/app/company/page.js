import React from "react";
import Vector from "../../assets/vectorHero.svg";
import Image from "next/image";
import CollectiveMission from "../../components/CollectiveMission";
import FuelingProgress from "../../components/FuelingProgress";
import WhyReainAi from "../../components/WhyReinAi";

const company = () => {
  return (
    <div className="pt-5">
      <div className=" hero px-6 md:px-4 lg:px-12 pt-24 md:pt-36 lg:pt-30 ">
        <div className="flex justify-center">
        <div className="  lg:pt-18 w-full  flex justify-center">
          
          <div className="relative font-extrabold  text-3xl md:text-5xl lg:text-6xl 2xl:text-6xl lg:font-semibold md:pt-10 lg:pt-20 tracking-wider ">
          <Image src={Vector} className=" absolute left-[-7%] top-[0%] md:left-[-12%] md:top-[1%] lg:left-[-10%] lg:top-[10%] w-[35px] md:w-[70px]" alt="img"/>
          <Image src={Vector} className=" absolute left-[2%] top-[20%] md:left-[-2%] md:top-[25%] lg:left-[-2%] lg:top-[30%] w-[20px] md:w-[32px] lg:w-[40px]" alt="img"/>
          <Image src={Vector} className=" absolute right-[-7%] top-[0%] md:right-[-12%] md:top-[1%] lg:right-[-10%] lg:top-[10%] w-[35px] md:w-[70px]" alt="img"/>
          <Image src={Vector} className=" absolute right-[2%] top-[20%]  md:right-[-2%] md:top-[25%] lg:right-[-2%] lg:top-[30%] w-[20px] md:w-[35px]  lg:w-[40px]" alt="img"/>
            <p className="text-center">Think of us as your</p>
            <p className="mt-1 md:mt-2 lg:mt-2">friendly neighborhood</p>
            <p className="text-center mt-1 md:mt-4 lg:mt-4">
              AI{" "}
              <span className=" company-wizard text-white px-3 rounded-2xl py-1 md:px-3 lg:px-3 md:py-1 md:rounded-2xl lg:py-1 lg:rounded-2xl tracking-wider">
                w<span className=" font-bold">i</span>zards.
              </span>
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className="px-6 md:px-4 lg:px-12 pt-10 md:pt-10 lg:pt-16 ">
      <CollectiveMission/>
      </div>
      <div className=" md:px-4 lg:px-12 pt-10 md:pt-10 lg:pt-16 mb-10 xl:mb-14 ">
           <FuelingProgress/>
      </div>
      <WhyReainAi/>
     
    </div>
  );
};

export default company;
