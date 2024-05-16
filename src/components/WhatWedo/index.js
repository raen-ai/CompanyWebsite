import React from "react";
import "./whatWeDo.css";
import Image from "next/image";
import icon1 from "../../Icons/Box.svg"

const WhatWeDo = () => {
  return (
    <div>
      <div className="xl:flex">
        <div className="leftWhatWeDo flex-1">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto xl:px-6">
            <div className="flex justify-center">
              <p className="text-sm font-medium text-white w-28   mb-2 bg-blue-800 text-center rounded-md">
                Who we are
              </p>
            </div>

            <h2 className="xl:text-3xl  leading-snug  ">
              Skip stale research! Raen AI is your{" "}
              <span className=" italic font-bold">Research lab</span> on rocket
              fuel. Get fresh, fast answers from our tech-loving explorers. We
              build solutions that work, not just prototypes.
            </h2>
            <a
              href="#"
              className="inline-block bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="rightWhatWeDo flex-1">
          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                 <Image src={icon1} />
                </div>
                <p className="mt-4 text-2xl font-bold">
                  Delving Deeper, Building Smarter
                </p>
                <p className="mt-2 text-gray-500">
                  We delve into the emerging technologies, understanding their
                  full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
