import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Fullscreen, GitHub } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProjectScreenShots } from "../assets/project_screenshots/ProjectScreenShots";
import { ManualModal } from "./modals/ManualModal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Masonry } from "@mui/lab";

interface IProject {
  github: string;
  images: string[];
  name: string;
  live: string;
  description: string;
  techStack: string[];
}

export const projects: IProject[] = [
  {
    github: "",
    images: ProjectScreenShots.WonderWedding,
    name: "WonderWedding",
    live: "https://wonderwedding.app",
    description:
      "Currently contributing to a crowdfunding platform designed specifically for couples to fund their dream weddings. Friends and family can contribute to specific wedding elements, track funding progress, and leave heartfelt messages. The app offers seamless payment processing, personalized wedding pages, and real-time updates for both couples and guests.",
    techStack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Stripe API"],
  },
  {
    github: "https://github.com/ObuyaErick/e-ventured-web",
    images: ProjectScreenShots.EntryVentures,
    name: "Entry Ventures",
    live: "https://e-ventured-web.vercel.app/dashboard",
    description:
      "A loan management system designed for Entry Ventures to track loan applications, payments, and approvals. It ensures a seamless process for both clients and administrators.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Docker", "Apache MQ"],
  },
  {
    github: "",
    images: ProjectScreenShots.Advocacy,
    name: "Advocacy Suite",
    live: "",
    description:
      "A platform for advocacy organizations to manage cases, clients, and campaigns efficiently, streamlining operations and improving workflow with a responsive interface.",
    techStack: ["Next.js", "Node.js", "NestJS", "PosgreSQL"],
  },
  {
    github: "",
    images: ProjectScreenShots.Chase,
    name: "Chase Download Manager",
    live: "",
    description:
      "A cross-platform file download manager that improves download speeds and organizes files. The application offers enhanced user experience across Android and desktop platforms.",
    techStack: ["Java", "Kotlin", "Compose Multiplatform", "Coroutines"],
  },
  {
    github: "https://github.com/ObuyaErick/numbersystemconversion",
    images: ProjectScreenShots.NumberSystemConverter,
    name: "Number System Converter",
    live: "https://numbersystemconversion-erick.vercel.app/",
    description:
      "A tool that allows users to easily convert numbers between different numeral systems, including binary, decimal, octal, and hexadecimal.",
    techStack: ["React", "TypeScript"],
  },
  {
    github: "",
    images: ProjectScreenShots.AgriConnect,
    name: "Agriconnect",
    live: "https://agriconnectke.com",
    description:
      "A platform connecting local farmers with consumers, providing real-time product availability and order tracking, fostering direct farm-to-table commerce.",
    techStack: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(-1);

  const previewingProject = projects[selectedProject];

  return (
    <div id="projects" className="container mx-auto px-4 py-12 my-12">
      <h3 className="py-2 text-pink-600 font-semibold">Previous Work</h3>

      <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2}>
        {/* <div className="grid gap-4 md:grid-cols-2"> */}
        {projects.map(
          ({ name, description, techStack, github, live, images }, index) => (
            <div
              id={`project_${index}`}
              onClick={() => {
                setSelectedProject(index);
              }}
              key={index}
              className="bg-stone-800/20 shadow-lg group cursor-pointer duration-200 hover:scale-105 rounded-xl overflow-hidden border border-gray-300/10"
            >
              <div className="p-4">
                <div className="transition-opacity duration-300 opacity-70 group-hover:opacity-100">
                  <h3 className="py-4 text-pink-200 uppercase font-bold">
                    {name}
                  </h3>
                  <div>{description}</div>
                </div>

                <div className="flex flex-wrap gap-y-1.5 gap-x-2 py-2">
                  {techStack.map((stck, idx) => (
                    <div
                      className="bg-pink-600/20 text-pink-500 rounded-full px-4 py text-xs py-1"
                      key={idx}
                    >
                      {stck}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <NavLink to={live}>
                      <GlobeAltIcon height={28} />
                    </NavLink>

                    {github && (
                      <NavLink to={github}>
                        <GitHub height={28} />
                      </NavLink>
                    )}
                  </div>

                  {images.length ? (
                    <ManualModal
                      contentClassName="max-w-2xl mx-auto"
                      viewPortClassName="bg-stone-800 shadow-md shadow-black"
                      anchorClassName="cursor-pointer px-4 py-1 text-pink-400 flex items-center gap-2 border border-gray-300/10 rounded-lg hover:bg-pink-700 hover:text-white duration-300 hover:scale-105"
                      anchorContent={
                        <>
                          <span>Preview</span>
                          <Fullscreen />
                        </>
                      }
                    >
                      <div>
                        {previewingProject && (
                          <div className="grid grid-cols-1 swiper-bullets-green">
                            <Swiper
                              loop
                              autoplay={{
                                delay: 5000,
                                pauseOnMouseEnter: true,
                              }}
                              breakpoints={{
                                320: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },

                                1280: {
                                  slidesPerView: 2,
                                  spaceBetween: 10,
                                },
                              }}
                              spaceBetween={10}
                              mousewheel
                              freeMode
                              speed={500}
                              tabIndex={0}
                              keyboard
                              pagination={{
                                clickable: true,
                              }}
                              navigation
                              className="w-full mx-auto"
                              effect={"slide"}
                              grabCursor={true}
                              modules={[
                                EffectCoverflow,
                                Keyboard,
                                Pagination,
                                Mousewheel,
                                FreeMode,
                                Autoplay,
                                Navigation,
                              ]}
                            >
                              {previewingProject.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                  <div className="rounded overflow-hidden h-96 mb-12 flex items-center justify-center">
                                    <img
                                      alt={previewingProject.name}
                                      src={image}
                                      className="h-full object-contain"
                                    />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        )}
                      </div>
                    </ManualModal>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          )
        )}
        {/* </div> */}
      </Masonry>
    </div>
  );
}
