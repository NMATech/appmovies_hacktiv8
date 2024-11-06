import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="bg-main-bg_primary text-white p-2">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;