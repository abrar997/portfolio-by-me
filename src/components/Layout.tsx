import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <div className="grid grid-cols-4 relative ">
        <div className="bg-sidebar py-12 px-4 h-[750px] sticky  col-span-1 lg:block hidden">
          <Sidebar />
        </div>
        <div className="bg-white col-span-3">{<Outlet />}</div>
      </div>
    </div>
  );
}
