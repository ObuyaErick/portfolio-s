import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSpring, animated } from "@react-spring/web";
import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ScrollContext } from "../App";
import { Resume } from "../assets/docs/Docs";

const tabs = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
];

const ResumeLink: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href={`${Resume}`}
    className={`px-4 border border-pink-700 rounded text-pink-700 hover:text-white hover:bg-pink-700 duration-300 flex items-center ${className}`}
  >
    Resume
  </a>
);

export function NavigationBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { scrollTo } = useContext(ScrollContext);
  const popUpSprings = useSpring({
    from: {
      opacity: 0,
      translateX: "100%",
    },
    to: {
      opacity: openDrawer ? 1 : 0,
      translateX: openDrawer ? "0%" : "100%",
    },
    config: { tension: 200, friction: 10 },
  });

  return (
    <div>
      <div className="container mx-auto backdrop-blur flex items-center gap-4 rounded sticky top-4 px-4 py-1">
        <div className="relative flex items-center justify-center">
          <div className="hexagon double"></div>
          <div className="absolute text-pink-600 font-extrabold text-2xl">
            E
          </div>
        </div>

        {/* Large Screen */}
        <div className="hidden lg:flex flex-grow">
          <div className="flex items-center justify-end gap-2 flex-grow px-4">
            {tabs.map((tab, index) => (
              <NavLink
                onClick={() => scrollTo(tab.path)}
                className="gap-2 rounded px-4 py-2 text-sm hover:text-pink-600 hover:bg-pink-700/20 duration-300 flex items-center justify-center"
                key={index}
                to={tab.path}
              >
                <span className="font-bold text-pink-600">{index + 1}.</span>
                <span>{tab.title}</span>
              </NavLink>
            ))}
          </div>
          <ResumeLink />
        </div>

        {/* Small Screen */}
        <div className="flex-grow lg:hidden flex justify-end">
          {!openDrawer && (
            <button
              onClick={() => setOpenDrawer(true)}
              className="p-1 rounded border-2 border-stone-500/20 text-stone-500 hover:border-stone-400/20 hover:text-stone-400 hover:bg-stone-900 duration-300"
            >
              <Bars4Icon className="" height={24} />
            </button>
          )}
        </div>
      </div>
      {/* Small Screen Popup */}
      <animated.div
        style={{ ...popUpSprings }}
        className="lg:hidden fixed bg-stone-800 top-2 bottom-4 right-4 rounded"
      >
        <div className="flex p-2 justify-end w-72">
          <button
            onClick={() => setOpenDrawer(false)}
            className="rounded border border-stone-500/20 text-stone-500 hover:border-pink-700/90 hover:text-pink-700 hover:bg-stone-900 duration-300"
          >
            <XMarkIcon className="" height={24} />
          </button>
        </div>
        <div className="grid gap-2 p-4">
          {tabs.map((tab, index) => (
            <NavLink
              onClick={() => scrollTo(tab.path)}
              className="hover:bg-stone-950 rounded px4 py-2 text-sm hover:ring-1 hover:ring-pink-700/80 hover:text-pink-600 duration-300 flex items-center justify-center"
              key={index}
              to={tab.path}
            >
              {tab.title}
            </NavLink>
          ))}
          <ResumeLink className="justify-center" />
        </div>
      </animated.div>
    </div>
  );
}
