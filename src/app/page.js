"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/SidebarMenu";
import TrustedPartner from "@/components/TrustedPartner";
import WhatWeDo from "@/components/WhatWedo";
import { useState, useRef, useEffect } from "react";
import Cookies from "js-cookie";
import "toastr/build/toastr.min.css";
import Skillbuzz from "../partners/skillbuzz.png";
import Spotify from "../assets/spotify.png";
import Swift from "../partners/swift.png";
import Trussme from "../partners/trussme.png";
import Unipreneur from "../partners/unipreneur.png";
import Adobe from "../assets/Adobe.png";
import Image from "next/image";
import Vector from "../assets/vectorHero.svg";
import VectorStart from "../assets/Vector.png";
import VectorStart1 from "../assets/path344.svg";
import brain from "../assets/Brain.svg";
import group from "../assets/Group.svg";
import hand from "../assets/hand.svg";
import heart from "../assets/Heart.png";
import sphere from "../assets/Sphere.png";
import sphereSVG from "../assets/Sphere.svg";
import semicylinder from "../assets/Semi cylinder.png";
import typing from "../assets/typing.gif";
import robo from "../assets/robo.png";
import microPhone from "../Icons/microphone.svg";
import send from "../Icons/Send.svg";

import leftArrow from "../Icons/Left.svg";
import rightArrow from "../Icons/Right.svg";

import flasx from "../assets/flask.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Group1 from "@/components/svgs/Group1";
import Group2 from "@/components/svgs/Group2";
import Group3 from "@/components/svgs/Group3";
import Group4 from "@/components/svgs/Group4";
import Group5 from "@/components/svgs/Group5";
import LeftArrow from "@/components/svgs/LeftArrow";
import RightArrow from "@/components/svgs/RightArrow";
import RatingStart from "@/components/svgs/RatingStart";
import Star4 from "@/components/svgs/Star4";
import FillStart from "@/components/svgs/FillStart";
import MultiStartBg from "@/components/svgs/MultiStartBg";
import Heart from "@/components/svgs/Heart";
import Sphere from "@/components/svgs/Sphere";
import SemiCelinde from "@/components/svgs/SemiCelinde";

export default function Home() {
  const chatContainerRef = useRef(null);

  const [group1, setGroup1] = useState(false);
  const [group2, setGroup2] = useState(false);
  const [group3, setGroup3] = useState(false);
  const [group4, setGroup4] = useState(false);
  const [group5, setGroup5] = useState(false);

  const [line1, setline1] = useState(false);
  const [line2, setline2] = useState(false);
  const [line3, setline3] = useState(false);

  const [chatList, setChatList] = useState();
  const [currentQuestion, setCurrentQuestion] = useState("");

  const localchatId = Cookies.get("chatId");
  const localsessionId = Cookies.get("sessionId");
  const localchatMessageId = Cookies.get("chatMessageId");

  let sliderRef = useRef(null);
  let sliderRefClient = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const nextClient = () => {
    sliderRefClient.slickNext();
  };
  const previousClient = () => {
    sliderRefClient.slickPrev();
  };

  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  const demoData = [
    {
      message: "How can I help you?",
      UserName: "Dave",
      isSender: false,
      date: formattedDate,
    },
  ];

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          bottom:"-25%"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
      className="dotsC"
        style={{
          width: "10px",
          height: "10px",
          color: "gray",
          border: "1px gray solid",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  const settingsWhyRean = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsClientsTalks = {
    dots: true,
    // dotsClass:'clientTalksDots',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  const onChangeChat = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const onClickSend = () => {

    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);


    if (currentQuestion.length > 0) {
      scrollToBottom();
      setCurrentQuestion("");
      Cookies.set(
        "chatListSession",
        JSON.stringify([
          ...chatList,
          {
            message: currentQuestion,
            UserName: "You",
            isSender: true,
            date: formattedDate,
          },
        ])
      );
      setChatList([
        ...chatList,
        {
          message: currentQuestion,
          UserName: "You",
          isSender: true,
          date: formattedDate,
        },
      ]);

      if (localchatId && localsessionId && localchatMessageId) {

        let c1 = Cookies.get("chatListSession");
        let jsonc1 = JSON.parse(c1);

        const payload = {
          question: currentQuestion,
          sessionId: localsessionId,
          chatId: localchatId,
        };

        fetch(
          "https://chatbot.raen.ai/api/v1/prediction/2ce47461-a465-4a47-a660-a5393bfac684",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        )
          .then((response) => response.json())
          .then(
            (data) => (
              Cookies.set(
                "chatListSession",
                JSON.stringify([
                  ...jsonc1,
                  {
                    message: data?.text,
                    UserName: "Dave",
                    isSender: false,
                    date: formattedDate,
                  },
                ])
              ),
              setChatList((pre) => [
                ...pre,
                {
                  message: data?.text,
                  UserName: "Dave",
                  isSender: false,
                  date: formattedDate,
                },
              ])
            )
          );
      } else {
        async function query(data) {
          const response = await fetch(
            "https://chatbot.raen.ai/api/v1/prediction/2ce47461-a465-4a47-a660-a5393bfac684",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const result = await response.json();
          return result; // or console.log(result)
        }

        query({ question: currentQuestion }).then((response) => {
          Cookies.set("chatId", response?.chatId);
          Cookies.set("chatMessageId", response?.chatMessageId);
          Cookies.set("sessionId", response?.sessionId);
          Cookies.set(
            "chatListSession",
            JSON.stringify([
              ...chatList,
              {
                message: response?.text,
                UserName: "Dave",
                isSender: false,
                date: formattedDate,
              },
            ])
          ),
            setChatList((pre) => [
              ...pre,
              {
                message: response?.text,
                UserName: "Dave",
                isSender: false,
                date: formattedDate,
              },
            ]);
        });
      }
    }
  };

  useEffect(() => {
    // const sessionChatList = Cookies.get("chatListSession");
    // console.log("sessionChatList", sessionChatList);
    // if (sessionChatList !== "undefined" && sessionChatList?.length > 0) {
    //   console.log("sessionChatList", JSON.parse(sessionChatList));

    //   setChatList(JSON.parse(sessionChatList));
    // } else {
    setChatList(demoData);
    // }
  }, []);

  // const scrollToBottom = () => {
  //   console.log("call");
  //   if (chatContainerRef.current) {
  //     const chatContainer = chatContainerRef.current;
  //     const lastMessage = chatContainer.lastElementChild;
  //     console.log("lastMessage: " + lastMessage);
  //     if (lastMessage) {
  //       lastMessage.scrollIntoView({ behavior: "instant", block: "end" });
  //     }
  //   }
  // };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior of adding a new line
      onClickSend(); // Call onClickSend method
    } else if (e.key === "Enter" && e.shiftKey) {
      // Insert a new line in the textarea
      setCurrentQuestion((prevQuestion) => prevQuestion + "\n");
    }
  };

  return (
    <>
      <div className="hero px-6 md:px-4 lg:px-12 pt-24 md:pt-36 lg:pt-30 pb-16 md:pb-16 lg:pb-16">
        <Hero />
      </div>

      {/* Trusted Partner Section */}

      <div className="partner px-6 md:px-4 lg:px-12 py-8 bg-primary-gray">
        <div className="font-semibold mb-5 md:mb-3 text-center md:text-start">
          Our Trusted Partnerships
        </div>
        <div className="cli-resp-trusted-partner flex flex-wrap md:flex-nowrap lg:flex-wrap justify-center md:justify-between gap-5">
          <div>
            <Image src={Swift} className="opacity-25 h-[48px] w-[129px]" alt="img" draggable="false"/>
          </div>
          <div>
            <Image src={Spotify} className="opacity-25 h-[48px] w-[129px]" alt="img" draggable="false"/>
          </div>
          <div>
            <Image src={Skillbuzz} className="opacity-25 h-[48px] w-[129px]" alt="img" draggable="false"/>
          </div>
          <div>
            <Image src={Trussme} className="opacity-25 h-[48px] w-[129px]" alt="img" draggable="false"/>
          </div>
          <div>
            <Image src={Adobe} className="opacity-25 h-[48px] w-[129px]" alt="img" draggable="false"/>
          </div>
          <div>
            <Image src={Unipreneur} className="opacity-25 h-[48px] w-[129px]" alt="img" draggable="false"/>
          </div>
        </div>
      </div>

      {/* Who we are */}

      <div className="cli-respo-who-we-are relative my-10 2xl:my-20 px-6 py-6 md:px-24 md:py-20 lg:px-24 lg:py-20 2xl:px-32 2xl:py-20 flex items-center ">
        <div className="whoweare absolute top-0 left-0 mg:top-0 md:left-0 lg:top-0 lg:left-0  h-[60vh] md:h-[60vh] lg:h-[100vh] p-[40%] md:p-[24%] lg:p-[16%]  z-[-1]"></div>
        <Image
          src={Vector}
          className="block cli-respo-who-we-are-st-1 md:hidden lg:block absolute top-[-1%] right-[36%] md:top-[5%] md:right-[5%] lg:top-[0%] lg:right-[0%] xl:top-[0%] xl:right-[54%] 2xl:top-[-1%] 2xl:right-[57.5%]  h-[8%] w-[16%] md:h-[14%] md:w-[10%] lg:h-[4%] lg:w-[2%] xl:h-[5%] xl:w-[2.5%] xxl:h-[4%] xxl:w-[1.8%] 2xl:h-[5%] 2xl:w-[1.8%]"
        />
        <Image
          src={Vector}
          className="block cli-respo-who-we-are-st-2 md:hidden lg:block absolute top-[5%] right-[48%] md:top-[16%] md:right-[12%] lg:top-[7%] lg:right-[56%] xl:top-[3%] xl:right-[56%] 2xl:top-[2%] 2xl:right-[59%]  h-[5%] w-[8%] md:h-[8%] md:w-[6%] lg:h-[7%] lg:w-[4%] xl:h-[8%] xl:w-[5%] xxl:h-[10%] xxl:w-[4%] 2xl:h-[10%] 2xl:w-[3.5%]"
        />
        <div className="cli-respo-who-we-are-head flex flex-col mt-20 md:mt-0 lg:flex-row gap-16 2xl:gap-28 items-center">
          <div className="cli-respo-who-we-are-head-top borderGradient w-[100%] lg:w-[36%] 2xl:w-[34%] rounded-3xl h-fit 2xl:ml-5">
            <div className="backgroundwhoweare  flex flex-col items-center p-8 rounded-3xl ">
              <div className="bg-primary-blue rounded-lg text-white text-xs py-1 px-3">
                Who we are
              </div>
              <div className="who-we-are-text text-[26px] md:text-[36px] lg:text-[26px] xxl:text-[30px] 2xl:text-[36px] my-4 text-center">
                Skip stale research! Raen AI is your{" "}
                <span className="font-semibold italic">Research lab</span> on
                rocket fuel. Get fresh, fast answers from our tech-loving
                explorers. We build solutions that work, not just prototypes.
              </div>
              {/* <button className="button3d rounded-xl cursor-pointer bg-white lg:px-5 md:text-sm px-3 py-2 font-semibold">
            Learn More
            </button> */}
              <button className="button3dWhite rounded-xl cursor-pointer btn-white w-[64%] md:w-[26%] lg:w-[40%] bg-white text-black lg:px-4 md:text-md px-3 py-2 mt-3 font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="cli-respo-who-we-are-head-bot hidden md:block w-[100%] lg:w-[56%] 2xl:w-[52%]">
            <div className="flex flex-wrap">
              <div className="p-2 2xl:p-5 w-[50%] ">
                <div className="maincard cursor-pointer rounded-xl border border-1 border-transparent hover:border-coolGray-200 p-4 bg-white h-[100%]">
                  <div className="iconbox bg-black rounded-xl px-[11px] py-[11px] w-fit ">
                    <Image src={brain} className="" alt="img"/>
                  </div>
                  <div className="font-semibold mt-2 mb-1">
                    Delving Deeper, Building Smarter1
                  </div>
                  <div className="descriptionBox text-gray-500">
                    We delve into the emerging technologies, understanding their
                    full potential.
                  </div>
                </div>
              </div>
              <div className="p-2 2xl:p-5 w-[50%]">
                <div className="maincard cursor-pointer rounded-xl border border-1 border-transparent hover:border-coolGray-200 p-4 bg-white h-[100%]">
                  <div className="iconbox bg-black rounded-xl p-2 w-fit">
                    <Image src={group} className="" alt="img"/>
                  </div>
                  <div className="font-semibold mt-2 mb-1">
                    Unveiling Open-Source Potential
                  </div>
                  <div className="descriptionBox text-gray-500">
                    Deep-dive into open-source technologies, leveraging their
                    flexibility.
                  </div>
                </div>
              </div>
              <div className="p-2 2xl:p-5 w-[50%]">
                <div className="maincard cursor-pointer rounded-xl border border-1 border-transparent hover:border-coolGray-200 p-4 bg-white h-[100%]">
                  <div className="iconbox bg-black rounded-xl px-[8px] py-[7px] w-fit">
                    <Image src={hand} className="" alt="img"/>
                  </div>
                  <div className="font-semibold mt-2 mb-1">
                    Partner for Tomorrow's Edge
                  </div>
                  <div className="descriptionBox text-gray-500">
                    Join forces with our research lab and gain access to
                    cutting-edge insights, expert guidance.
                  </div>
                </div>
              </div>
              <div className="p-2 2xl:p-5 w-[50%]">
                <div className="maincard cursor-pointer rounded-xl border border-1 border-transparent hover:border-coolGray-200 p-4 bg-white h-[100%]">
                  <div className="iconbox bg-black rounded-xl px-[13px] py-[11px] w-fit">
                    <Image src={flasx} className="" alt="img"/>
                  </div>
                  <div className="font-semibold mt-2 mb-1">
                    From Lab Bench to Real-World Impact
                  </div>
                  <div className="descriptionBox text-gray-500">
                    Our research isn't just theoretical. We translate insights
                    into tangible prototypes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] block md:hidden">
        <div className="w-[100%] whoweareSlider">
          <Slider {...settings} className="partnerSlider">
            <div className="maincard cursor-pointer rounded-xl border border-1 border-coolGray-200 p-4 bg-white h-[100%]">
              <div className="iconbox bg-black rounded-xl px-[12px] py-[12px] w-fit">
                <Image src={brain} className="" alt="img"/>
              </div>
              <div className="font-semibold mt-2 mb-1">
                Delving Deeper, Building Smarter
              </div>
              <div className="descriptionBox text-gray-500">
                We delve into the emerging technologies, understanding their
                full potential.
              </div>
            </div>

            <div className="maincard cursor-pointer rounded-xl border border-1 border-coolGray-200 p-4 bg-white h-[100%]">
              <div className="iconbox bg-black rounded-xl p-2 w-fit">
                <Image src={group} className="" alt="img"/>
              </div>
              <div className="font-semibold mt-2 mb-1">
                Unveiling Open-Source Potential
              </div>
              <div className="descriptionBox text-gray-500">
                Deep-dive into open-source technologies, leveraging their
                flexibility.
              </div>
            </div>

            <div className="maincard cursor-pointer rounded-xl border border-1 border-coolGray-200 p-4 bg-white h-[100%]">
              <div className="iconbox bg-black rounded-xl px-[10px] py-[8px] w-fit">
                <Image src={hand} className="" alt="img"/>
              </div>
              <div className="font-semibold mt-2 mb-1">
                Partner for Tomorrow's Edge
              </div>
              VectorStart
              <div className="descriptionBox text-gray-500">
                Join forces with our research lab and gain access to
                cutting-edge insights, expert guidance.
              </div>
            </div>

            <div className="maincard cursor-pointer rounded-xl border border-1 border-coolGray-200 p-4 bg-white h-[100%]">
              <div className="iconbox bg-black rounded-xl px-[14px] py-[12px] w-fit">
                <Image src={flasx} className="" alt="img"/>
              </div>
              <div className="font-semibold mt-2 mb-1">
                From Lab Bench to Real-World Impact
              </div>
              <div className="descriptionBox text-gray-500">
                Our research isn't just theoretical. We translate insights into
                tangible prototypes.
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Solutions overview section  */}

      <div className="solutionOverView px-6 md:px-4 lg:px-12 py-8 mt-14 md:mt-0">
        <div className="titleSection flex flex-col md:justify-center">
          <div className="bg-primary-blue rounded-lg text-white text-xs py-1 px-3 w-fit md:self-center">
            Solution Overview
          </div>
          <div className="md:self-center text-3xl 2xl:text-4xl font-semibold my-3">
            Raen AI: Your Friendly AI Sidekick
          </div>
          <div className="md:self-center text-gray-500 text-sm">
            <div className="w-full md:text-center">
              Hire AI pros, get expert advice, or hand over your project & chill
              –
            </div>
            <div className="w-full md:text-center">
              We've got your back, no brainer.
            </div>
          </div>
        </div>
        <div className="container1 md:flex md:justify-between md:gap-5 my-6">
          <div className="box">
            <div className="content my-5 md:my-0 bg-primary-gray hover:bg-primary-dark-gray h-full p-4 rounded-3xl cursor-pointer">
              <div className="imageBox">
                <Heart />
                {/* <Image
                  src={heart}
                  className=" md:h-[50%] md:w-[50%] lg:h-[auto] lg:w-[auto] "
                /> */}
              </div>
              <div className="imageBoxHead text-2xl md:text-xl lg:text-2xl  my-2 font-semibold">
                Staff Augmentation
              </div>
              <div className="imageBoxDes text-gray-500">
                Stuck on an AI project? Think of us as your AI talent pool on
                tap! We find the perfect talents, from beginners to ninjas, who
                fit seamlessly into your team. We will support them every step
                of the way, so you can say goodbye to headaches & hello to
                progress.
              </div>
            </div>
          </div>

          <div className="box">
            <div className="content my-5 md:my-0 bg-primary-gray hover:bg-primary-dark-gray h-full p-4 rounded-3xl cursor-pointer">
              <div className="imageBox">
                {/* <Image
                  src={sphere}
                  className="md:h-[50%] md:w-[50%] lg:h-[auto] lg:w-[auto] "
                /> */}
                <Sphere />
              </div>
              <div className="imageBoxHead text-2xl md:text-xl lg:text-2xl  my-2 font-semibold">
                Consultation
              </div>
              <div className="imageBoxDes text-gray-500">
                Need some expert AI brainpower on demand? We offer anything from
                quick research sprints to year-long partnerships. Think of it as
                hiring your own AI consultant, only cooler and without the fancy
                office chair.
              </div>
            </div>
          </div>

          <div className="box">
            <div className="content my-5 md:my-0 bg-primary-gray hover:bg-primary-dark-gray h-full p-4 rounded-3xl cursor-pointer">
              <div className="imageBox">
                {/* <Image
                  src={semicylinder}
                  className="md:h-[50%] md:w-[50%] lg:h-[auto] lg:w-[auto] "
                /> */}
                <SemiCelinde />
              </div>
              <div className="imageBoxHead text-2xl md:text-xl lg:text-2xl  my-2 font-semibold">
                AI Project
              </div>
              <div className="imageBoxDes text-gray-500">
                Got a challenging AI project? Hand it over to us! We'll bust out
                proof-of-concepts to solve specific problems, then scale things
                up for broader impact. While we work our AI magic in-house, you
                can focus on what you do best. No surprises, just results.
              </div>
            </div>
          </div>
        </div>
        <div className="learnMoreBtn flex justify-center">
          <button className="button3dWhite rounded-xl cursor-pointer btn-white w-[40%] md:w-[20%] lg:w-[12%] bg-white text-black lg:px-4 md:text-md px-3 py-2 mt-3 font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* why rean ai section  */}

      <div className="whyReanAisolution px-6 md:px-4 lg:px-12 py-8 mt-10 md:mt-10">
        <div className="titleSection relative flex flex-col md:justify-center px-0 md:px-36 lg:px-96">
          <Image
            src={VectorStart1}
            className="cli-respo-titleSection-st-1 absolute top-[38%] left-[-17%] md:top-[46%] md:left-[8%] lg:top-[40%] lg:left-[22%] 2xl:top-[40%] 2xl:left-[25%]  h-[25%] w-[20%] md:h-[29%] md:w-[8%] lg:h-[28%] lg:w-[5%] 2xl:h-[33%] 2xl:w-[4.5%] xxl:h-[32%] xxl:w-[4.5%]"
          />
          <Image
            src={VectorStart1}
            className="cli-respo-titleSection-st-2 absolute top-[-4%] right-[6%] md:top-[12%] md:right-[10%] lg:top-[10%] lg:right-[24%] 2xl:top-[10%] 2xl:right-[31%]  h-[13%] w-[10%] md:h-[20%] md:w-[6%] lg:h-[16%] lg:w-[3%] 2xl:h-[18%] xxl:h-[20%] 2xl:w-[3%] xxl:w-[3%]"
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
          <div className="md:self-center text-gray-500 text-sm">
            <div className="w-full text-center xxl:px-28">
              Level up your AI journey with cutting-edge solutions, expert
              minds, and flexible support. Let's make magic! –
            </div>
          </div>
        </div>
        {/* for desktop  */}
        <div className="hidden md:block whyReanAisolutioncardSection mt-7">
          <div className="whyReanAisolutioncardSectionUp flex gap-5 mb-5">
            <div
              className="Box relative w-[65%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-end"
              onMouseEnter={() => setGroup1(true)}
              onMouseLeave={() => setGroup1(false)}
            >
              <div className="cli-res-group1-hidden hidden lg:block absolute top-[-2%] right-[2%] lg:top-[0%] lg:right-[2%]">
                <div>
                  <Group1 hover={group1} />
                </div>
              </div>

              <div className="cli-res-group1 block lg:hidden absolute top-[-2%] right-[2%] lg:top-[0%] lg:right-[2%]">
                <div>
                  <Group1 hover={true} />
                </div>
              </div>

              <div className="md:w-[60%] lg:w-[50%]">
                <div className="md:text-lg lg:text-2xl font-semibold">
                  Research-Driven Innovation
                </div>
                <div className="text-gray-500 my-0 lg:my-3">
                  Forget stale solutions. Our research lab crafts cutting-edge
                  stuff, custom-built for your unique needs. Think of it as AI
                  superpowers for your business!
                </div>
                <div
                  className={`cli-res-showMore-home showMore text-primary-blue transition-opacity duration-1000 ease-in-out`}
                >
                  Read More
                </div>
              </div>
            </div>
            <div
              className="Box relative w-[35%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-start overflow-hidden"
              onMouseEnter={() => setGroup2(true)}
              onMouseLeave={() => setGroup2(false)}
            >
              <div className="cli-res-group2-hidden  hidden lg:block absolute top-[60%] right-[-10%] lg:top-[46%] lg:right-[-10%]">
                <div>
                  <Group2 hover={group2} />
                </div>
              </div>
              <div className="cli-res-group2 block lg:hidden absolute top-[60%] right-[-10%] lg:top-[46%] lg:right-[-10%]">
                <div>
                  <Group2 hover={true} />
                </div>
              </div>
              <div className="w-[100%]">
                <div className="md:text-lg lg:text-2xl font-semibold">
                  Comprehensive Project Support
                </div>
                <div className="text-gray-500 my-0 lg:my-3">
                  ot a huge AI project? Hand it over! We'll handle everything,
                  delivering epic results while you focus on other stuff. Relax,
                  enjoy the view!
                </div>
                <div
                  className={`cli-res-showMore-home showMore text-primary-blue transition-opacity duration-1000 ease-in-out`}
                >
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="whyReanAisolutioncardSectionDown flex gap-5">
            <div
              className="Box relative w-[25%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-end overflow-hidden"
              onMouseEnter={() => setGroup3(true)}
              onMouseLeave={() => setGroup3(false)}
            >
              <div className="cli-res-group3-hidden hidden lg:block absolute bottom-[76%] right-[-26%] lg:bottom-[58%] lg:right-[-10%]">
                <div>
                  <Group3 hover={group3} />
                </div>
              </div>
              <div className="cli-res-group3 block lg:hidden absolute bottom-[76%] right-[-26%] lg:bottom-[58%] lg:right-[-10%]">
                <div>
                  <Group3 hover={true} />
                </div>
              </div>
              <div className="w-[100%]">
                <div className="md:text-lg lg:text-2xl font-semibold">
                  Scalable Support
                </div>
                <div className="text-gray-500 my-0 lg:my-3">
                  Grow Smoothly: Need a bigger AI team? No sweat! Think of it as
                  an elastic band for your AI needs.
                </div>
                <div
                  className={`cli-res-showMore-home showMore text-primary-blue transition-opacity duration-1000 ease-in-out`}
                >
                  Read More
                </div>
              </div>
            </div>

            <div
              className="Box relative w-[25%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-start overflow-hidden"
              onMouseEnter={() => setGroup4(true)}
              onMouseLeave={() => setGroup4(false)}
            >
              <div className="cli-res-group4-hidden hidden lg:block absolute top-[80%] left-[52%] lg:top-[64%] lg:left-[44%]">
                <div>
                  <Group4 hover={group4} />
                </div>
              </div>
              <div className="cli-res-group4 block lg:hidden absolute top-[80%] left-[52%] lg:top-[64%] lg:left-[44%]">
                <div>
                  <Group4 hover={true} />
                </div>
              </div>
              <div className="w-[100%]">
                <div className="md:text-lg lg:text-2xl font-semibold">
                  Proof of Concept Expertise
                </div>
                <div className="text-gray-500 my-0 lg:my-3">
                  Try Before You Buy: Not sure if AI's your thing? No worries!
                  We build mini-versions of your project so you can see the
                  magic before committing.
                </div>
                <div
                  className={`cli-res-showMore-home showMore text-primary-blue transition-opacity duration-1000 ease-in-out`}
                >
                  Read More
                </div>
              </div>
            </div>

            <div
              className="Box relative w-[50%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-end overflow-hidden"
              onMouseEnter={() => setGroup5(true)}
              onMouseLeave={() => setGroup5(false)}
            >
              <div className="cli-res-group5-hidden hidden lg:block absolute bottom-[56%] right-[-30%] lg:bottom-[30%] lg:right-[-20%]">
                <div>
                  <Group5 hover={group5} />
                </div>
              </div>
              <div className="cli-res-group5 block lg:hidden absolute bottom-[56%] right-[-30%] lg:bottom-[30%] lg:right-[-20%]">
                <div>
                  <Group5 hover={true} />
                </div>
              </div>
              <div className="w-[100%]">
                <div className="md:text-lg lg:text-2xl font-semibold">
                  Continuous Training and Development
                </div>
                <div className="text-gray-500 my-0 lg:my-3">
                  Our team? Always learning the latest tech tricks, thanks to
                  our awesome research lab. You get the benefit of their
                  constantly upgraded brains!
                </div>
                <div
                  className={`cli-res-showMore-home showMore text-primary-blue transition-opacity duration-1000 ease-in-out`}
                >
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile  */}
        <div className="block md:hidden whyReanAisolutioncardSection mt-7">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settingsWhyRean}
            >
              <div key={1}>
                <div
                  className="Box relative w-[100%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-end"
                  onMouseEnter={() => setGroup1(true)}
                  onMouseLeave={() => setGroup1(false)}
                >
                  <div className="absolute bottom-[100%] left-[40%] h-[30%] w-[30%]">
                    <div>
                      <Group1 hover={true} />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-2xl font-semibold">
                      Research-Driven Innovation
                    </div>
                    <div className="text-gray-500 my-2 ">
                      Forget stale solutions. Our research lab crafts
                      cutting-edge stuff, custom-built for your unique needs.
                      Think of it as AI superpowers for your business!
                    </div>
                    <div
                      className={`text-primary-blue transition-opacity duration-1000 ease-in-out`}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div key={2}>
                <div
                  className="Box relative w-[100%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-start overflow-hidden"
                  onMouseEnter={() => setGroup2(true)}
                  onMouseLeave={() => setGroup2(false)}
                >
                  <div className="absolute top-[56%] right-[-22%]">
                    <div>
                      <Group2 hover={true} />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="text-2xl font-semibold">
                      Comprehensive Project Support
                    </div>
                    <div className="text-gray-500 my-2">
                      ot a huge AI project? Hand it over! We'll handle
                      everything, delivering epic results while you focus on
                      other stuff. Relax, enjoy the view!
                    </div>
                    <div
                      className={` text-primary-blue transition-opacity duration-1000 ease-in-out`}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div key={3}>
                <div
                  className="Box relative w-[100%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-end overflow-hidden"
                  onMouseEnter={() => setGroup3(true)}
                  onMouseLeave={() => setGroup3(false)}
                >
                  <div className="absolute bottom-[58%] right-[-14%] ">
                    <div>
                      <Group3 hover={true} />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="text-2xl font-semibold">
                      Scalable Support
                    </div>
                    <div className="text-gray-500 my-2">
                      Grow Smoothly: Need a bigger AI team? No sweat! Think of
                      it as an elastic band for your AI needs.
                    </div>
                    <div
                      className={` text-primary-blue transition-opacity duration-1000 ease-in-out`}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div key={4}>
                <div
                  className="Box relative w-[100%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-start overflow-hidden"
                  onMouseEnter={() => setGroup4(true)}
                  onMouseLeave={() => setGroup4(false)}
                >
                  <div className="absolute top-[60%] left-[54%] ">
                    <div>
                      <Group4 hover={true} />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="text-2xl font-semibold">
                      Proof of Concept Expertise
                    </div>
                    <div className="text-gray-500 my-2">
                      Try Before You Buy: Not sure if AI's your thing? No
                      worries! We build mini-versions of your project so you can
                      see the magic before committing.
                    </div>
                    <div
                      className={` text-primary-blue transition-opacity duration-1000 ease-in-out`}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <div key={5}>
                <div
                  className="Box relative w-[100%] min-h-96 bg-primary-gray cursor-pointer rounded-3xl p-6 flex items-end overflow-hidden"
                  onMouseEnter={() => setGroup5(true)}
                  onMouseLeave={() => setGroup5(false)}
                >
                  <div className="absolute bottom-[56%] right-[-40%]">
                    <div>
                      <Group5 hover={true} />
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="text-2xl font-semibold">
                      Continuous Training and Development
                    </div>
                    <div className="text-gray-500 my-2">
                      Our team? Always learning the latest tech tricks, thanks
                      to our awesome research lab. You get the benefit of their
                      constantly upgraded brains!
                    </div>
                    <div
                      className={` text-primary-blue transition-opacity duration-1000 ease-in-out`}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="flex justify-center mt-5">
              <div className="mr-2 bg-primary-dark-gray  rounded-2xl flex justify-center items-center">
                <button className="button p-4" onClick={previous}>
                  <LeftArrow height={24} width={24} color={"#fff"} />
                  {/* <Image src={leftArrow} className="" /> */}
                </button>
              </div>
              <div className="bg-primary-dark-gray rounded-2xl flex justify-center items-center">
                <button className="button p-4" onClick={next}>
                  <RightArrow height={24} width={24} color={"#fff"} />
                  {/* <Image src={rightArrow} className="" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chat  */}

      <div className="chatBox relative px-6 md:px-4 lg:px-12 py-10 lg:py-16 2xl:py-20 bg-primary-dark-gray overflow-hidden">
        <div className="bgMultiVactor block md:hidden lg:block absolute top-[0%] right-[-35%] lg:top-[0%] lg:right-[-3%]">
          <MultiStartBg color={"#262626"} />
        </div>
        <div id="chatSectionId" className="lg:px-20 2xl:px-36">
          <div className="chatBoxUp">
            <div className="bg-primary-blue flex w-fit rounded-lg text-white text-xs py-1 px-3">
              Try our demo
            </div>
            <div className="chatBoxUpHead  my-3 flex">
              <div className="relative text-3xl 2xl:text-4xl font-semibold text-white mr-5">
                Still not convinced? Ask a question!
                <div className="hidden md:block absolute top-[-10%] right-[-73%] lg:top-[-10%] lg:right-[-73%] xxl:top-[-10%] xxl:right-[-73%] 2xl:top-[-10%] 2xl:right-[-63%]">
                  <Star4 color={"#fff"} size="large" />
                </div>
                <div className="hidden md:block absolute top-[-36%] right-[-80%] lg:top-[-36%] lg:right-[-80%] xxl:top-[-36%] xxl:right-[-80%] 2xl:top-[-36%] 2xl:right-[-70%]">
                  <Star4 color={"#fff"} size="small" />
                </div>
              </div>
            </div>
            <div className="chatBoxUpDes text-trueGray-300">
              Curious what we can do? Ask it anything and see the magic happen
              in seconds!
            </div>
          </div>
          <div className="chatBoxDown md:flex mt-8 gap-4 lg:gap-10 2xl:gap-20">
            <div className="chatBoxDownLeft p-4 bg-[#262626] rounded-3xl border border-1 border-[#4c4c4c] w-[100%] md:w-[68%] lg:w-[70%]  2xl:w-[65%] mb-8 md:mb-0">
              <div className=" h-[80vh] md:h-96 w-[100%]">
                {/* <div className="h-[5%] my-4 flex justify-between items-center">
                  <div className="flex">
                    <Image src={robo} className="h-10 w-10" />
                    <div className="flex flex-col justify-center ml-4">
                      <div className="text-lg font-semibold text-white">{"Dave"}</div>
                    </div>
                  </div>
                </div> */}
                <div
                  className="h-[90%] md:h-[85%] w-full overflow-y-scroll messageWrapper scroll-smooth"
                  ref={chatContainerRef}
                >
                  {chatList?.map((message) => {
                    return (
                      <>
                        {message.isSender ? (
                          <div className="my-5">
                            <div
                              className={`w-full flex ${
                                message.isSender
                                  ? "justify-end"
                                  : "justify-start"
                              }`}
                            >
                              <div
                                className={` text-break  max-w-[80%] p-3  ${
                                  message.isSender
                                    ? "rounded-l-lg text-white bg-[#5C5DFA]"
                                    : "rounded-r-lg bg-[#FBFBFB]"
                                } rounded-t-lg  text-base `}
                              >
                                {message.message}
                              </div>
                            </div>
                            <div className="text-end text-xs text-[#666666] mt-2">
                              {message?.date || "Just Now"}
                            </div>
                          </div>
                        ) : (
                          <div className="w-full ">
                            <div className="flex w-full max-w-[80%] p-2 rounded-r-lg text-break rounded-b-lg">
                              <div>
                                <Image
                                  className="img-fluid text-capitalize"
                                  alt={"avatar"}
                                  src={robo}
                                />
                              </div>
                              <div className="ps-2 w-full">
                                <div className="mb-1 text-white font-semibold">
                                  {message.UserName}
                                </div>
                                <div
                                  className={`w-fit ${
                                    message?.date !== undefined ? "p-3" : "p-0"
                                  }  ${
                                    message.isSender
                                      ? "rounded-l-lg text-white"
                                      : "rounded-r-lg bg-[#373737]"
                                  } rounded-b-lg  text-white`}
                                >
                                  {message?.message}
                                  {/* for typing  */}

                                  {/* {message?.date !== undefined ? (
                                    message.message
                                  ) : (
                                    <img
                                      src={typing}
                                      height={35}
                                      alt="typing"
                                    />
                                  )} */}
                                </div>
                                <div className="text-start text-xs text-[#666666] mt-2">
                                  {message?.date || ""}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
                <div className="h-[10%] md:h-[15%] pt-4 md:pt-2 flex items-center justify-between bg-bg-secondary rounded-b-xl ">
                  <div className="bg-[#333333] border border-1 border-[#666666] w-full h-full rounded-3xl p-2 flex items-center">
                    <div className="textareaBox w-[inherit] flex mr-3">
                      <input
                        className="chatTextArea w-full bg-transparent text-[white]"
                        placeholder=""
                        onChange={onChangeChat}
                        value={currentQuestion}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                    {/* <div className="micBox mx-1">
                      <Image src={microPhone} className="" />
                    </div> */}
                    <div className="sendBtnBox">
                      <button
                        className={`flex items-center justify-center rounded-xl p-1 px-3 bg-[#9E00FF] ${
                          currentQuestion.length > 0
                            ? " "
                            : "  cursor-not-allowed"
                        }`}
                        onClick={onClickSend}
                        disabled={currentQuestion.length > 0 ? false : true}
                      >
                        <span className="text-white text-sm mr-1">Send</span>
                        <Image src={send} className="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chatBoxDownRight flex flex-col justify-center w-[100%] md:w-[32%] lg:w-[30%] 2xl:w-[25%]">
              <div
                className="chatBoxDownRight1 cursor-pointer"
                onMouseEnter={() => setline1(true)}
                onMouseLeave={() => setline1(false)}
              >
                <div
                  className={`line1 text-lg text-[#fff] ${
                    line1 ? "lg:text-[#fff]" : "lg:text-[#999999]"
                  }`}
                >
                  1. Get Instant AI Answers
                </div>
                <div className="line1Des flex justify-start my-2">
                  <div className="cli-rep-fill-start-p block lg:hidden mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#9E00FF"} />
                  </div>
                  <div className="cli-rep-fill-start hidden lg:block mt-1 mr-2">
                    <FillStart
                      width={16}
                      height={14}
                      color={line1 ? "#9E00FF" : "#666666"}
                    />
                  </div>
                  <div
                    className={`cli-respo-line1-des text-[#a9a9a9] ${
                      line1 ? "lg:text-[#a9a9a9] " : "lg:text-[#666666]"
                    }`}
                  >
                    Stuck on something AI-related? Our bot's got your back, day
                    or night.
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div
                className="chatBoxDownRight2 cursor-pointer"
                onMouseEnter={() => setline2(true)}
                onMouseLeave={() => setline2(false)}
              >
                <div
                  className={`line1 text-lg text-[#fff] ${
                    line2 ? "lg:text-[#fff]" : " lg:text-[#999999]"
                  }`}
                >
                  2. Constantly Leveling Up
                </div>
                <div className="line1Des flex justify-start my-2">
                  <div className="cli-rep-fill-start-p block lg:hidden mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#9E00FF"} />
                  </div>
                  <div className="cli-rep-fill-start hidden lg:block mt-1 mr-2">
                    <FillStart
                      width={16}
                      height={14}
                      color={line2 ? "#9E00FF" : "#666666"}
                    />
                  </div>
                  <div
                    className={`cli-respo-line1-des text-[#a9a9a9] ${
                      line2 ? "lg:text-[#a9a9a9] " : "lg:text-[#666666]"
                    }`}
                  >
                    Our bot keeps learning the latest AI info, so it's always on
                    point.
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div
                className="chatBoxDownRight3 cursor-pointer"
                onMouseEnter={() => setline3(true)}
                onMouseLeave={() => setline3(false)}
              >
                <div
                  className={`line1 text-lg text-[#fff] ${
                    line3 ? "lg:text-[#fff]" : "lg:text-[#999999]"
                  }`}
                >
                  3. AI Talk Made Easy
                </div>
                <div className="line1Des flex justify-start my-2">
                  <div className="cli-rep-fill-start-p block lg:hidden mt-1 mr-2">
                    <FillStart width={16} height={14} color={"#9E00FF"} />
                  </div>
                  <div className="cli-rep-fill-start hidden lg:block mt-1 mr-2">
                    <FillStart
                      width={16}
                      height={14}
                      color={line3 ? "#9E00FF" : "#666666"}
                    />
                  </div>
                  <div
                    className={`cli-respo-line1-des text-[#a9a9a9] ${
                      line3 ? "lg:text-[#a9a9a9] " : "lg:text-[#666666]"
                    }`}
                  >
                    No more techie mumble jumbo! Our bot explains complex AI
                    stuff in plain language, so it all clicks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* clients talking  */}

      <div className="clientsTalking px-6 md:px-4 lg:px-12 py-8 bg-primary-gray overflow-hidden">
        <div className="cli-res-client-talk relative flex flex-col lg:flex-row  lg:mr-16 2xl:mr-32 py-0 md:py-12 lg:py-20 px-0 md:px-20 lg:px-0 items-center ">
          <div className="clientsTalk hidden md:block absolute bottom-[-10%] right-[-12%] lg:bottom-[-14%]  lg:right-[-19%] 2xl:bottom-[-15%]  2xl:right-[-31%]">
            <Image
              src={sphereSVG}
              className="h-80 w-80 2xl:h-[74%] 2xl:w-[74%] rotate-[10deg]"
            />
          </div>
          <div className="clientsTalkingLeft w-[100%] lg:w-[50%] lg:pr-32 mb-4 lg:mb-0 mt-4 md:mt-0">
            <div className="relative startLineClient mb-2">
              <Image
                src={Vector}
                className="absolute top-[-28%] left-[9%] 2xl:top-[-30%] 2xl:left-[8%] h-[50%] w-[5%] 2xl:h-[46%] 2xl:w-[4%]"
              />
              <Image
                src={Vector}
                className="h-[3%] w-[10%] 2xl:h-[2%] 2xl:w-[8%]"
              />
            </div>
            <div className="text-2xl md:text-3xl 2xl:text-4xl font-semibold  2xl:leading-normal">
              Clients Talking:
            </div>
            <div className="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-2">
              Real People, Real Results
            </div>
            <div className="text-gray-500 mb-5 md:mb-0">
              Forget the suits, hear it straight from the folks who've seen the
              AI magic happen.
            </div>
          </div>
          <div className="clientsTalkingRight w-[100%] lg:w-[50%] px-10 py-8 pt-10 2xl:px-20 2xl:py-14 2xl:pt-16 bg-primary-dark-gray rounded-3xl z-[2]">
            <div className="slider-container">
              <Slider
                ref={(slider) => {
                  sliderRefClient = slider;
                }}
                {...settingsClientsTalks}
              >
                <div key={1}>
                  <div className="ratingStartClient flex gap-1">
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                  </div>
                  <div className="sliderHeadClient text-white text-xl 2xl:text-3xl font-semibold pr-10 2xl:pr-20 my-3">
                    “Exceptional Service and Swift Delivery by Raen AI"
                  </div>
                  <div className="sliderSubClient text-trueGray-300 italic text-sm 2xl:pr-10">
                  Raen AI surpassed our expectations with their cutting-edge solutions and outstanding project delivery. 
                  They completed an AI Customer Support project for Swift Auto in record time, 
                  maintaining high quality and precision throughout. 
                  Their professionalism and expertise in AI are truly commendable.
                  </div>
                  <div className="my-3">
                    <div className="sliderSignClientB text-white font-semibold">
                    Mr. Ammad Ahmed
                    </div>
                    <div className="sliderSignClientI text-trueGray-300 italic text-sm">
                    Swift Auto
                    </div>
                  </div>
                </div>
                <div key={2}>
                  <div className="ratingStartClient flex gap-1">
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    <RatingStart height={10} width={10} color={"#FFB800"} />
                    {/* <RatingStart height={10} width={10} color={"#FFB800"} /> */}
                  </div>
                  <div className="sliderHeadClient text-white text-xl 2xl:text-3xl font-semibold pr-10 2xl:pr-20 my-3">
                    “Highly recommend, efficient and very productive."
                  </div>
                  <div className="sliderSubClient text-trueGray-300 italic text-sm ">
                    Raen AI is a game-changer! We needed help navigating the
                    world of AI for our business, and their team was incredibly
                    knowledgeable and supportive. They explained everything in
                    simple terms and helped us develop a solution that exceeded
                    our expectations. We're now seeing a significant increase in
                    efficiency and productivity, all thanks to Raen AI.
                  </div>
                  <div className="my-3">
                    <div className="sliderSignClientB text-white font-semibold">
                      Mr. Alvero Moreno
                    </div>
                    <div className="sliderSignClientI text-trueGray-300 italic text-sm">
                      The Tarasov Mob
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="hidden md:flex justify-end mt-5">
                <div className="mr-2 bg-white  rounded-xl flex justify-center items-center">
                  <button
                    className="button px-[10px] py-[8px]"
                    onClick={previousClient}
                  >
                    <LeftArrow height={18} width={16} color={"#000"} />
                    {/* <Image src={leftArrow} className="" /> */}
                  </button>
                </div>
                <div className="bg-white rounded-xl flex justify-center items-center">
                  <button
                    className="button px-[10px] py-[8px]"
                    onClick={nextClient}
                  >
                    <RightArrow height={18} width={16} color={"#000"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden justify-center mt-8">
            <div className="mr-2 bg-transparent border-2 border-primary-dark-gray rounded-2xl flex justify-center items-center">
              <button className="button p-4" onClick={previousClient}>
                <LeftArrow height={24} width={24} color={"#000"} />
                {/* <Image src={leftArrow} className="" /> */}
              </button>
            </div>
            <div className="bg-transparent border-2 border-primary-dark-gray rounded-2xl flex justify-center items-center">
              <button className="button p-4" onClick={nextClient}>
                <RightArrow height={24} width={24} color={"#000"} />
                {/* <Image src={rightArrow} className="" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
