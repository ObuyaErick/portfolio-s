import { NavLink } from "react-router-dom";
import { devLinks } from "./HeroSection";

export default function Footer() {
  return (
    <div className="border-t border-gray-200/20 bg-black">
      <div className="container mx-auto p-4 flex items-center flex-col gap-4 md:flex-row md:justify-between text-sm">
        <span>
          {new Date().getFullYear()}&nbsp;&copy; erickochieng766@gmail.com
        </span>
        <div>
          <div className="flex gap-2">
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
        </div>
      </div>
    </div>
  );
}
