import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";

const Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills & Experience", link: "/skills-experience" },
  { name: "Work", link: "/works" },
  { name: "Contact", link: "/contact" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-center h-full pb-24 ">
      <div className="flex flex-col items-center justify-center row-span-1 gap-2">
        <div className="relative h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="178"
            height="154"
            viewBox="0 0 178 154"
            fill="none"
          >
            <path
              d="M177.75 89.6418C177.75 114.315 167.828 130.321 151.802 140.173C135.754 150.038 113.56 153.75 89 153.75C64.4402 153.75 42.2457 150.038 26.1984 140.173C10.1715 130.321 0.25 114.315 0.25 89.6418C0.25 40.2704 39.9864 0.25 89 0.25C138.014 0.25 177.75 40.2704 177.75 89.6418Z"
              fill="#45567A"
              stroke="#767373"
              stroke-width="0.5"
            />
          </svg>
          <img
            src={require("../assets/images/me.png")}
            alt=""
            className="w-44 h-44 absolute bottom-0 "
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-main text-3xl font-semibold">
            Abrar Muthana Rakea
          </h1>
          <p className="text-gray-700">Frontend web developer</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full my-3 gap-3 row-span-1 font-semibold text-main h-full ">
        {Links.map((i) => {
          return (
            <Link
              to={i.link}
              className="hover:border-b border-main hover:text-gray-800 transition-all duration-300"
            >
              {i.name}
            </Link>
          );
        })}
      </div>
      <p className="flex items-center justify-center mt-auto gap-1 text-gray-600 text-sm">
        All rights reserved
        <BsFillHeartFill size={12} className="fill-main" /> abrar muthana 2023
      </p>
    </div>
  );
}
