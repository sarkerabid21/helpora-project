import React from "react";
import { Link, useLocation } from "react-router";
import ContactSection14 from "./ContactSection14";
import { FaHandHoldingHeart } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom"; // নিশ্চিত react-router-dom থেকে
// import ContactSection14 from "./ContactSection14"; // আপনার পাথ অনুযায়ী ঠিক করুন
import { IoIosSchool } from "react-icons/io";
import { AiTwotoneBuild } from "react-icons/ai";
import { FcDonate } from "react-icons/fc";
import './index.css'

const WhatMakeUsDifferent = () => {
  const features = [
    {
      title: "We Educate",
      icon: (
        <IoIosSchool className="text-[#fa9420]"/>

      ),
      description:
      "We provide workshops, online resources, and hands-on training to empower communities with practical knowledge.",
    bgColor: "bg-orange-100",
    },
    {
      title: "We Help",
      icon: (
        <FaHandHoldingHeart className="text-[#faf320]" />
      ),
     description:
      "From emergency relief to ongoing mentorship, we stand beside those in need every step of the way.",
    bgColor: "bg-yellow-100",
    },
    {
      title: "We Build",
      icon: (
        <AiTwotoneBuild />
      ),
       description:
      "We develop sustainable projects and infrastructure that create lasting change in local neighborhoods.",
    bgColor: "bg-blue-100",
    },
    {
      title: "We Donate",
      icon: (
        <FcDonate />
      ),
       description:
      "Through generous contributions, we ensure essential supplies and resources reach those who need them most.",
    bgColor: "bg-green-100",
    },
  ];

  return (
    <section className="py-16 bg-[#faf5eb]">
      <div className="text-center mb-12">
        {/* <p className="text-sm text-[#33582d] font-semibold mb-2">HELP IS OUR GOAL</p> */}
        <h2 className="text-3xl text-[#33582d] font-bold">What Make Us Different</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition duration-300 ${
              i === 1 ? "scale-105 shadow-2xl z-10" : ""
            }`}
          >
            <div className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full ${feature.bgColor}`}>
              {feature.icon}
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mt-20 bg-white rounded-lg shadow-lg py-8 px-12 flex justify-around text-center">
        <div>
          <p className="text-3xl font-extrabold text-orange-500">35</p>
          <p className="text-xs font-semibold tracking-wide uppercase">Years of Foundation</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-orange-500">60+</p>
          <p className="text-xs font-semibold tracking-wide uppercase">Monthly Donors</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-orange-500">1.5k</p>
          <p className="text-xs font-semibold tracking-wide uppercase">Incredible Volunteers</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-orange-500">785</p>
          <p className="text-xs font-semibold tracking-wide uppercase">Successful Campaigns</p>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      {/* Header and Breadcrumb */}
      <div className="relative w-full overflow-hidden max-h-full">
        <img
          src="https://i.ibb.co.com/jPvMLfBX/multiethnic-friends-socializing-while-watching-online-funny-videos-laptop-resting-sofa-back.jpg"
          alt="FAQ Header"
          className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            FAQ
          </h1>

          <nav className="text-sm md:text-base text-white drop-shadow">
            <Link to="/" className="text-accent font-semibold">
              HOME
            </Link>

            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;

              return (
                <span key={name}>
                  {" › "}
                  {isLast ? (
                    <span className="text-[#add2a7] font-semibold uppercase">{name}</span>
                  ) : (
                    <Link to={routeTo} className="text-[#add2a7] font-semibold uppercase">
                      {name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      {/* What Make Us Different Section */}
      <WhatMakeUsDifferent />

      {/* Contact Section */}
      {/* <ContactSection14 /> */}
    </div>
  );
};

export default AboutUs;
