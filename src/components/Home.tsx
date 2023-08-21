import { LiaHandPeaceSolid } from "react-icons/lia";
import { FaMapMarker } from "react-icons/fa";
import { MdPermPhoneMsg, MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
const data = [
  { name: "Iraq_erbil", icon: <FaMapMarker /> },
  { name: "07831190254", icon: <MdPermPhoneMsg /> },
  { name: "abraralrawi997@gmail.com", icon: <MdEmail /> },
  {
    name: "https://www.linkedin.com/in/abrar-muthana-658027205",
    icon: <BsLinkedin />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start  justify-center lg:-mt-6 h-full">
      <h1 className="font-bold text-primary lg:text-[42px] text-3xl  lg:leading-[50px]">
        Hello I'm <br />
        <span className="flex items-center ">
          A Developer ...
          <LiaHandPeaceSolid className="fill-main" />
        </span>
      </h1>
      <p className="text-gray-600">
        Frontend developer using modern different skills to implement projects
        ...
      </p>
      <div className="grid gap-2 lg:grid-cols-2 text-sm">
        {data.map((i, index) => {
          return (
            <div key={index} className="flex items-center gap-2 text-primary">
              <p className="text-main">{i.icon}</p>
              <p>{i.name}</p>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="bg-primary rounded-3xl text-white hover:bg-main transition-all duration-300 py-1 lg:py-2 px-4 capitalize"
      >
        download resume
      </button>
    </div>
  );
}
