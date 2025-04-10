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
import { Cpu } from "lucide-react";

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
    href: "https://github.com/ObuyaErick",
  },
  {
    platform: "LinkedIn",
    icon: <LinkedIn fontSize="inherit" />,
    href: "https://www.linkedin.com/in/obuya-erick-1297a4193",
  },
  {
    platform: "Facebook",
    icon: <Discord className="h-8 w-8" />,
    href: "https://discord.com/users/erick0349",
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
            <Cpu className="h-8 w-8 float-left mr-2" /> I am a Full Stack
            Developer with a strong background in&nbsp;
            <span className="text-pink-600">Java</span>,&nbsp;
            <span className="text-pink-600">Kotlin</span>,&nbsp;
            <span className="text-pink-600">Dart</span>,&nbsp;
            <span className="text-pink-600">JavaScript</span>, and&nbsp;
            <span className="text-pink-600">Spring</span>. I specialize in
            Android development using{" "}
            <span className="text-stone-500">Jetpack Compose</span>,{" "}
            <span className="text-stone-500">Flutter</span>, and{" "}
            <span className="text-stone-500">Compose Multiplatform</span>. On
            the <em className="text-pink-600">WEB</em>, I work extensively with
            JavaScript technologies including React, Next.js, Vue.js, and
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

// import { useState, useEffect, useRef, useContext } from "react";
// import * as THREE from "three";
// import { Cpu } from "lucide-react";
// import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
// import { GitHub, LinkedIn } from "@mui/icons-material";
// import { NavLink } from "react-router-dom";
// import Discord from "./svg-icons/Discord";
// import { ScrollContext } from "../App";
// import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

// const contacts = [
//   {
//     icon: <PhoneIcon height={20} />,
//     value: "+254706087204",
//   },
//   {
//     icon: <EnvelopeIcon height={20} />,
//     value: "erickochieng766@gmail.com",
//   },
//   {
//     icon: <EnvelopeIcon height={20} />,
//     value: "erickochiengobuya@gmail.com",
//   },
// ];

// export const devLinks = [
//   {
//     platform: "Github",
//     icon: <GitHub fontSize="inherit" />,
//     href: "https://github.com/ObuyaErick",
//   },
//   {
//     platform: "LinkedIn",
//     icon: <LinkedIn fontSize="inherit" />,
//     href: "https://www.linkedin.com/in/obuya-erick-1297a4193",
//   },
//   {
//     platform: "Facebook",
//     icon: <Discord className="h-8 w-8" />,
//     href: "https://discord.com/users/erick0349",
//   },
// ];

// export function HeroSection() {
//   const { scrollTo } = useContext(ScrollContext);
//   const mountRef = useRef<HTMLDivElement>(null);
//   const nameRef = useRef<HTMLDivElement>(null);
//   const imageContainerRef = useRef<HTMLDivElement>(null);
//   const [isHovering, setIsHovering] = useState(false);

//   // Three.js name animation
//   useEffect(() => {
//     if (!nameRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / 120,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

//     renderer.setSize(nameRef.current.clientWidth, 120);
//     nameRef.current.appendChild(renderer.domElement);

//     // Create text
//     const fontLoader = new FontLoader();

//     // Create temporary text mesh while font loads
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
//     const tempCube = new THREE.Mesh(geometry, material);
//     tempCube.visible = false;
//     scene.add(tempCube);

//     // Position camera
//     camera.position.z = 5;

//     // Handle responsive scaling
//     const handleResize = () => {
//       if (!nameRef.current) return;
//       camera.aspect = nameRef.current.clientWidth / 120;
//       camera.updateProjectionMatrix();
//       renderer.setSize(nameRef.current.clientWidth, 120);
//     };

//     window.addEventListener("resize", handleResize);

//     // Create text with font
//     fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
//       scene.remove(tempCube);
//       TextGeometry;
//       const textGeometry = new TextGeometry("Obuya Erick.", {
//         font: font,
//         size: 0.5,
//         curveSegments: 12,
//         bevelEnabled: true,
//         bevelThickness: 0.03,
//         bevelSize: 0.02,
//         bevelOffset: 0,
//         bevelSegments: 5,
//       });

//       // Center text
//       textGeometry.computeBoundingBox();
//       const textWidth =
//         textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;

//       const textMaterial = new THREE.MeshStandardMaterial({
//         color: 0xffffff,
//         emissive: 0xec4899,
//         emissiveIntensity: 0.3,
//         roughness: 0.3,
//         metalness: 0.7,
//       });

//       const textMesh = new THREE.Mesh(textGeometry, textMaterial);
//       textMesh.position.x = -textWidth / 2;
//       textMesh.position.y = -0.25;
//       scene.add(textMesh);

//       // Add lights
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//       scene.add(ambientLight);

//       const pointLight = new THREE.PointLight(0xec4899, 1);
//       pointLight.position.set(2, 1, 4);
//       scene.add(pointLight);
//     });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       if (nameRef.current && nameRef.current.contains(renderer.domElement)) {
//         nameRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   // Image particle effect
//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

//     renderer.setSize(300, 300);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create grayscale image texture
//     const textureLoader = new THREE.TextureLoader();
//     const imagePlaceholder = new THREE.Mesh(
//       new THREE.PlaneGeometry(2, 2),
//       new THREE.MeshBasicMaterial({ color: 0x333333 })
//     );
//     scene.add(imagePlaceholder);

//     // Try to load a profile image texture
//     textureLoader.load(
//       "/images/profile_pic.jpeg", // Replace with your actual image path
//       (texture) => {
//         // Create particles based on image
//         const imageData = getImageData(texture);
//         const particles = createParticles(imageData, isHovering);
//         scene.add(particles);
//         scene.remove(imagePlaceholder);
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading texture", error);
//       }
//     );

//     camera.position.z = 3;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the entire scene slightly
//       scene.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;

//       // Update particle positions if hovering
//       if (isHovering) {
//         scene.children.forEach((child) => {
//           if (child.isParticleSystem) {
//             const positions = child.geometry.attributes.position.array;

//             for (let i = 0; i < positions.length; i += 3) {
//               // Add some random movement
//               positions[i] += (Math.random() - 0.5) * 0.01;
//               positions[i + 1] += (Math.random() - 0.5) * 0.01;
//               positions[i + 2] += (Math.random() - 0.5) * 0.01;
//             }

//             child.geometry.attributes.position.needsUpdate = true;
//           }
//         });
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle responsive scaling
//     const handleResize = () => {
//       if (!mountRef.current) return;
//       renderer.setSize(300, 300);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, [isHovering]);

//   // Helper function to extract image data
//   function getImageData(texture) {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     const image = texture.image;

//     canvas.width = image.width;
//     canvas.height = image.height;

//     context?.drawImage(image, 0, 0);

//     // Convert to grayscale
//     const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData?.data;

//     if (data) {
//       for (let i = 0; i < data.length; i += 4) {
//         const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//         data[i] = data[i + 1] = data[i + 2] = avg;
//       }
//     }

//     return imageData;
//   }

//   // Create particle system from image
//   function createParticles(imageData, explode) {
//     const geometry = new THREE.BufferGeometry();
//     const particles = [];
//     const colors = [];
//     const size = 2;

//     const width = imageData.width;
//     const height = imageData.height;

//     // Sample pixels at regular intervals
//     for (let y = 0; y < height; y += 4) {
//       for (let x = 0; x < width; x += 4) {
//         const i = (y * width + x) * 4;
//         const brightness = imageData.data[i] / 255;

//         if (brightness > 0.1) {
//           // Only create particles for non-black areas
//           // Map x,y to centered coordinates
//           const xPos = (x / width - 0.5) * 2;
//           const yPos = (y / height - 0.5) * -2; // Invert Y to match image

//           // Add jitter if exploding
//           const jitterX = explode ? (Math.random() - 0.5) * 0.8 : 0;
//           const jitterY = explode ? (Math.random() - 0.5) * 0.8 : 0;
//           const jitterZ = explode ? (Math.random() - 0.5) * 0.8 : 0;

//           particles.push(xPos + jitterX, yPos + jitterY, jitterZ);

//           // Grayscale color based on pixel brightness
//           colors.push(brightness, brightness, brightness);
//         }
//       }
//     }

//     geometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(particles, 3)
//     );
//     geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

//     const material = new THREE.PointsMaterial({
//       size: 0.02,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//     });

//     const particleSystem = new THREE.Points(geometry, material);
//     particleSystem.isParticleSystem = true;

//     return particleSystem;
//   }

//   return (
//     <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4 grid gap-2">
//       <h4 className="text-pink-600 font-semibold">Hi, my name is</h4>

//       {/* Three.js name rendering */}
//       <div
//         ref={nameRef}
//         className="w-full h-32 font-extrabold border-b border-gray-200/20 pb-4 mb-4"
//       >
//         {/* Three.js will render here */}
//       </div>

//       <div className="grid grid-cols-5 gap-4">
//         <div className="col-span-5 lg:col-span-3">
//           <p id="about" className="max-w-lg">
//             <Cpu className="h-8 w-8 float-left mr-2" /> I am a Full Stack
//             Developer with a strong background in&nbsp;
//             <span className="text-pink-600">Java</span>,&nbsp;
//             <span className="text-pink-600">Kotlin</span>,&nbsp;
//             <span className="text-pink-600">Dart</span>,&nbsp;
//             <span className="text-pink-600">JavaScript</span>, and&nbsp;
//             <span className="text-pink-600">Spring</span>. I specialize in
//             Android development using{" "}
//             <span className="text-stone-500">Jetpack Compose</span>,{" "}
//             <span className="text-stone-500">Flutter</span>, and{" "}
//             <span className="text-stone-500">Compose Multiplatform</span>. On
//             the <em className="text-pink-600">WEB</em>, I work extensively with
//             JavaScript technologies including React, Next.js, Vue.js, and
//             Node.js, as well as backend frameworks like NestJS. I am passionate
//             about building scalable, responsive, and high-performance
//             applications across multiple platforms.
//           </p>

//           <div className="py-4 flex gap-2">
//             {devLinks.map(({ icon, platform, href }, index) => (
//               <NavLink
//                 className="text-gray-200 text-3xl border border-gray-200/20 rounded w-12 h-12 flex items-center justify-center hover:text-pink-600 hover:border-pink-600/50 duration-300"
//                 title={platform}
//                 to={href}
//                 key={index}
//               >
//                 <span className="flex items-center">{icon}</span>
//               </NavLink>
//             ))}
//           </div>

//           <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm py-4">
//             {contacts.map(({ icon, value }, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <span className="text-pink-600">{icon}</span>
//                 <span>{value}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative col-span-5 lg:col-span-2">
//           <div
//             className="flex"
//             ref={imageContainerRef}
//           >
//             <div
//               ref={mountRef}
//               className="grow border border-gray-200/30 rounded-lg overflow-hidden relative"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//             >
//               {/* Three.js will render here */}
//               {/* Fallback if Three.js fails */}
//               {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <p className="text-gray-500 text-sm">Interactive 3D Portrait</p>
//               </div> */}
//             </div>

//             {/* <div className="mt-4 text-center">
//               <p className="text-sm text-gray-400">
//                 Hover to see particle explosion effect
//               </p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
