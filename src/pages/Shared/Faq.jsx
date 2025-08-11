import React from "react";
import { Link, useLocation } from "react-router";
import FAQSection from "./FAQSection";
// import { Link, useLocation } from "react-router-dom";

const FAQHeader = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-green-100 dark:bg-teal-600">
 <div className="relative w-full overflow-hidden">
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
<FAQSection></FAQSection>
    </div>
   

  );
};

export default FAQHeader;
