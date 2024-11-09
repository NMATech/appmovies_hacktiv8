import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer/Footer";
import SearchCard from "../Components/Navbar/SearchCard";

const Layout = () => {
  const { showCard } = useSelector((state) => state.movie);

  return (
    <>
      <Navbar />

      <main className="bg-main-bg_primary min-h-[25em] text-white p-2">
        <Outlet />
      </main>

      {showCard && <SearchCard />}

      <Footer />
    </>
  );
};

export default Layout;
