import {
  ChevronRightIcon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ControlledAccordions } from "./accordions/ControlledAccordions";
import clsx from "clsx";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { projects } from "./Projects";
import { useContext } from "react";
import { ScrollContext } from "../App";
import Discord from "./svg-icons/Discord";

const contacts = [
  {
    icon: <PhoneIcon height={20} />,
    value: "+254706087204",
  },
  {
    icon: <EnvelopeIcon height={20} />,
    value: "erickochieng766@gmail.com",
  },
  {
    icon: <EnvelopeIcon height={20} />,
    value: "erickochiengobuya@gmail.com",
  },
];
export const devLinks = [
  {
    platform: "Github",
    icon: <GitHub fontSize="inherit" />,
    href: "https://github.com/erick-sudo",
  },
  {
    platform: "LinkedIn",
    icon: <LinkedIn fontSize="inherit" />,
    href: "https://www.linkedin.com/in/obuya-erick-1297a4193",
  },
  {
    platform: "Facebook",
    icon: <Discord className="h-8 w-8" />,
    href: "https://github.com/erick-sudo",
  },
];

export function HeroSection() {
  const { scrollTo } = useContext(ScrollContext);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4 grid gap-2">
      <h4 className="text-pink-600 font-semibold">Hi, my name is</h4>
      <h1 className="font-extrabold text-6xl border-b border-gray-200/20 pb-4 mb-4">
        Obuya Erick.
      </h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 lg:col-span-3 ">
          <p id="about" className="max-w-lg">
            I am a Full Stack Developer with a strong background in&nbsp;
            <span className="text-pink-600">Java</span>,{" "}
            <span className="text-pink-600">Kotlin</span>,{" "}
            <span className="text-pink-600">JavaScript</span>, and{" "}
            <span className="text-pink-600">Spring</span>. I specialize in
            Android development using Jetpack Compose and Compose Multiplatform.
            On the <em className="text-pink-600">WEB</em>, I work extensively
            with JavaScript technologies including React, Next.js, Vue.js, and
            Node.js, as well as backend frameworks like NestJS. I am passionate
            about building scalable, responsive, and high-performance
            applications across multiple platforms.
          </p>

          <div className="py-4 flex gap-2">
            {devLinks.map(({ icon, platform, href }, index) => (
              <NavLink
                className="text-gray-200 text-3xl border border-gray-200/20 rounded w-12 h-12 flex items-center justify-center hover:text-pink-600 hover:border-pink-600/50 duration-300"
                title={platform}
                to={href}
                key={index}
              >
                <span className="flex items-center">{icon}</span>
              </NavLink>
            ))}
          </div>

          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm py-4">
            {contacts.map(({ icon, value }, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-pink-600">{icon}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative col-span-5 lg:col-span-2">
          <div className="absolute w-32 border-l border-t border-gray-200/30 top-0 bottom-0 left-0 rounded-tl-2xl"></div>
          <h3 className="px-6 py-4 text-pink-600 font-semibold">Projects</h3>

          <div className="">
            <ControlledAccordions
              expand={{
                ExpandIcon: ({ expanded }) => (
                  <span className={clsx("text-gray-200", { "": expanded })}>
                    <ChevronRightIcon height={18} />
                  </span>
                ),
              }}
              className="border-t last:border-b border-gray-200/30"
              expandedClassName="bg-pink-700/10 border-t border-r rounded-tr-lg border-pink-600/50 last:border-b last:border-b-gray-300/20"
              items={projects.map(
                ({ github, live, description, name }, index) => ({
                  summary: name,
                  details: { github, live, description, index },
                })
              )}
              Summary={({ expanded, summary }) => (
                <div
                  className={clsx("", {
                    "border-none text-pink-500": expanded,
                    "text-gray-200": !expanded,
                  })}
                >
                  {summary}
                </div>
              )}
              Details={({ details: { description, index } }) => (
                <div className="text-sm">
                  <div className="text-pink-200 ">{description}</div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        scrollTo(`#project_${index}`);
                      }}
                      className="text-pink-600 flex items-center gap-2 hover:text-white"
                    >
                      <LinkIcon height={20} />
                    </button>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
