import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 relative ">
        <div className="bg-sidebar py-12 px-4 h-[750px] sticky  col-span-1 lg:block hidden">
          <Sidebar />
        </div>
        <div className="bg-sidebar lg:bg-white lg:col-span-3 h-screen lg:max-h-[750px] p-4 lg:p-12 overflow-auto">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}
